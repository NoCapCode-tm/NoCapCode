import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, AlertCircle, GraduationCap, Briefcase, CreditCard, Settings, CheckCircle, Edit } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';

const Step7 = () => {
  const navigate = useNavigate();
  const [allData, setAllData] = useState({});
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    // Load all data from localStorage
    const step1Data = JSON.parse(localStorage.getItem('onboarding_step1') || '{}');
    const step2Data = JSON.parse(localStorage.getItem('onboarding_step2') || '{}');
    const step3Data = JSON.parse(localStorage.getItem('onboarding_step3') || '{}');
    const step4Data = JSON.parse(localStorage.getItem('onboarding_step4') || '{}');
    const step5Data = JSON.parse(localStorage.getItem('onboarding_step5') || '{}');
    const step6Data = JSON.parse(localStorage.getItem('onboarding_step6') || '{}');

    setAllData({
      step1: step1Data,
      step2: step2Data,
      step3: step3Data,
      step4: step4Data,
      step5: step5Data,
      step6: step6Data
    });
  }, []);

  const handleSubmit = () => {
    if (!agreed) {
      alert('Please agree to the terms and conditions to proceed.');
      return;
    }
    
    // Save final submission
    localStorage.setItem('onboarding_completed', JSON.stringify({
      ...allData,
      submittedAt: new Date().toISOString(),
      agreed: true
    }));
    
    // Navigate to completion page
    navigate('/onboarding/complete');
  };

  const handleEdit = (step) => {
    navigate(`/onboarding/step${step}`);
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: false },
    { id: 5, label: 'Bank Details', active: false },
    { id: 6, label: 'System Info', active: false },
    { id: 7, label: 'Declaration', active: true }
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
                {step.id === 6 && <Settings size={16} />}
                {step.id === 7 && <CheckCircle size={16} />}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className={styles.reviewContainer}>
          <div className={styles.stepHeader}>
            <h1 className={styles.stepTitle}>
              <span className={styles.stepNumber}>Step 7 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Review & Declaration</h2>
            <p className={styles.stepDescription}>
              Please review all the information you've provided. You can edit any section by clicking the edit button.
            </p>
          </div>

          {/* Review Sections */}
          <div className={styles.reviewSections}>
            
            {/* Personal Information */}
            <div className={styles.reviewSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <User size={20} />
                  Personal Information
                </h3>
                <button 
                  className={styles.editButton}
                  onClick={() => handleEdit(1)}
                >
                  <Edit size={16} />
                  Edit
                </button>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Full Name:</span>
                    <span className={styles.infoValue}>{allData.step1?.fullName || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Email:</span>
                    <span className={styles.infoValue}>{allData.step1?.personalEmail || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Phone:</span>
                    <span className={styles.infoValue}>{allData.step1?.phoneNumber || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Date of Birth:</span>
                    <span className={styles.infoValue}>{allData.step1?.dateOfBirth || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Gender:</span>
                    <span className={styles.infoValue}>{allData.step1?.gender || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Emergency Contact:</span>
                    <span className={styles.infoValue}>{allData.step1?.emergencyContactName || 'Not provided'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Identity Information */}
            <div className={styles.reviewSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <AlertCircle size={20} />
                  Identity Information
                </h3>
                <button 
                  className={styles.editButton}
                  onClick={() => handleEdit(2)}
                >
                  <Edit size={16} />
                  Edit
                </button>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Aadhaar Number:</span>
                    <span className={styles.infoValue}>{allData.step2?.aadhaarNumber || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>PAN Card Number:</span>
                    <span className={styles.infoValue}>{allData.step2?.panCardNumber || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Documents:</span>
                    <span className={styles.infoValue}>
                      {allData.step2?.aadhaarUpload ? 'Aadhaar uploaded' : ''} 
                      {allData.step2?.panCardUpload ? ', PAN uploaded' : ''}
                      {allData.step2?.collegeIdUpload ? ', College ID uploaded' : ''}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Details */}
            <div className={styles.reviewSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <GraduationCap size={20} />
                  Education Details
                </h3>
                <button 
                  className={styles.editButton}
                  onClick={() => handleEdit(3)}
                >
                  <Edit size={16} />
                  Edit
                </button>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Highest Qualification:</span>
                    <span className={styles.infoValue}>{allData.step3?.highestQualification || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>College/University:</span>
                    <span className={styles.infoValue}>{allData.step3?.collegeName || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Course/Program:</span>
                    <span className={styles.infoValue}>{allData.step3?.courseName || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Current Year:</span>
                    <span className={styles.infoValue}>{allData.step3?.currentYear || 'Not provided'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Role & Engagement Details */}
            <div className={styles.reviewSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <Briefcase size={20} />
                  Role & Engagement Details
                </h3>
                <button 
                  className={styles.editButton}
                  onClick={() => handleEdit(4)}
                >
                  <Edit size={16} />
                  Edit
                </button>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Role/Designation:</span>
                    <span className={styles.infoValue}>{allData.step4?.roleDesignation || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Department:</span>
                    <span className={styles.infoValue}>{allData.step4?.department || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Engagement Type:</span>
                    <span className={styles.infoValue}>{allData.step4?.engagementType || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Work Mode:</span>
                    <span className={styles.infoValue}>{allData.step4?.workMode || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Duration:</span>
                    <span className={styles.infoValue}>
                      {allData.step4?.startDate && allData.step4?.endDate 
                        ? `${allData.step4.startDate} to ${allData.step4.endDate}` 
                        : 'Not provided'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank & Payroll Details */}
            <div className={styles.reviewSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <CreditCard size={20} />
                  Bank & Payroll Details
                </h3>
                <button 
                  className={styles.editButton}
                  onClick={() => handleEdit(5)}
                >
                  <Edit size={16} />
                  Edit
                </button>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Account Holder:</span>
                    <span className={styles.infoValue}>{allData.step5?.bankAccountHolderName || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Bank Name:</span>
                    <span className={styles.infoValue}>{allData.step5?.bankName || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Account Number:</span>
                    <span className={styles.infoValue}>
                      {allData.step5?.bankAccountNumber ? '****' + allData.step5.bankAccountNumber.slice(-4) : 'Not provided'}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>IFSC Code:</span>
                    <span className={styles.infoValue}>{allData.step5?.ifscCode || 'Not provided'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System & Work Details */}
            <div className={styles.reviewSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <Settings size={20} />
                  System & Work Details
                </h3>
                <button 
                  className={styles.editButton}
                  onClick={() => handleEdit(6)}
                >
                  <Edit size={16} />
                  Edit
                </button>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Laptop Type:</span>
                    <span className={styles.infoValue}>{allData.step6?.laptopType || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Operating System:</span>
                    <span className={styles.infoValue}>{allData.step6?.operatingSystem || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Portfolio:</span>
                    <span className={styles.infoValue}>{allData.step6?.portfolioLink || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>GitHub:</span>
                    <span className={styles.infoValue}>{allData.step6?.githubProfile || 'Not provided'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Declaration */}
          <div className={styles.declarationSection}>
            <h3 className={styles.declarationTitle}>Declaration</h3>
            <p className={styles.declarationText}>
              I hereby declare that all the information provided above is true and accurate to the best of my knowledge. 
              I understand that any false information may result in the rejection of my application or termination of employment/internship.
            </p>
            
            <div className={styles.agreementSection}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>
                  I agree to the terms and conditions and confirm that all information provided is accurate.
                </span>
              </label>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <button
              type="button"
              className={styles.prevButton}
              onClick={() => navigate('/onboarding/step6')}
            >
              ← Previous
            </button>
            
            <button
              type="button"
              className={`${styles.submitButton} ${!agreed ? styles.disabled : ''}`}
              onClick={handleSubmit}
              disabled={!agreed}
            >
              Submit Application
            </button>
          </div>
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

export default Step7;