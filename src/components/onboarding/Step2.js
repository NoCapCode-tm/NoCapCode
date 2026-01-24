import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Users, MapPin, AlertCircle, Upload } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';

const Step2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    aadhaarNumber: '',
    panCardNumber: '',
    aadhaarUpload: null,
    panCardUpload: null,
    collegeIdUpload: null,
    passportPhoto: null
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding_step2');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(parsed);
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const validateForm = () => {
    const requiredFields = ['aadhaarNumber']; // PAN Card Number is now optional
    const requiredFiles = ['aadhaarUpload', 'passportPhoto']; // PAN Card upload and College ID are now optional

    // Check text fields
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return false;
    }

    // Check file uploads
    const missingFiles = requiredFiles.filter(field => !formData[field]);
    
    if (missingFiles.length > 0) {
      alert(`Please upload all required documents: ${missingFiles.join(', ')}`);
      return false;
    }

    // Aadhaar number validation (12 digits)
    const aadhaarRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;
    if (!aadhaarRegex.test(formData.aadhaarNumber.replace(/\s/g, ''))) {
      alert('Please enter a valid 12-digit Aadhaar number');
      return false;
    }

    // PAN card validation (only if provided)
    if (formData.panCardNumber && formData.panCardNumber.trim() !== '') {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!panRegex.test(formData.panCardNumber.toUpperCase())) {
        alert('Please enter a valid PAN card number (format: ABCDE1234F)');
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }
    
    // Save data to localStorage or context
    localStorage.setItem('onboarding_step2', JSON.stringify(formData));
    navigate('/onboarding/step3');
  };

  const handlePrevious = () => {
    navigate('/onboarding/step1');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: true },
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
              <span className={styles.stepNumber}>Step 2 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Identity Information</h2>
            <p className={styles.stepDescription}>
              Upload your identity documents for verification and official documentation.
              Fields marked with * are mandatory.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Aadhaar Number
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="XXXX XXXX XXXX"
                    value={formData.aadhaarNumber}
                    onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Pan Card Number (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="XXXXXXXXXX"
                    value={formData.panCardNumber}
                    onChange={(e) => handleInputChange('panCardNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Passport-size Photograph
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="passportPhoto"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('passportPhoto', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="passportPhoto" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.passportPhoto && (
                      <span className={styles.fileName}>{formData.passportPhoto.name}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Aadhaar Card Upload (PDF/JPG)
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="aadhaarUpload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('aadhaarUpload', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="aadhaarUpload" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.aadhaarUpload && (
                      <span className={styles.fileName}>{formData.aadhaarUpload.name}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Upload PAN Card (PDF/JPG) (if available)
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="panCardUpload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('panCardUpload', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="panCardUpload" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.panCardUpload && (
                      <span className={styles.fileName}>{formData.panCardUpload.name}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    College / University ID Card (if available)
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="collegeIdUpload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('collegeIdUpload', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="collegeIdUpload" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.collegeIdUpload && (
                      <span className={styles.fileName}>{formData.collegeIdUpload.name}</span>
                    )}
                  </div>
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
                Next: Education Details →
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

export default Step2;