import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Users, MapPin, AlertCircle } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';

const Step1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    personalEmail: '',
    phoneNumber: '',
    dateOfBirth: '',
    permanentAddress: '',
    communicationAddress: '',
    gender: '',
    emergencyContactNumber: '',
    emergencyContactName: ''
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding_step1');
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
    const requiredFields = [
      'fullName',
      'personalEmail',
      'phoneNumber',
      'dateOfBirth',
      'permanentAddress',
      'communicationAddress',
      'gender',
      'emergencyContactNumber',
      'emergencyContactName'
    ];

    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.personalEmail)) {
      alert('Please enter a valid email address');
      return false;
    }

    // Phone number validation (basic)
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!phoneRegex.test(formData.phoneNumber) || !phoneRegex.test(formData.emergencyContactNumber)) {
      alert('Please enter valid phone numbers');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }
    
    // Save data to localStorage or context
    localStorage.setItem('onboarding_step1', JSON.stringify(formData));
    navigate('/onboarding/step2');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: true },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: false },
    { id: 5, label: 'Bank Details', active: false },
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
                {step.id === 3 && <Calendar size={16} />}
                {step.id === 4 && <Users size={16} />}
                {step.id === 5 && <MapPin size={16} />}
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
              <span className={styles.stepNumber}>Step 1 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Basic Personal Information</h2>
            <p className={styles.stepDescription}>
              Please provide your basic details for official records and communication.
              Fields marked with * are mandatory.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Full Name (as per Aadhaar)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Phone Number (WhatsApp enabled)
                  </label>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Permanent Address
                  </label>
                  <textarea
                    className={styles.textarea}
                    placeholder="Enter permanent address"
                    value={formData.permanentAddress}
                    onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Communication Address
                  </label>
                  <p className={styles.fieldNote}>
                    Address where you want to receive official communication
                  </p>
                  <textarea
                    className={styles.textarea}
                    placeholder="Enter communication address"
                    value={formData.communicationAddress}
                    onChange={(e) => handleInputChange('communicationAddress', e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Personal Email ID
                  </label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="your.email@example.com"
                    value={formData.personalEmail}
                    onChange={(e) => handleInputChange('personalEmail', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className={styles.input}
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Gender
                  </label>
                  <select
                    className={styles.select}
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.emergencyContactNumber}
                    onChange={(e) => handleInputChange('emergencyContactNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Emergency contact name"
                    value={formData.emergencyContactName}
                    onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
              <button
                type="button"
                className={styles.prevButton}
                onClick={() => navigate('/onboarding')}
              >
                ← Previous
              </button>
              
              <button
                type="button"
                className={styles.nextButton}
                onClick={handleNext}
              >
                Next: Identity Information →
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

export default Step1;