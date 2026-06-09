import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../CSS/Contactus.module.css";
import { Mail, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowWidth from "./usewindowwidth";
import { toast } from "react-toastify";
import LoaderDots from './LoaderDots';
import axios from "axios";
import Footer from './Footer';

const Contactus = () => {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null)
  const startRef = useRef(null);
  const width = useWindowWidth();
  
  const [loading, setLoading] = useState(false);
  // FIX: Initialize with empty strings so placeholders show natively
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim values
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Empty field validation
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error("Please fill all fields");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://nocapcode-backend-hapd.onrender.com/api/v1/job/contactus", {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage
      }, { withCredentials: true });
      
      console.log(response.data);
      toast.success("Form Submitted Successfully");
      setname("");
      setemail("");
      setmessage("");
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error.message);
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
      width: isMobile ? "50%" : 440,
      borderRadius: isMobile ? "8px" : "8px",
      top: isMobile ? "10px" : "10px",
      justifyContent: "flex-end",
      gap: "20px",
      duration: 0.45,
      ease: "power2.out",
    });

    // logo fade + slide
    tl.to(
      logRef.current,
      {
        opacity: 0,
        display: "none",
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
  }, [width]); // Added width as a dependency

  return (
    <>
      <Helmet>
        {/* SEO Data (Unchanged) */}
        <title>Contact NoCapCode | SaaS, AI Automation & Software Development</title>
        <meta name="description" content="Contact NoCapCode for SaaS development..." />
        {/* Add the rest of your Helmet tags here as they were */}
      </Helmet>

      {loading && <LoaderDots text="Submitting Enquiry" />}
      
      <section className={styles.contact}>
        <Navbar
          ref={navbarRef}
          logoRef={logRef}
          btnTextRef={btnTextRef}
          btnIconRef={btnIconRef}
        />
        
        <div className={styles.wrapper} ref={startRef}>
          <div className={styles.left}>
            <h1>Let’s <span>build</span> something <span>amazing</span> together</h1>
            <p>Have a question, an idea or want to discuss your business?<br />We’d love to hear from you. Reach out today!</p>
          </div>

          {/* RIGHT FORM */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div className={styles.emailInfo}>
                <div className={styles.iconBox}>
                  <Mail size={24} color="#a1a1aa" />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>hello@nocapcode.cloud</span>
                  <span className={styles.infoSub}>We reply within 24 hours</span>
                </div>
              </div>
              <div className={styles.headerDivider}></div>
              <div className={styles.locInfo}>
                <div className={styles.iconBox}>
                  <MapPin size={24} color="#a1a1aa" />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Santa Fe, New Mexico, US</span>
                  <span className={styles.infoSub}>Mountain Time</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  {/* FIX: Removed onClick, added correct placeholder */}
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setname(e.target.value)} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input 
                    type="text" 
                    placeholder="Enter your email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setemail(e.target.value)} 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea 
                  placeholder="Type your message here.." 
                  value={message} 
                  name="message" 
                  onChange={(e) => setmessage(e.target.value)} 
                />
              </div>

              <div className={styles.btnWrapper}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;