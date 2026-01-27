import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, AlertCircle, GraduationCap, Briefcase, CreditCard, Settings, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import LoaderDots from '../LoaderDots';

const Step6 = () => {
  const navigate = useNavigate();
const[loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    laptopType: '',
    operatingSystem: '', // frontend only (optional)
    portfolioLink: '',
    githubProfile: '',
    linkedinProfile: ''
  });

  // FETCH USER DATA
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          "https://atlasbackend-px53.onrender.com/api/v1/employee/getuser",
          { withCredentials: true }
        );

        const s = res.data.message?.systemdetails || {};

        setFormData({
          laptopType: s.laptoptype || '',
          operatingSystem: s.os ||'', // optional UI field
          portfolioLink: s.portfolio || '',
          githubProfile: s.github || '',
          linkedinProfile: s.Linkedin || ''
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
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  //VALIDATION
  const validateForm = () => {
    if (!formData.laptopType) {
      toast.error("Laptop type is required");
      return false;
    }

    if (!formData.linkedinProfile) {
      toast.error("LinkedIn profile is required");
      return false;
    }

    const urlRegex = /^https?:\/\/.+/;

    if (formData.portfolioLink && !urlRegex.test(formData.portfolioLink)) {
      toast.error("Invalid portfolio URL");
      return false;
    }

    if (formData.githubProfile && !urlRegex.test(formData.githubProfile)) {
      toast.error("Invalid GitHub URL");
      return false;
    }

    if (!urlRegex.test(formData.linkedinProfile)) {
      toast.error("Invalid LinkedIn URL");
      return false;
    }

    return true;
  };

  //SAVE TO BACKEND
  const handleNext = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true)
      await axios.patch(
        "https://atlasbackend-px53.onrender.com/api/v1/employee/onboarding/6",
        {
          operatingsystem:formData.operatingSystem,
          laptoptype: formData.laptopType,
          github: formData.githubProfile,
          portfolio: formData.portfolioLink,
          linkedin: formData.linkedinProfile
        },
        { withCredentials: true }
      );

      toast.success("Onboarding Step 6 Completed");
      navigate('/onboarding/step7');

    } catch (err) {
      console.error("Step6 save error:", err);
      toast.error("Failed to save system details");
    }finally{
      setLoading(false)
    }
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

export default Step6;