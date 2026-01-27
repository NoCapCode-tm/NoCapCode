import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Users, MapPin, AlertCircle, Upload, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../Navbar';
import styles from '../../CSS/OnboardingStep.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import LoaderDots from '../LoaderDots';

const Step2 = () => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    aadhaarNumber: '',
    panCardNumber: '',
    aadhaarUpload: null,
    panCardUpload: null,
    collegeIdUpload: null,
    passportPhoto: null
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

      const user = res.data.message;

      setFormData(prev => ({
        ...prev,
        aadhaarNumber: user?.documents?.aadhar?.number || "",
        panCardNumber: user?.documents?.pan?.number || "",
        // files auto-fill nahi hote (security reason)
      }));
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

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const validateForm = () => {
  // required text fields
  const aadhaar = String(formData.aadhaarNumber || "").trim();

if (!aadhaar) {
  toast.error("Aadhaar number is required");
  return false;
}

const aadhaarClean = aadhaar.replace(/\s/g, "");
if (!/^\d{12}$/.test(aadhaarClean)) {
  toast.error("Enter valid 12 digit Aadhaar number");
  return false;
}


  // Required files
  if (!formData.aadhaarUpload) {
    alert("Aadhaar document upload is required");
    return false;
  }

  if (!formData.passportPhoto) {
    alert("Passport size photo is required");
    return false;
  }

  // PAN optional
  if (
    formData.panCardNumber &&
    !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panCardNumber.toUpperCase())
  ) {
    alert("Invalid PAN number format");
    return false;
  }

  return true;
};


  const handleNext = async () => {
    if (!validateForm()) return;
  try {
    setLoading(true)
    const data = new FormData();

    // TEXT FIELDS (match backend keys)
    data.append("aadharno", formData.aadhaarNumber);
    data.append("panno", formData.panCardNumber);

    // FILE FIELDS (match multer field names)
    if (formData.aadhaarUpload)
      data.append("aadharimage", formData.aadhaarUpload);

    if (formData.panCardUpload)
      data.append("panimage", formData.panCardUpload);

    if (formData.passportPhoto)
      data.append("passportimage", formData.passportPhoto);

    if (formData.collegeIdUpload)
      data.append("collegeid", formData.collegeIdUpload);

    await axios.patch(
      "https://atlasbackend-px53.onrender.com/api/v1/employee/onboarding/2",
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    navigate("/onboarding/step3");
    toast.success("Onboarding Step 2 Completed")
  } catch (error) {
    toast.error("Step2 onboarding error:");
  }finally{
    setLoading(false)
  }
};


  const handlePrevious = () => {
    navigate('/onboarding/step1');
  };

  const steps = [
    { id: 1, label: 'Personal Info', active: false },
    { id: 2, label: 'Identity', active: true },
    { id: 3, label: 'Education', active: false },
    { id: 4, label: 'Internship', active: false },
    { id: 5, label: 'Bank Details', active: false },
    { id: 6, label: 'System Info', active: false },
    { id: 7, label: 'Declaration', active: false }
  ];

  return (
    <>
    {loading && <LoaderDots text="Please Wait" />}
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
              <span className={styles.stepNumber}>Step 2 of 7</span>
            </h1>
            <h2 className={styles.stepSubtitle}>Identity Information</h2>
            <p className={styles.stepDescription}>
              Upload your identity documents for verification and official documentation.
              Fields marked with * are mandatory.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Aadhaar Number
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="XXXX XXXX XXXX"
                    value={formData.aadhaarNumber}
                    onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Pan Card Number (if available)
                  </label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="XXXXXXXXXX"
                    value={formData.panCardNumber}
                    onChange={(e) => handleInputChange('panCardNumber', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Passport-size Photograph
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="passportPhoto"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('passportPhoto', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="passportPhoto" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.passportPhoto && (
                      <span className={styles.fileName}>{formData.passportPhoto.name}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Aadhaar Card Upload (PDF/JPG)
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="aadhaarUpload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('aadhaarUpload', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="aadhaarUpload" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.aadhaarUpload && (
                      <span className={styles.fileName}>{formData.aadhaarUpload.name}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    Upload PAN Card (PDF/JPG) (if available)
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="panCardUpload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('panCardUpload', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="panCardUpload" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.panCardUpload && (
                      <span className={styles.fileName}>{formData.panCardUpload.name}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.optionalLabel}>
                    College / University ID Card (if available)
                  </label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="collegeIdUpload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('collegeIdUpload', e.target.files[0])}
                      className={styles.fileInput}
                    />
                    <label htmlFor="collegeIdUpload" className={styles.fileLabel}>
                      <Upload size={20} />
                      Choose file
                    </label>
                    {formData.collegeIdUpload && (
                      <span className={styles.fileName}>{formData.collegeIdUpload.name}</span>
                    )}
                  </div>
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
                Next: Education Details →
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

export default Step2;