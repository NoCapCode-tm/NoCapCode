import React, { useRef } from "react";
import styles from "../CSS/Condition.module.css";
import { Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./Navbar";
import useWindowWidth from "./usewindowwidth";

const Condition = () => {
  const navbarRef = useRef(null);
        const logRef = useRef(null);
        const btnTextRef = useRef(null);
        const btnIconRef = useRef(null);
        const startRef = useRef(null);
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
  const navigate=useNavigate()
  return (
    <>
    <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>
    <section className={styles.wrap}>
      {/* ghost background heading */}
      <h1 className={`${styles.ghost} ${styles.gradienttext}`}>Welcome to NoCapCode</h1>

      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Terms & Conditions</h2>
          <span className={styles.updated}>Last updated: 12/12/2025</span>
        </header>

        <p className={styles.intro}>
          By accessing or using our website, services, or engaging with us for
          work, you agree to the terms outlined below.
          <br />
          If you don’t agree with these terms, please don’t use our site or
          services.
        </p>

        <section className={styles.block} ref={startRef}>
          <h3>1. About NoCapCode</h3>
          <p>
            NoCapCode is a digital product studio.
            <br />
            We help founders, creators, and teams with product clarity, MVP
            development, systems, and related services.
            <br />
            Our work is collaborative and context-driven. Outcomes depend on
            clarity, communication, and decisions made together.
          </p>
        </section>

        <section className={styles.block}>
          <h3>2. Use of This Website</h3>
          <p>You may use this website to:</p>
          <ul className={styles.listitem}>
            <li>learn about our work</li>
            <li>understand our approach</li>
            <li>contact us for potential collaboration</li>
          </ul>

          <p>You may not:</p>
          <ul>
            <li>misuse, copy, or republish content without permission</li>
            <li>attempt to disrupt or harm the site or its users</li>
            <li>use our content to misrepresent our work or your own</li>
          </ul>

          <p className={styles.muted}>
            All content is provided for general information purposes only.
          </p>
        </section>

        <section className={styles.block}>
          <h3>3. Engagement & Services</h3>
          <p>
            Any project, consultation, or service begins only after mutual
            agreement on scope, timelines, and terms.
          </p>
          <p>Nothing on this website should be considered:</p>
          <ul>
            <li>a binding offer</li>
            <li>a guarantee of results</li>
            <li>a promise of availability</li>
          </ul>
          <p>
            Each engagement is assessed individually to ensure a proper fit.
          </p>
        </section>

        <section className={styles.block}>
          <h3>4. No Guarantees</h3>
          <p>We don’t promise specific outcomes such as:</p>
          <ul>
            <li>growth</li>
            <li>revenue</li>
            <li>performance metrics</li>
            <li>market success</li>
          </ul>
          <p>
            Our role is to provide clarity, execution support, and thoughtful
            systems — not guarantees.
            <br />
            Results depend on many factors beyond our control.
          </p>
        </section>

        <section className={styles.block}>
          <h3>5. Intellectual Property</h3>
          <ul>
            <li>
              All original materials we create remain our intellectual property
              until payment terms are fulfilled.
            </li>
            <li>
              Once fulfilled, ownership and usage rights are transferred as
              agreed per project.
            </li>
          </ul>
          <p>
            Content on this website (text, visuals, branding) belongs to
            NoCapCode and may not be reused without permission.
          </p>
        </section>

        <section className={styles.block}>
          <h3>6. Confidentiality</h3>
          <p>
            We respect confidentiality.
            <br />
            Any information shared with us during discussions or projects is
            treated as private and will not be disclosed without consent, except
            where required by law.
          </p>
        </section>

        <section className={styles.block}>
          <h3>7. Limitation of Liability</h3>
          <p>To the extent permitted by law:</p>
          <ul>
            <li>
              NoCapCode is not liable for indirect, incidental, or consequential
              damages.
            </li>
            <li>
              We are not responsible for losses resulting from decisions made
              based on information from this site alone.
            </li>
          </ul>
          <p>Use judgment. Ask questions. We encourage that.</p>
        </section>

        <section className={styles.block}>
          <h3>8. External Links</h3>
          <p>
            Our website may contain links to third-party sites.
            <br />
            We are not responsible for their content, policies, or practices.
          </p>
        </section>

        <section className={styles.block}>
          <h3>9. Changes to These Terms</h3>
          <p>
            We may update these terms from time to time to reflect changes in how
            we work or operate.
            <br />
            The latest version will always be available on this page.
          </p>
        </section>

        <section className={styles.block}>
          <h3>10. Contact</h3>
          <p>
            If you have questions about these terms, reach out thoughtfully.
            <br />
            Contact us via the website.
          </p>

          <p className={styles.closing}>
            Closing note:
            <br />
            These terms exist to create clarity, not distance.
            <br />
            We believe good work starts with mutual understanding.
          </p>
        </section>
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
              <span onClick={()=>{navigate("/404")}}><Instagram size={16} color="rgba(190, 190, 190, 1)"/></span>
              
              
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

export default Condition;
