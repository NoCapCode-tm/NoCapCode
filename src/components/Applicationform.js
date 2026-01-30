import React, { useState } from 'react'
import styles from "../CSS/Applicationform.module.css";
import axios from 'axios';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import LoaderDots from './LoaderDots';

const Applicationform = () => {
    const[loading,setLoading]=useState(false)
    const {id} = useParams()
    console.log(id)
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    resume: "",
    linkedin: "",
    github: "",
  });
   const [otherLinks, setOtherLinks] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherPlatform, setOtherPlatform] = useState("");
  const [otherLink, setOtherLink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

   const handleAddOtherLink = () => {
  if (!otherPlatform || !otherLink) return;

  setOtherLinks((prev) => [
    ...prev,
    { key: otherPlatform, value: otherLink },
  ]);

  setOtherPlatform("");
  setOtherLink("");
  setShowOtherInput(false); // closes input, CTA reappears
};


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    try {
        const response = await axios.post("https://atlasbackend-px53.onrender.com/api/v1/job/apply",{
          name:formData.fullName,
          email:formData.email,
          resumelink:formData.resume,
          linkedin:formData.linkedin,
          github:formData.github,
          phonenumber:formData.phone,
          dob:formData.dob,
          gender:formData.gender,
           other: otherLinks,
          jobId:id,
        })
        toast.success("Application Form Submitted Successfully")
    } catch (error) {
        toast.error("Application Denied")
    }finally{
        setLoading(false)
    }
  };

  return (
    <>
     {loading && <LoaderDots text="Applying to Job ..." />}
    <div className ={styles.applicationform} >
       <div className={styles.divider1}>
               <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Application Form</h2>
               <p className={styles.subtext}>
                 Submit your application with your details.
               </p>
                </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.sectionTitle}>Personal Information</h3>

        <div className={styles.field}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className={styles.divider} />

        {/* PROFESSIONAL INFO */}
        <h3 className={styles.sectionTitle}>Professional Information</h3>

        <div className={styles.field}>
          <label>Resume Link</label>
          <input
            type="url"
            name="resume"
            placeholder="https://drive.google.com/your-resume"
            value={formData.resume}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label>LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label>GitHub Profile</label>
          <input
            type="url"
            name="github"
            placeholder="https://github.com/yourusername"
            value={formData.github}
            onChange={handleChange}
          />
        </div>

       {/* ADD OTHER LINKS CTA */}
{!showOtherInput && (
  <p
    className={styles.addOtherLink}
    onClick={() => setShowOtherInput(true)}
  >
    + Add other links
  </p>
)}

{/* OTHER LINKS INPUT */}
{showOtherInput && (
  <>
    <div className={styles.grid}>
      <div className={styles.field}>
        <label>Platform</label>
        <input
          type="text"
          placeholder="e.g. Portfolio, Twitter"
          value={otherPlatform}
          onChange={(e) => setOtherPlatform(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Link</label>
        <input
          type="url"
          placeholder="https://example.com"
          value={otherLink}
          onChange={(e) => setOtherLink(e.target.value)}
        />
      </div>
    </div>

    <div className={styles.submitWrap}>
      <button type="button" onClick={handleAddOtherLink}>
        Add <span>＋</span>
      </button>
    </div>
  </>
)}


{/* SHOW ADDED OTHER LINKS */}
{otherLinks.length > 0 && (
  <div className={styles.otherLinksList}>
    {otherLinks.map((item, index) => (
      <div key={index} className={styles.otherLinkItem}>
        <span>{item.key}</span>
        <a href={item.value} target="_blank" rel="noreferrer">
          {item.value}
        </a>
      </div>
    ))}
  </div>
)}


        <div className={styles.submitWrap}>
          <button type="submit">
            Submit Application <span>→</span>
          </button>
        </div>
              </form>
       </div>
       </>
  )
}

export default Applicationform
