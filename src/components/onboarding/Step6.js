import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Users, MapPin, AlertCircle, GraduationCap, Briefcase, CreditCard, Settings } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';

const Step6 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    laptopType: '',
    operatingSystem: '',
    portfolioLink: '',
    githubProfile: '',
    linkedinProfile: ''
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding_step6');
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
      'laptopType',
      'operatingSystem',
      'linkedinProfile'
      // 'portfolioLink', 'githubProfile' are now optional
    ];

    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return false;
    }

    // URL validation for portfolio, GitHub, and LinkedIn (only if provided)
    const urlRegex = /^https?:\/\/.+/;
    
    if (formData.portfolioLink && formData.portfolioLink.trim() !== '' && !urlRegex.test(formData.portfolioLink)) {
      alert('Please enter a valid portfolio URL (starting with http:// or https://)');
      return false;
    }

    if (formData.githubProfile && formData.githubProfile.trim() !== '' && !urlRegex.test(formData.githubProfile)) {
      alert('Please enter a valid GitHub profile URL (starting with http:// or https://)');
      return false;
    }

    if (formData.linkedinProfile && !urlRegex.test(formData.linkedinProfile)) {
      alert('Please enter a valid LinkedIn profile URL (starting with http:// or https://)');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }
    
    // Mark step as completed
    localStorage.setItem('onboarding_step6_completed', 'true');
    
    // Save data to localStorage or context
    localStorage.setItem('onboarding_step6', JSON.stringify(formData));
    navigate('/onboarding/step7');
  };

  const handlePrevious = () => {
    navigate('/onboarding/step5');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: false },
    { id: 5, label: 'Bank Details', active: false },
    { id: 6, label: 'System Info', active: true },
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
                {step.id === 6 && <Settings size={16} />}
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
              <span className={styles.stepNumber}>Step 6 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>System & Work Details</h2>
            <p className={styles.stepDescription}>
              Help us set up your tools, access, and work environment.
              Some fields are optional but recommended.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Laptop Type
                  </label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="laptopType"
                        value="personal"
                        checked={formData.laptopType === 'personal'}
                        onChange={(e) => handleInputChange('laptopType', e.target.value)}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioText}>Personal</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="laptopType"
                        value="company-provided"
                        checked={formData.laptopType === 'company-provided'}
                        onChange={(e) => handleInputChange('laptopType', e.target.value)}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioText}>Company-provided</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Operating System
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Options: Windows, macOS, Linux, Other"
                    value={formData.operatingSystem}
                    onChange={(e) => handleInputChange('operatingSystem', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Portfolio Link (if available)
                  </label>
                  <p className={styles.fieldNote}>
                    Showcase/portfolio/website/github/behance
                  </p>
                  <input
                    type="url"
                    className={styles.input}
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolioLink}
                    onChange={(e) => handleInputChange('portfolioLink', e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    GitHub Profile (if available)
                  </label>
                  <p className={styles.fieldNote}>
                    For tech roles
                  </p>
                  <input
                    type="url"
                    className={styles.input}
                    placeholder="https://github.com/username"
                    value={formData.githubProfile}
                    onChange={(e) => handleInputChange('githubProfile', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    className={styles.input}
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedinProfile}
                    onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
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
                Review & Declaration →
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

export default Step6;