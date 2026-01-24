import React, { useRef } from "react";
import styles from "../CSS/ClarityForm.module.css";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router";
import useWindowWidth from "./usewindowwidth";

export default function ClarityForm() {
    const navbarRef = useRef(null);
    const logRef = useRef(null);
    const btnTextRef = useRef(null);
    const btnIconRef = useRef(null);
    const startRef = useRef(null);
    const navigate=useNavigate()
    const width = useWindowWidth()

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
    <div className={styles.page}>
      {/* Top heading */}
       <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>

      <div className={styles.abboutpage0}>
      <h1 >Built <pre>with</pre><span>Clarity</span></h1>
      <p className={styles.aboutpara} >
        <span>NoCapCode exists to help people build software that holds up</span>
         <span>not just at launch, but when real usage begins.</span>
      </p>
      </div>
      <div className={styles.divider1}>
        <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Clarity Questions</h2>
        <p className={styles.subtext}>
          Please answer in your own words. There are no right or wrong answers.
        </p>

      </div>

      {/* Main card */}
      <section className={styles.card} ref={startRef}>
        <div className={styles.form}>
          {[
            {
              q: "1. What are you trying to build?",
              p: "One or two sentences are enough. No pitching — just describe it plainly.",
            },
            {
              q: "2. Who is this for?",
              p: "Be specific. “Everyone” usually means no one.",
            },
            {
              q: "3. What problem are you trying to solve?",
              p: "Not features — the real problem behind them.",
            },
            {
              q: "4. What’s unclear or stuck right now?",
              p: "This helps us understand where support is needed most.",
            },
            {
              q: "5. What exists today?",
              p: "An idea, a prototype, early users, or nothing yet — all are fine.",
            },
            {
              q: "6. Why now?",
              p: "What made this worth starting at this moment?",
            },
            {
              q: "7. What kind of help are you looking for?",
              p: "MVP build, product direction, validation, execution, or something else.",
            },
          ].map((item, i) => (
            <div key={i} className={styles.field}>
              <label>{item.q}</label>
              <input placeholder={item.p} />
            </div>
          ))}
        </div>
      </section>

      {/* Submit */}
      <div className={styles.submitWrap}>
        <button>
          Submit for review <span>→</span>
        </button>
      </div>
    </div>
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
              <span><FontAwesomeIcon icon={faXTwitter} /></span>
              <span><Instagram size={16} color="rgba(190, 190, 190, 1)"/></span>
              
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
}
