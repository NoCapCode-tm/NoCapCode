import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Shield, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../CSS/Onboarding.module.css';
import { getCompletedSteps, canAccessStep } from '../utils/onboardingUtils';

const Onboarding = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    // Update completed steps on component mount and when returning from steps
    const updateCompletedSteps = () => {
      setCompletedSteps(getCompletedSteps());
    };

    updateCompletedSteps();
    
    // Listen for storage changes to update progress
    window.addEventListener('storage', updateCompletedSteps);
    
    return () => {
      window.removeEventListener('storage', updateCompletedSteps);
    };
  }, []);

  const handleStepClick = (stepNumber) => {
    if (!canAccessStep(stepNumber)) {
      alert(`Please complete Step ${stepNumber - 1} first before proceeding to Step ${stepNumber}.`);
      return;
    }
    navigate(`/onboarding/step${stepNumber}`);
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

            <div className={`${styles.stepCard} ${styles.step4} ${completedSteps.includes(4) ? styles.completed : ''} ${!canAccessStep(4) ? styles.disabled : ''}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step 04</div>
                <h3 className={styles.stepTitle}>Internship Details</h3>
                <p className={styles.stepDescription}>Internship role, duration, and working arrangements</p>
              </div>
              <div className={styles.stepAction}>
                <span 
                  className={`${styles.startLink} ${!canAccessStep(4) ? styles.disabled : ''}`}
                  onClick={() => handleStepClick(4)}
                >
                  {completedSteps.includes(4) ? 'Edit →' : canAccessStep(4) ? 'Start →' : 'Locked'}
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
              <div className={styles.socials}>
                <span><ExternalLink size={20} color="rgba(190, 190, 190, 1)"/></span>
                <span>𝕏</span>
                <span><ExternalLink size={20} color="rgba(190, 190, 190, 1)"/></span>
              </div>
              <div className={styles.badge}>
                <img src="/badge.png" alt="/" height="100%" width="100%"/>
              </div>
            </div>
            
            <div className={styles.right}>
              <div className={styles.col}>
                <h4>Explore</h4>
                <ul>
                  <li style={{ cursor: "pointer" }}>How We Work</li>
                  <li onClick={()=>{navigate("/about"); window.scrollTo(0,0);}} style={{ cursor: "pointer" }}>About NoCapCode</li>
                  <li>Start with Clarity</li>
                  <li>Careers</li>
                </ul>
              </div>
              
              <div className={styles.col}>
                <h4>Company</h4>
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