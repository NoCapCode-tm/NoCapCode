import React, { useRef, useState } from "react";
import styles from "../CSS/Contactus.module.css";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowWidth from "./usewindowwidth";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";



const Contactus = () => {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null)
  const startRef = useRef(null);
  const width = useWindowWidth()
  const[name,setname]=useState("Name");
    const[email,setemail]=useState("Email")
    const[message,setmessage]=useState("Enter your message")


 const handleSubmit = (e) => {
  e.preventDefault();

  // Trim values
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  //Empty field validation
  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    toast.error("Please fill all fields");
    return;
  }

  //  Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    toast.error("Please enter a valid email address");
    return;
  }

  // Send email
  emailjs
    .send(
      "service_4r3d0ha",
      "template_heuei0i",
      {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      },
      "R_SWFGG_XmrW_H6yx"
    )
    .then(
      () => {
        toast.success("Form submitted successfully");
        setname("Name");
        setemail("Email");
        setmessage("Enter your message");
      },
      (error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send message. Try again later.");
      }
    );
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
  const navigate = useNavigate()
  return (
    <>
    
    <section className={styles.contact}>
     <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>
      <div className={styles.wrapper} ref={startRef}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1>
            Ask whatever you have in <br /> your mind
          </h1>

          <p>
            Whether you have questions or are ready to discuss your business,
            we’re here to help. Reach out today.
          </p>

          <div className={styles.info}>
            <span>
              <Mail size={14} /> hello@nocapcode.cloud
            </span>
            <span>
              <MapPin size={14} /> Algodones, New Mexico, US, 87001
            </span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
             <input type="text" placeholder="Steve Harrington" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} onClick={()=>{setname("")}}/>

            <label>Email</label>
            <input type="text" placeholder="steve@gmail.com" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} onClick={()=>{setemail("")}}/>

            <label>Message</label>
            <textarea placeholder="Hi, I'm reaching out for..." value={message} name="message" onChange={(e)=>{setmessage(e.target.value)}} onClick={()=>{setmessage("")}} />

            <button type="submit">Submit</button>

          </form>
        </div>
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
  );
};

export default Contactus;
