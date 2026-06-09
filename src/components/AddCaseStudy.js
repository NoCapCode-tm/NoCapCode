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
import Footer from './Footer';



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
        const response = await axios.post("https://nocapcode-backend-hapd.onrender.com/api/v1/job/addcasestudy",formData,{withCredentials:true})
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
    width: isMobile ? "50%" : 440,   //fixed
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
          Allott Completion Certificate to Employee
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
    <Footer/>
    </>
  )
}

export default AddCaseStudy
