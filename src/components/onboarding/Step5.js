import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, AlertCircle, GraduationCap, Briefcase, CreditCard, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';
import {toast} from "react-toastify"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import LoaderDots from '../LoaderDots';

const Step5 = () => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false)

  const [formData, setFormData] = useState({
    bankAccountHolderName: '',
    bankAccountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: '',
    upiId: ''
  });

  // FETCH USER (like Step2 / Step3)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          "https://atlasbackend-px53.onrender.com/api/v1/employee/getuser",
          { withCredentials: true }
        );

        const b = res.data.message?.bankdetails || {};

        setFormData({
          bankAccountHolderName: b.acholdername || '',
          bankAccountNumber: b.accountno || '',
          ifscCode: b.ifsc || '',
          bankName: b.bankname || '',
          branchName: b.branchname || '',
          upiId: b.upi || ''
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

  //  OPTIONAL VALIDATION
  const validateForm = () => {
    if (formData.ifscCode) {
      const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
      if (!ifscRegex.test(formData.ifscCode.toUpperCase())) {
        toast.error("Invalid IFSC code");
        return false;
      }
    }

    if (formData.bankAccountNumber) {
      if (!/^\d{9,18}$/.test(formData.bankAccountNumber)) {
        toast.error("Invalid bank account number");
        return false;
      }
    }

    return true;
  };

  //  SAVE TO BACKEND
  const handleNext = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true)
      await axios.patch(
        "https://atlasbackend-px53.onrender.com/api/v1/employee/onboarding/5",
        {
          acholdername: formData.bankAccountHolderName,
          accountno: formData.bankAccountNumber,
          ifsc: formData.ifscCode,
          bankname: formData.bankName,
          branchname: formData.branchName,
          upi: formData.upiId
        },
        { withCredentials: true }
      );

      toast.success("Onboarding Step 5 Completed");
      navigate('/onboarding/step6');

    } catch (err) {
      console.error("Step5 save error:", err);
      toast.error("Failed to save bank details");
    }finally{
      setLoading(false)
    }
  };

  const handlePrevious = () => {
    navigate('/onboarding/step4');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: false },
    { id: 5, label: 'Bank Details', active: true },
    { id: 6, label: 'System Info', active: false },
    { id: 7, label: 'Declaration', active: false }
  ];


  return (
    <>
    {loading && <LoaderDots text="Signing you in" />}
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
              <span className={styles.stepNumber}>Step 5 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Bank & Payroll Details</h2>
            <p className={styles.stepDescription}>
              Provide payment details for stipend, salary or future reimbursements.
              All fields are optional - you can skip this step if not applicable.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Bank Account Holder Name (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter name as per bank records"
                    value={formData.bankAccountHolderName}
                    onChange={(e) => handleInputChange('bankAccountHolderName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Bank Account Number (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter account number"
                    value={formData.bankAccountNumber}
                    onChange={(e) => handleInputChange('bankAccountNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Bank Name (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter bank name"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    UPI ID (if available)
                  </label>
                  <p className={styles.fieldNote}>Optional</p>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="yourname@upi"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange('upiId', e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    IFSC Code (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. SBIN0000123"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Branch Name (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter branch name"
                    value={formData.branchName}
                    onChange={(e) => handleInputChange('branchName', e.target.value)}
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
                Next: System & Work Details →
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

export default Step5;