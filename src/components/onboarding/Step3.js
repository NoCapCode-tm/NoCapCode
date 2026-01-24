import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Users, MapPin, AlertCircle, GraduationCap } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';

const Step3 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    highestQualification: '',
    collegeName: '',
    courseName: '',
    currentYear: '',
    expectedGraduation: ''
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding_step3');
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
      'highestQualification',
      'collegeName',
      'courseName',
      'currentYear'
      // 'expectedGraduation' is now optional
    ];

    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }
    
    // Save data to localStorage or context
    localStorage.setItem('onboarding_step3', JSON.stringify(formData));
    navigate('/onboarding/step4');
  };

  const handlePrevious = () => {
    navigate('/onboarding/step2');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: true },
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
                {step.id === 3 && <GraduationCap size={16} />}
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
              <span className={styles.stepNumber}>Step 3 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Education Details</h2>
            <p className={styles.stepDescription}>
              Share your academic background and qualification details.
              Fields marked with * are mandatory.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Highest Qualification
                  </label>
                  <select
                    className={styles.select}
                    value={formData.highestQualification}
                    onChange={(e) => handleInputChange('highestQualification', e.target.value)}
                  >
                    <option value="">Graduation, diploma, High School, Diploma, Undergraduate, Postgraduate</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    College / University Name
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter college/university name"
                    value={formData.collegeName}
                    onChange={(e) => handleInputChange('collegeName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Current Year / Semester
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. 2nd Year / 4th Semester"
                    value={formData.currentYear}
                    onChange={(e) => handleInputChange('currentYear', e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Course / Program Name
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. B.Tech Computer Science"
                    value={formData.courseName}
                    onChange={(e) => handleInputChange('courseName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Expected Graduation Year (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Please enter e.g. 3rd Year / 6th Semester"
                    value={formData.expectedGraduation}
                    onChange={(e) => handleInputChange('expectedGraduation', e.target.value)}
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
                Next: Role & Engagement Details →
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

export default Step3;