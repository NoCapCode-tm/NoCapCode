import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import styles from "../CSS/AddCaseStudy.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useWindowWidth from './usewindowwidth';
import Quill from "quill";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import LoaderDots from './LoaderDots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Instagram, Linkedin } from 'lucide-react';



const AddCaseStudy = () => {
    const navbarRef = useRef(null);
      const logRef = useRef(null);
      const btnTextRef = useRef(null);
      const btnIconRef = useRef(null);
      const startRef = useRef(null);
      const width= useWindowWidth()
      const [content, setContent] = useState("");
      const[title,setTitle]=useState('')
      const[subtitle,setSubtitle]=useState("")
      const[thumbnail,setThumbnail]=useState(null)
      const[loading,setLoading]=useState(false)
      const navigate = useNavigate()
      const fileInputRef = useRef(null);


      const Font = Quill.import("formats/font");

Font.whitelist = [
  "inter",
  "poppins",
  "roboto",
  "serif",
  "monospace",
];

Quill.register(Font, true);



const handlesubmit = async(e) =>{
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append("head",title)
    formData.append("subhead",subtitle)
    formData.append("thumbnail",thumbnail)
    formData.append("content",content)
    console.log(formData)
    try {
        const response = await axios.post("http://localhost:5000/api/v1/job/addcasestudy",formData,{withCredentials:true})
        console.log(response.data.message)
        setTitle("")
        setContent("")
        setSubtitle("")
        setThumbnail("")
        toast.success("Case Study Added Successfully")
        navigate("/casestudies")
    } catch (error) {
        toast.error("Could not add Case Study")
    }finally{
        setLoading(false)
    }

}
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
        <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Case Study Form</h2>
        <p className={styles.subtext}>
          Submit your case study with detailed information.
        </p>
        <form className={styles.form} onSubmit={handlesubmit}>
  {/* Heading */}
  <div className={styles.field}>
    <label>Heading</label>
    <input
      type="text"
      placeholder="Enter case study heading"
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
    />
  </div>

  {/* Subheading */}
  <div className={styles.field}>
    <label>Subheading</label>
    <input
      type="text"
      placeholder="Enter case study subheading"
      value={subtitle}
      onChange={(e)=>{setSubtitle(e.target.value)}}
    />
  </div>

  {/* Thumbnail */}
  <div className={styles.field}>
    <label>Thumbnail</label>
    <div className={styles.thumbnailBox}>
      <div className={styles.uploadArea}  onClick={() => fileInputRef.current.click()}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 16V4M12 4L8 8M12 4L16 8"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 16V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V16"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <p>
        {thumbnail ? thumbnail.name : "Click or drag and drop to upload thumbnail"}
      </p>
        <input   ref={fileInputRef} type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} hidden />
      </div>
    </div>
  </div>

  {/* Content */}
  <div className={styles.field}>
  <label>Content</label>

  <div className={styles.quillWrapper}>
    <ReactQuill
      theme="snow"
      value={content}
      onChange={setContent}
      placeholder="Enter case study content and details..."
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


  {/* Submit */}
  <div className={styles.submitWrap}>
    <button type="submit">
      Submit case study
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

export default AddCaseStudy
