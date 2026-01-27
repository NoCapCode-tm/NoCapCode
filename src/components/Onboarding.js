import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Shield, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../CSS/Onboarding.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const Onboarding = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
const [completedSteps, setCompletedSteps] = useState([]);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "https://atlasbackend-px53.onrender.com/api/v1/employee/getuser",
        { withCredentials: true }
      );
  
      const userData = res.data.message;
      console.log(userData)
      setUser(userData);
      setCompletedSteps(getCompletedSteps(userData));
    } catch (error) {
       toast.error(" User Unauthorized : Please Login First")
       navigate("/login")
      
    }
  };

  fetchUser();
}, []);

const getCompletedSteps = (u) => {
  const steps = [];
  if (!u) return steps;

  // STEP 1
  if (
    u.phone &&
    u.dob &&
    u.gender &&
    u.address?.permanent &&
    u.address?.communication &&
    u.emergency?.contactnumber &&
    u.emergency?.contactname
  ) steps.push(1);

  // STEP 2
  if (
    u.documents?.aadhar?.number &&
    u.documents?.aadhar?.image &&
    u.documents?.passportimage
  ) steps.push(2);

  // STEP 3
  if (
    u.Qualificationdetails?.highestqualification &&
    u.Qualificationdetails?.collegename &&
    u.Qualificationdetails?.coursename &&
    u.Qualificationdetails?.year
  ) steps.push(3);

  // STEP 5
  if (
    u.bankdetails?.accountno ||
    u.bankdetails?.upi
  ) steps.push(5);

  // STEP 6
  if (
    u.systemdetails?.laptoptype &&
    u.systemdetails?.Linkedin
  ) steps.push(6);

  return steps;
};

const canAccessStep = (step) => {
  if (step === 1) return true;
  if (step === 4) return completedSteps.includes(3); // view only
  if (step === 5) return completedSteps.includes(3);
  if (step === 6) return completedSteps.includes(5);
  if (step === 7) return completedSteps.includes(6);

  return completedSteps.includes(step - 1);
};

const handleStepClick = (step) => {
  if (!canAccessStep(step)) return;
  navigate(`/onboarding/step${step}`);
};


 
  return (
    <div className={styles.onboarding}>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.gradient}>Onboarding</span>
            <span className={styles.gradient1}>Information</span> 
          </h1>
          <p className={styles.subtitle}>
            Complete your onboarding process in 7 simple steps. All information will be
            used for preparing your offer letter and agreements.
          </p>
        </div>

        {/* Steps Grid */}
        <div className={styles.stepsContainer}>
          {/* First Row - 4 Cards */}
          <div className={styles.firstRowGrid}>
            <div className={`${styles.stepCard} ${styles.step1} ${completedSteps.includes(1) ? styles.completed : ''}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step 01</div>
                <h3 className={styles.stepTitle}>Basic Personal Information</h3>
                <p className={styles.stepDescription}>Provide your personal details including contact information</p>
              </div>
              <div className={styles.stepAction}>
                <span 
                  className={styles.startLink}
                  onClick={() => handleStepClick(1)}
                >
                  {completedSteps.includes(1) ? 'Edit →' : 'Start →'}
                </span>
              </div>
            </div>

            <div className={`${styles.stepCard} ${styles.step2} ${completedSteps.includes(2) ? styles.completed : ''} ${!canAccessStep(2) ? styles.disabled : ''}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step 02</div>
                <h3 className={styles.stepTitle}>Identity Information</h3>
                <p className={styles.stepDescription}>Upload your identity documents for verification</p>
              </div>
              <div className={styles.stepAction}>
                <span 
                  className={`${styles.startLink} ${!canAccessStep(2) ? styles.disabled : ''}`}
                  onClick={() => handleStepClick(2)}
                >
                  {completedSteps.includes(2) ? 'Edit →' : canAccessStep(2) ? 'Start →' : 'Locked'}
                </span>
              </div>
            </div>

            <div className={`${styles.stepCard} ${styles.step3} ${completedSteps.includes(3) ? styles.completed : ''} ${!canAccessStep(3) ? styles.disabled : ''}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step 03</div>
                <h3 className={styles.stepTitle}>Education Details</h3>
                <p className={styles.stepDescription}>Share your academic background and qualifications</p>
              </div>
              <div className={styles.stepAction}>
                <span 
                  className={`${styles.startLink} ${!canAccessStep(3) ? styles.disabled : ''}`}
                  onClick={() => handleStepClick(3)}
                >
                  {completedSteps.includes(3) ? 'Edit →' : canAccessStep(3) ? 'Start →' : 'Locked'}
                </span>
              </div>
            </div>

            <div className={`${styles.stepCard} ${styles.step4} ${!canAccessStep(4) ? styles.disabled : ''}`}>
  <div className={styles.stepContent}>
    <div className={styles.stepNumber}>Step 04</div>
    <h3 className={styles.stepTitle}>Internship Details</h3>
    <p className={styles.stepDescription}>
      Internship role, duration, and working arrangements
    </p>
  </div>

  <div className={styles.stepAction}>
    <span
      className={`${styles.startLink} ${!canAccessStep(4) ? styles.disabled : ''}`}
      onClick={() => handleStepClick(4)}
    >
      {canAccessStep(4) ? 'View →' : 'Locked'}
    </span>
  </div>
</div>

          </div>

          {/* Second Row - 3 Cards Centered */}
          <div className={styles.secondRowGrid}>
            <div className={`${styles.stepCard} ${styles.step5} ${completedSteps.includes(5) ? styles.completed : ''} ${!canAccessStep(5) ? styles.disabled : ''}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step 05</div>
                <h3 className={styles.stepTitle}>Bank & Tax Details</h3>
                <p className={styles.stepDescription}>Provide banking information for future payments</p>
              </div>
              <div className={styles.stepAction}>
                <span 
                  className={`${styles.startLink} ${!canAccessStep(5) ? styles.disabled : ''}`}
                  onClick={() => handleStepClick(5)}
                >
                  {completedSteps.includes(5) ? 'Edit →' : canAccessStep(5) ? 'Start →' : 'Locked'}
                </span>
              </div>
            </div>

            <div className={`${styles.stepCard} ${styles.step6} ${completedSteps.includes(6) ? styles.completed : ''} ${!canAccessStep(6) ? styles.disabled : ''}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step 06</div>
                <h3 className={styles.stepTitle}>System & Work Details</h3>
                <p className={styles.stepDescription}>Technical setup and performance profiles</p>
              </div>
              <div className={styles.stepAction}>
                <span 
                  className={`${styles.startLink} ${!canAccessStep(6) ? styles.disabled : ''}`}
                  onClick={() => handleStepClick(6)}
                >
                  {completedSteps.includes(6) ? 'Edit →' : canAccessStep(6) ? 'Start →' : 'Locked'}
                </span>
              </div>
            </div>

            <div className={`${styles.stepCard} ${styles.step7} ${!canAccessStep(7) ? styles.disabled : ''}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step 07</div>
                <h3 className={styles.stepTitle}>Review & Declaration</h3>
                <p className={styles.stepDescription}>Confirm and submit your application</p>
              </div>
              <div className={styles.stepAction}>
                <span 
                  className={`${styles.startLink} ${!canAccessStep(7) ? styles.disabled : ''}`}
                  onClick={() => handleStepClick(7)}
                >
                  {canAccessStep(7) ? 'Review →' : 'Locked'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <CheckCircle size={20} color="#3225bf" />
            <div>
              <h4>Required Fields</h4>
              <p>Complete all mandatory fields for completion.</p>
            </div>
          </div>
          
          <div className={styles.feature}>
            <Clock size={20} color="#3225bf" />
            <div>
              <h4>Save Progress</h4>
              <p>Your information will be saved as you navigate between sections.</p>
            </div>
          </div>
          
          <div className={styles.feature}>
            <Shield size={20} color="#3225bf" />
            <div>
              <h4>Confidential</h4>
              <p>All your data is kept secure and confidential.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
  );
};

export default Onboarding;