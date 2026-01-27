import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, AlertCircle, GraduationCap, Briefcase, Linkedin, Instagram } from 'lucide-react';

import styles from '../../CSS/OnboardingStep.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import LoaderDots from '../LoaderDots';

const Step4 = () => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    roleDesignation: '',
    department: '',
    engagementType: '',
    workMode: '',
    startDate: '',
    endDate: '',
    workingHours: '',
    reportingManager: ''
  });

  // Load saved data on component mount
  useEffect(() => {
  const fetchUser = async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        "https://atlasbackend-px53.onrender.com/api/v1/employee/getuser",
        { withCredentials: true }
      );

      const u = res.data.message;

      setFormData({
        roleDesignation: u?.role || "",
        department: u?.department || "",
        engagementType: u?.status || "",
        workMode: u?.workdetails?.mode || "",
        startDate: u?.startedAt
          ? u.startedAt.split("T")[0]
          : "",
        endDate: u?.endAt
          ? u.endAt.split("T")[0]
          : "",
        workingHours: u?.workdetails?.workinghour || "",
        reportingManager: u?.managerAssigned|| "",
      });
    } catch (err) {
       toast.error(" User Unauthorized : Please Login First")
             navigate("/login")
    }finally{
      setLoading(false)
    }
  };

  fetchUser();
}, []);


  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // const validateForm = () => {
  //   const requiredFields = [
  //     'roleDesignation',
  //     'department',
  //     'engagementType',
  //     'workMode'
  //     'startDate', 'endDate', 'workingHours', 'reportingManager' are now optional
  //   ];

  //   const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
  //   if (missingFields.length > 0) {
  //     alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
  //     return false;
  //   }

  //   // Date validation (only if both dates are provided)
  //   if (formData.startDate && formData.endDate) {
  //     const startDate = new Date(formData.startDate);
  //     const endDate = new Date(formData.endDate);
      
  //     if (endDate <= startDate) {
  //       alert('End date must be after start date');
  //       return false;
  //     }
  //   }

  //   return true;
  // };

  const handleNext = () => {
    // if (!validateForm()) {
    //   return;
    // }
    navigate('/onboarding/step5');
  };

  const handlePrevious = () => {
    navigate('/onboarding/step3');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: true },
    { id: 5, label: 'Bank Details', active: false },
    { id: 6, label: 'System Info', active: false },
    { id: 7, label: 'Declaration', active: false }
  ];

  return (
    <>
    {loading && <LoaderDots text="Signing you in" />}
    <div className={styles.onboardingStep}>
      
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
              <span className={styles.stepNumber}>Step 4 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Role & Engagement Details</h2>
            <p className={styles.stepDescription}>
              Define your role, duration and working arrangement with the organization.
              Fields marked with * are mandatory.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Role / Designation
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Software Developer Intern"
                    value={formData.roleDesignation}
                    onChange={(e) => handleInputChange('roleDesignation', e.target.value)}
                    disabled
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Engagement Type
                  </label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="engagementType"
                        value="paid-intern"
                        checked={formData.engagementType === 'paid-intern'}
                        onChange={(e) => handleInputChange('engagementType', e.target.value)}
                        className={styles.radioInput}
                        disabled
                      />
                      <span className={styles.radioText}>Paid Intern</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="engagementType"
                        value="unpaid-intern"
                        checked={formData.engagementType === 'unpaid-intern'}
                        onChange={(e) => handleInputChange('engagementType', e.target.value)}
                        className={styles.radioInput}
                        disabled
                      />
                      <span className={styles.radioText}>Unpaid Intern</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="engagementType"
                        value="full-time-employee"
                        checked={formData.engagementType === 'full-time-employee'}
                        onChange={(e) => handleInputChange('engagementType', e.target.value)}
                        className={styles.radioInput}
                        disabled
                      />
                      <span className={styles.radioText}>Full-time Employee</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="engagementType"
                        value="contract-consultant"
                        checked={formData.engagementType === 'contract-consultant'}
                        onChange={(e) => handleInputChange('engagementType', e.target.value)}
                        className={styles.radioInput}
                        disabled
                      />
                      <span className={styles.radioText}>Contract / Consultant</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Work Mode
                  </label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="workMode"
                        value="remote"
                        checked={formData.workMode === 'remote'}
                        onChange={(e) => handleInputChange('workMode', e.target.value)}
                        className={styles.radioInput}
                        disabled
                      />
                      <span className={styles.radioText}>Remote</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="workMode"
                        value="onsite"
                        checked={formData.workMode === 'onsite'}
                        onChange={(e) => handleInputChange('workMode', e.target.value)}
                        className={styles.radioInput}
                        disabled
                      />
                      <span className={styles.radioText}>Onsite</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="workMode"
                        value="hybrid"
                        checked={formData.workMode === 'hybrid'}
                        onChange={(e) => handleInputChange('workMode', e.target.value)}
                        className={styles.radioInput}
                        disabled
                      />
                      <span className={styles.radioText}>Hybrid</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Start Date (if available)
                  </label>
                  <input
                    type="date"
                    className={styles.input}
                    placeholder="DD / MM / YYYY"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    disabled
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Working Hours (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. MON-FRI | 9:00 PM"
                    value={formData.workingHours}
                    onChange={(e) => handleInputChange('workingHours', e.target.value)}
                    disabled
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Department
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Department options: Product, Engineering, Design, Marketing, Sales, Operations, HR, Finance, Other"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    disabled
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    End Date (if available)
                  </label>
                  <input
                    type="date"
                    className={styles.input}
                    placeholder="DD / MM / YYYY"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    disabled
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Reporting Manager Name (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Manager name"
                    value={formData.reportingManager}
                    onChange={(e) => handleInputChange('reportingManager', e.target.value)}
                    disabled
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
                Next: Bank & Tax Details →
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
      <div className={styles.mirrorOverlay}/>
      <div className={styles.footerBox}>
    
        <div className={styles.top}>
          
          <div className={styles.left}>
            <h2 className={styles.logo}>NoCapCode™</h2>
            <p className={styles.tagline}>No cap. Built like it's ours.</p>
            <p className={styles.tagline}>We build software systems for teams who care about clarity, ownership, and longevity.</p>
            <div className={styles.socials}>
              <span><a href="https://www.linkedin.com/company/nocapcode"  rel="noreferrer" target="_blank"><Linkedin size={16} color="rgba(190, 190, 190, 1)"/></a></span>
              <span onClick={()=>{navigate("/404")}}><FontAwesomeIcon icon={faXTwitter} /></span>
              <span><a href="https://www.instagram.com/nocapcode.cloud" target="_blank" rel="noreferrer"><Instagram size={16} color="rgba(190, 190, 190, 1)"/></a></span>
              
              
            </div>

            <div className={styles.badge}>
                <img src="/badge.png" alt="/" height="100%" width="100%"/>
            </div>
          </div>

        
          <div className={styles.right}>

            <div className={styles.col}>
              <h4>Company</h4>
              <ul>
                <li onClick={()=>{
                  navigate("/careers")}} style={{ cursor: "pointer" }}>Careers</li>
                <li onClick={()=>{
                  navigate("/contact")}} style={{ cursor: "pointer" }}>Contact</li>
              </ul>
              <p>
                Algodones, New Mexico,<br />
                US, 87001
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p>© 2025-2026 NoCapCode. All rights reserved.<br/>Built with restraint, responsibility, and long-term thinking.</p>

          <div className={styles.links}>
            <span onClick={()=>{navigate("/terms")}} style={{ cursor: "pointer" }}>Terms of Service</span>
            <span onClick={()=>{navigate("/privacy")}} style={{ cursor: "pointer" }}>Privacy Policy</span>
          </div>
        </div>
      </div>
        </footer>
    </div>
    </>
  );
};

export default Step4;