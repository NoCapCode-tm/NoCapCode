import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import styles from "../CSS/Jobposting.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowWidth from './usewindowwidth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import LoaderDots from './LoaderDots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Instagram, Linkedin } from 'lucide-react';



const Addjobposting = () => {
    const navbarRef = useRef(null);
      const logRef = useRef(null);
      const btnTextRef = useRef(null);
      const btnIconRef = useRef(null);
      const startRef = useRef(null);
      const width= useWindowWidth()
      const[loading,setLoading]=useState(false)
      const[title,setTitle]=useState('')
     const [description, setDescription] = useState("");
const [responsibilities, setResponsibilities] = useState("");
const [perks, setPerks] = useState("");
const [mode, setMode] = useState("");
const [department, setDepartment] = useState("");
const [whoshouldapply, setWhoShouldApply] = useState("");
const [employementtype, setEmployementType] = useState("");
const [applicantsneeded, setApplicantsNeeded] = useState("");

      const navigate = useNavigate()
     const handlesubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

  try {
    await axios.post(
      "https://atlasbackend-px53.onrender.com/api/v1/job/create",
      {
        title,
        description,
        responsibilities,
        perks,
        mode,
        department,
        whoshouldapply,
        employementtype,
        noofapplicants:applicantsneeded
      },
      { withCredentials: true }
    );

    toast.success("Job Posting Added Successfully");
    navigate("/careers");
  } catch (error) {
    toast.error("Could not create job posting");
  } finally {
    setLoading(false);
  }
};

      useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: startRef.current,
            start: "top top",
            toggleActions: "play play play reverse",
          },
        });
      
        const isMobile = width <= 800;

  tl.to(navbarRef.current, {
    width: isMobile ? "50%" : 440,   // 👈 fixed
    borderRadius: isMobile ? "8px" : "8px",
    top: isMobile ? "10px" : "10px",
    justifyContent:"flex-end",
    gap: "20px",
    duration: 0.45,
    ease: "power2.out",
  });
      
        // logo fade + slide
        tl.to(
          logRef.current,
          {
            opacity: 0,
            display:"none",
            x: -24,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        );
      
        // button text out
        tl.to(
          btnTextRef.current,
          {
            opacity: 0,
            width: 0,
            marginRight: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        );
      
        // arrow pop in
        tl.to(
          btnIconRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.6)",
          },
          "<"
        );
      }, []);
  return (
    <>
    {loading && <LoaderDots text="Adding Case Study" />}
    <section className={styles.wrap} ref={startRef}>
      <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>
<div className={styles.divider1}>
        <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Job Posting Form</h2>
        <p className={styles.subtext}>
          Create a new job posting with detailed requirements.
        </p>
       <form className={styles.form} onSubmit={handlesubmit}>
  <div className={styles.field}>
    <label>Job Title</label>
    <input
      type="text"
      placeholder="e.g., Senior Software Engineer"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>

  <div className={styles.field}>
    <label>Description</label>
    <textarea
      placeholder="Provide a detailed job description..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  <div className={styles.field}>
    <label>Responsibilities</label>
    <textarea
      placeholder="List key responsibilities..."
      value={responsibilities}
      onChange={(e) => setResponsibilities(e.target.value)}
    />
  </div>

  <div className={styles.field}>
    <label>Perks</label>
    <textarea
      placeholder="List perks and benefits..."
      value={perks}
      onChange={(e) => setPerks(e.target.value)}
    />
  </div>

  <div className={styles.fieldRow}>
    <div className={styles.field}>
      <label>Mode</label>
      <select value={mode} className={styles.select} onChange={(e) => setMode(e.target.value)}>
        <option value="" >Select mode</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>

    <div className={styles.field}>
      <label>Department</label>
      <select value={department} onChange={(e) => setDepartment(e.target.value)}>
        <option value="">Select department</option>
        <option value="Human Resource">Human Resource</option>
        <option value="Designing">Designing</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Operations">Operations</option>
        <option value="Finance">Finance</option>
        <option value="Other">Other</option>
      </select>
    </div>
  </div>

  <div className={styles.field}>
    <label>Who Should Apply</label>
    <textarea
      placeholder="Describe ideal candidates..."
      value={whoshouldapply}
      onChange={(e) => setWhoShouldApply(e.target.value)}
    />
  </div>

  <div className={styles.fieldRow}>
    <div className={styles.field}>
      <label>Employment Type</label>
      <select
        value={employementtype}
        onChange={(e) => setEmployementType(e.target.value)}
      >
        <option value="">Select employment type</option>
        <option value="Intern">Intern</option>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
        <option value="Full Time">Full Time</option>
        <option value="Contractual">Contractual</option>
      </select>
    </div>

    <div className={styles.field}>
      <label>Number of Applicants Needed</label>
      <input
        type="number"
        placeholder="e.g., 1"
        value={applicantsneeded}
        onChange={(e) => setApplicantsNeeded(e.target.value)}
      />
    </div>
  </div>

  <div className={styles.submitWrap}>
    <button type="submit">
      Submit job posting
      <span>→</span>
    </button>
  </div>
  </form>



      </div>
    </section>
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
              <h4>Explore</h4>
              <ul>
                <li onClick={() =>
    navigate("/", { state: { scrollTo: "howWeWork" } })
  }
  style={{ cursor: "pointer" }}>How We Work</li>
                <li onClick={()=>{
                  navigate("/casestudies")}} style={{ cursor: "pointer" }}>Case Studies</li>
                <li onClick={()=>{
                  navigate("/about")
                  window.scrollTo(0,0);}} style={{ cursor: "pointer" }}>About NoCapCode</li>
                  <li onClick={() =>
    navigate("/", { state: { scrollTo: "faq" } })
  }
  style={{ cursor: "pointer" }} >FAQs</li>
                <li onClick={()=>{navigate("/clarity")}} style={{ cursor: "pointer" }}>Start with Clarity</li>
            
              </ul>
            </div>

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
    </>
  )
}

export default Addjobposting