import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Users, MapPin, AlertCircle, GraduationCap, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import LoaderDots from '../LoaderDots';

const Step3 = () => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    highestQualification: '',
    collegeName: '',
    courseName: '',
    currentYear: '',
    expectedGraduation: ''
  });

  // FETCH USER (same as Step2)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          "https://atlasbackend-px53.onrender.com/api/v1/employee/getuser",
          { withCredentials: true }
        );

        const q = res.data.message?.Qualificationdetails;

        setFormData({
          highestQualification: q?.highestqualification || '',
          collegeName: q?.collegename || '',
          courseName: q?.coursename || '',
          currentYear: q?.year || '',
          expectedGraduation: q?.expectedgraduation || ''
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

  // VALIDATION (safe trim)
  const validateForm = () => {
    const required = [
      'highestQualification',
      'collegeName',
      'courseName',
      'currentYear'
    ];

    for (let field of required) {
      if (!String(formData[field] || '').trim()) {
        toast.error("Please fill all required fields");
        return false;
      }
    }
    return true;
  };

  // SAVE TO BACKEND
  const handleNext = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true)
      await axios.patch(
        "https://atlasbackend-px53.onrender.com/api/v1/employee/onboarding/3",
        {
          highestqualification: formData.highestQualification,
          collegename: formData.collegeName,
          coursename: formData.courseName,
          year: formData.currentYear,
          expectedgraduation: formData.expectedGraduation
        },
        { withCredentials: true }
      );

      toast.success("Onboarding Step 3 Completed");
      navigate('/onboarding/step4');

    } catch (err) {
      console.error("Step3 save error:", err);
      toast.error("Failed to save education details");
    }finally{
      setLoading(false)
    }
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

export default Step3;