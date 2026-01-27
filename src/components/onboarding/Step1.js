import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Users, MapPin, AlertCircle, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';
import axios from 'axios';
import {toast} from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Step1 = () => {
  const navigate = useNavigate();
  const[user,setUser] = useState("")
  const [formData, setFormData] = useState({
  fullName: "",
  personalEmail: "",
  phoneNumber: "",
  dateOfBirth: "",
  permanentAddress: "",
  communicationAddress: "",
  gender: "",
  emergencyContactNumber: "",
  emergencyContactName: ""
});


  // Load saved data on component mount
 useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/employee/getuser",
        { withCredentials: true }
      );

      const userData = response.data.message;

      setUser(userData);

      setFormData(prev => ({
        ...prev,
        fullName: userData.name || "",
        personalEmail: userData.email || "",
        phoneNumber: userData.phone || "",
        dateOfBirth: userData.dob
          ? userData.dob.split("T")[0] 
          : "",
        gender: userData.gender || "",
        permanentAddress: userData.address.permanent || "",
        communicationAddress: userData.address.communication || "",
        emergencyContactNumber: userData.emergency.contactnumber || "",
        emergencyContactName: userData.emergency.contactname || "",
      }));
    } catch (error) {
      console.error("Get user error:", error);
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

  const validateForm = () => {
  const requiredFields = [
    'fullName',
    'personalEmail',
    'phoneNumber',
    'dateOfBirth',
    'permanentAddress',
    'communicationAddress',
    'gender',
    'emergencyContactNumber',
    'emergencyContactName'
  ];

  const missingFields = requiredFields.filter(field => {
    const value = formData[field];
    return value === null || value === undefined || String(value).trim() === "";
  });

  if (missingFields.length > 0) {
    alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.personalEmail)) {
    alert('Please enter a valid email address');
    return false;
  }

  const phoneRegex = /^\+?[\d\s-()]{10,}$/;
  if (
    !phoneRegex.test(formData.phoneNumber) ||
    !phoneRegex.test(formData.emergencyContactNumber)
  ) {
    alert('Please enter valid phone numbers');
    return false;
  }

  return true;
};


  const handleNext = async() => {
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.patch(`http://localhost:5000/api/v1/employee/onboarding/1`,{
        phone:formData.phoneNumber,
        dob:formData.dateOfBirth,
        gender:formData.gender,
        permanentaddress:formData.permanentAddress,
        communicationaddress:formData.communicationAddress,
        emergencynumber:formData.emergencyContactNumber,
        emergencyname:formData.emergencyContactName,
      },{withCredentials:true})
      console.log(response.data.data)
      toast.success("Step 1 Onboarding Completed")
      navigate('/onboarding/step2');
    } catch (error) {
      toast.error("Onboarding step not completed")
    }
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: true },
    { id: 2, label: 'Identity', active: false },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: false },
    { id: 5, label: 'Bank Details', active: false },
    { id: 6, label: 'System Info', active: false },
    { id: 7, label: 'Declaration', active: false }
  ];

  return (
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
              <span className={styles.stepNumber}>Step 1 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Basic Personal Information</h2>
            <p className={styles.stepDescription}>
              Please provide your basic details for official records and communication.
              Fields marked with * are mandatory.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Full Name (as per Aadhaar)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Phone Number (WhatsApp enabled)
                  </label>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Permanent Address
                  </label>
                  <textarea
                    className={styles.textarea}
                    placeholder="Enter permanent address"
                    value={formData.permanentAddress}
                    onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Communication Address
                  </label>
                  <p className={styles.fieldNote}>
                    Address where you want to receive official communication
                  </p>
                  <textarea
                    className={styles.textarea}
                    placeholder="Enter communication address"
                    value={formData.communicationAddress}
                    onChange={(e) => handleInputChange('communicationAddress', e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Personal Email ID
                  </label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="your.email@example.com"
                    value={formData.personalEmail}
                    onChange={(e) => handleInputChange('personalEmail', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className={styles.input}
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Gender
                  </label>
                  <select
                    className={styles.select}
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.emergencyContactNumber}
                    onChange={(e) => handleInputChange('emergencyContactNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Emergency contact name"
                    value={formData.emergencyContactName}
                    onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
              <button
                type="button"
                className={styles.prevButton}
                onClick={() => navigate('/onboarding')}
              >
                ← Previous
              </button>
              
              <button
                type="button"
                className={styles.nextButton}
                onClick={handleNext}
              >
                Next: Identity Information →
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
  );
};

export default Step1;