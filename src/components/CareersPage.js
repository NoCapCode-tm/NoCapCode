import React, { useRef } from "react";
import styles from "../CSS/CareersPage.module.css";

import CareersGlobe from "./CareersGlobe";
import { BriefcaseBusiness, Clock, Instagram, Linkedin, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function CareersPage() {
    const navigate= useNavigate()
    const navbarRef = useRef(null);
      const logRef = useRef(null);
      const btnTextRef = useRef(null);
      const btnIconRef = useRef(null);
      const positionref =useRef(null)

      useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: positionref.current,
            start: "top top",
            toggleActions: "play play play reverse",
          },
        });
      
        // shrink navbar (CENTER STAYS FIXED)
        tl.to(navbarRef.current, {
          width:440,
          gap:"20px",
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
    <div className={styles.wrapper}>
      {/* Navbar */}
      <Navbar ref={navbarRef}logoRef={logRef} btnTextRef={btnTextRef} btnIconRef={btnIconRef}/>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.globeWrapper}>
          {/* 👇 your existing globe */}
          <CareersGlobe/>
        </div>

        <div className={styles.heroContent} ref={positionref}>
          <span className={styles.badge}>Career</span>

          <h1 className={styles.title}>
            Join Our Team And <br />
            <span>Build The Future</span> Together
          </h1>

          <p className={styles.subtitle}>
            <span> We're looking for passionate people to join our mission.We value
            flat hierarchies,</span>
            <span>clear communication and full ownership and</span> 
            responsibility.
          </p>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className={styles.positions} >
        <h2>Open positions</h2>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search field"
            className={styles.search}
          />

          <div className={styles.tabs}>
            <button className={styles.active}>All</button>
            <button>Business</button>
            <button>Design</button>
            <button>Development</button>
          </div>
        </div>

        {/* CARD */}
        <div className={styles.jobCard}>
          <div  className={styles.position}>
            <h3>Content marketing specialist</h3>
            <p>
              Join us as a senior frontend developer and lead modern, scalable
              interface design with React, Vue, or Angular.
            </p>
          </div>

          <div className={styles.meta}>
            <span><MapPin size={16}/>New York, NY</span>
            <span><Clock   size={16}/>Part time</span>
            <span><BriefcaseBusiness  size={16}/>Business</span>
          </div>

          <div className={styles.arrow}>↗</div>
        </div>
      </section>
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
                <li>Start with Clarity</li>
            
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
