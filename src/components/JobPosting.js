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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import Footer from './Footer';




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

 const Font = Quill.import("formats/font");

Font.whitelist = [
  "inter",
  "poppins",
  "roboto",
  "serif",
  "monospace",
];

Quill.register(Font, true);

const Size = Quill.import("formats/size");
Size.whitelist = ["small", "normal", "large", "huge"];
Quill.register(Size, true);

      const navigate = useNavigate()
     const handlesubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

  try {
    await axios.post(
      "https://nocapcode-backend-hapd.onrender.com/api/v1/job/create",
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
    width: isMobile ? "50%" : 440,   //  fixed
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
    {loading && <LoaderDots text="Adding Job Postings" />}
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
    <label>Job Description</label>
  
    <div className={styles.quillWrapper}>
      <ReactQuill
        theme="snow"
        value={description}
        onChange={setDescription}
        placeholder="Enter job description and details..."
        modules={{
          toolbar: [
            [{ font: Font.whitelist }],
             [{ size: Size.whitelist }],
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["link"],
            ["clean"],
          ],
        }}
      />
    </div>
  </div>

  <div className={styles.field}>
    <label>Job Responsibilities</label>
  
    <div className={styles.quillWrapper}>
      <ReactQuill
        theme="snow"
        value={responsibilities}
        onChange={setResponsibilities}
        placeholder="Enter job responsibilities and details..."
        modules={{
          toolbar: [
            [{ font: Font.whitelist }],
            [{ header: [1, 2, 3, false] }],
             [{ size: Size.whitelist }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["link"],
            ["clean"],
          ],
        }}
      />
    </div>
  </div>

  <div className={styles.field}>
    <label>Job Perks</label>
  
    <div className={styles.quillWrapper}>
      <ReactQuill
        theme="snow"
        value={perks}
        onChange={setPerks}
        placeholder="Enter job Perks and details..."
        modules={{
          toolbar: [
            [{ font: Font.whitelist }],
            [{ header: [1, 2, 3, false] }],
             [{ size: Size.whitelist }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["link"],
            ["clean"],
          ],
        }}
      />
    </div>
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
  
    <div className={styles.quillWrapper}>
      <ReactQuill
        theme="snow"
        value={whoshouldapply}
        onChange={setWhoShouldApply}
        placeholder="Enter job Requirements"
        modules={{
          toolbar: [
            [{ font: Font.whitelist }],
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["link"],
            ["clean"],
          ],
        }}
      />
    </div>
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
    <Footer/>
    </>
  )
}

export default Addjobposting