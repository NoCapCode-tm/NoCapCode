import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, AlertCircle, GraduationCap, Briefcase, CreditCard } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';

const Step5 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bankAccountHolderName: '',
    bankAccountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: '',
    upiId: ''
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding_step5');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    // All bank details are now optional - user can skip if not applicable
    
    // If any bank details are provided, validate the format
    if (formData.ifscCode && formData.ifscCode.trim() !== '') {
      const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
      if (!ifscRegex.test(formData.ifscCode.toUpperCase())) {
        alert('Please enter a valid IFSC code (format: ABCD0123456)');
        return false;
      }
    }

    if (formData.bankAccountNumber && formData.bankAccountNumber.trim() !== '') {
      if (!/^\d{9,18}$/.test(formData.bankAccountNumber)) {
        alert('Please enter a valid bank account number (9-18 digits)');
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }
    
    // Mark step as completed (even if all fields are empty)
    localStorage.setItem('onboarding_step5_completed', 'true');
    
    // Save data to localStorage or context
    localStorage.setItem('onboarding_step5', JSON.stringify(formData));
    navigate('/onboarding/step6');
  };

  const handlePrevious = () => {
    navigate('/onboarding/step4');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: false },
    { id: 5, label: 'Bank Details', active: true },
    { id: 6, label: 'System Info', active: false },
    { id: 7, label: 'Declaration', active: false }
  ];

  return (
    <div className={styles.onboardingStep}>
      <Navbar />
      
      <div className={styles.container}>
        {/* Progress Indicators */}
        <div className={styles.progressContainer}>
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`${styles.progressStep} ${step.active ? styles.active : ''}`}
            >
              <div className={styles.stepIcon}>
                {step.id === 1 && <User size={16} />}
                {step.id === 2 && <AlertCircle size={16} />}
                {step.id === 3 && <GraduationCap size={16} />}
                {step.id === 4 && <Briefcase size={16} />}
                {step.id === 5 && <CreditCard size={16} />}
                {step.id === 6 && <Phone size={16} />}
                {step.id === 7 && <Mail size={16} />}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className={styles.formContainer}>
          <div className={styles.stepHeader}>
            <h1 className={styles.stepTitle}>
              <span className={styles.stepNumber}>Step 5 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Bank & Payroll Details</h2>
            <p className={styles.stepDescription}>
              Provide payment details for stipend, salary or future reimbursements.
              All fields are optional - you can skip this step if not applicable.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Bank Account Holder Name (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter name as per bank records"
                    value={formData.bankAccountHolderName}
                    onChange={(e) => handleInputChange('bankAccountHolderName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Bank Account Number (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter account number"
                    value={formData.bankAccountNumber}
                    onChange={(e) => handleInputChange('bankAccountNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Bank Name (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter bank name"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    UPI ID (if available)
                  </label>
                  <p className={styles.fieldNote}>Optional</p>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="yourname@upi"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange('upiId', e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    IFSC Code (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. SBIN0000123"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Branch Name (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter branch name"
                    value={formData.branchName}
                    onChange={(e) => handleInputChange('branchName', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
              <button
                type="button"
                className={styles.prevButton}
                onClick={handlePrevious}
              >
                ← Previous
              </button>
              
              <button
                type="button"
                className={styles.nextButton}
                onClick={handleNext}
              >
                Next: System & Work Details →
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer - Same as onboarding page */}
      <footer className={styles.footerWrap}>
        <div className={styles.footerScene}>
          <img src="/nocapbg.png" width="100%" height="100%" alt="/" />
        </div>
        <div className={styles.footerBox}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h2 className={styles.logo}>NoCapCode™</h2>
              <p className={styles.tagline}>No cap. Built like it's ours.</p>
            </div>
            <div className={styles.right}>
              <div className={styles.col}>
                <h4>Company</h4>
                <p>Algodones, New Mexico,<br />US, 87001</p>
              </div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.bottom}>
            <p>© 2025-2026 NoCapCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Step5;