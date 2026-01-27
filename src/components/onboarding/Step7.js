import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, AlertCircle, GraduationCap, Briefcase, CreditCard, Settings, CheckCircle, Edit, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import LoaderDots from '../LoaderDots';

const Step7 = () => {
 const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const[loading,setLoading]=useState(false)
  const [agreed, setAgreed] = useState(false);

  // FETCH USER (single source of truth)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          "https://atlasbackend-px53.onrender.com/api/v1/employee/getuser",
          { withCredentials: true }
        );
        setUser(res.data.message);
      } catch (err) {
         toast.error(" User Unauthorized : Please Login First")
               navigate("/login")
      }finally{
        setLoading(false)
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async () => {
    if (!agreed) {
      toast.error("Please accept the declaration");
      return;
    }

    try {
      setLoading(true)
      await axios.patch(
        "https://atlasbackend-px53.onrender.com/api/v1/employee/onboarding/7",
        {},
        { withCredentials: true }
      );

      toast.success("Onboarding completed successfully 🎉");
      navigate('/onboarding/complete');
    } catch (err) {
      console.error("Final submit error:", err);
      toast.error("Failed to submit onboarding");
    }finally{
      setLoading(false)
    }
  };

  const handleEdit = (step) => {
    navigate(`/onboarding/step${step}`);
  };

  if (!user) return null;


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
                    <span className={styles.infoValue}>{user?.name || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Email:</span>
                    <span className={styles.infoValue}>{user.email || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Phone:</span>
                    <span className={styles.infoValue}>{user?.phone || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Date of Birth:</span>
                    <span className={styles.infoValue}>{user?.dob || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Gender:</span>
                    <span className={styles.infoValue}>{user?.gender || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Emergency Contact:</span>
                    <span className={styles.infoValue}>{user.emergency.contactnumber || 'Not provided'}</span>
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
                    <span className={styles.infoValue}>{user.documents.aadhar.number || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>PAN Card Number:</span>
                    <span className={styles.infoValue}>{user.documents.pan.number || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Documents:</span>
                    <span className={styles.infoValue}>
                      {user.documents.aadhar.image ? 'Aadhaar uploaded' : ''} 
                      {user.documents.pan.image ? ', PAN uploaded' : ''}
                      {user.Qualificationdetails.studentid ? ', College ID uploaded' : ''}
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
                    <span className={styles.infoValue}>{user.Qualificationdetails.highestqualification || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>College/University:</span>
                    <span className={styles.infoValue}>{user.Qualificationdetails.collegename || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Course/Program:</span>
                    <span className={styles.infoValue}>{user.Qualificationdetails.coursename || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Current Year:</span>
                    <span className={styles.infoValue}>{user.Qualificationdetails.year || 'Not provided'}</span>
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
                    <span className={styles.infoValue}>{user?.role || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Department:</span>
                    <span className={styles.infoValue}>{user?.department || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Engagement Type:</span>
                    <span className={styles.infoValue}>{user?.status || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Work Mode:</span>
                    <span className={styles.infoValue}>{user?.workdetails?.mode || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Duration:</span>
                    <span className={styles.infoValue}>
                      {user.startedAt && user.endAt 
                        ? `${user.startedAt} to ${user.endAt }` 
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
                    <span className={styles.infoValue}>{ user.bankdetails?.acholdername || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Bank Name:</span>
                    <span className={styles.infoValue}>{ user.bankdetails?.bankname || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Account Number:</span>
                   <span className={styles.infoValue}>
  {
    user.bankdetails?.accountno
      ? '****' + String(user.bankdetails.accountno).slice(-4)
      : 'Not provided'
  }
</span>

                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>IFSC Code:</span>
                    <span className={styles.infoValue}>{ user.bankdetails?.ifsc || 'Not provided'}</span>
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
                    <span className={styles.infoValue}>{user.systemdetails.laptoptype || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Operating System:</span>
                    <span className={styles.infoValue}>{user.systemdetails.os || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Portfolio:</span>
                    <span className={styles.infoValue}>{user.systemdetails.portfolio || 'Not provided'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>GitHub:</span>
                    <span className={styles.infoValue}>{user.systemdetails.github || 'Not provided'}</span>
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

export default Step7;