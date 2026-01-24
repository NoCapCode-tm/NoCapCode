import React, { useRef } from "react";
import styles from "../CSS/Privacy.module.css";
import { Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./Navbar";

const Privacy = () => {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null);
  const startRef = useRef(null);

  useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: startRef.current,
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
  const navigate = useNavigate()
  return (
    <>
    <section className={styles.wrap}>
      <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>
      {/* ghost background heading */}
      <h1 className={`${styles.ghost} ${styles.gradienttext}`}>
        Welcome to NoCapCode
      </h1>

      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Privacy Policy</h2>
          <span className={styles.updated}>Last updated: 12/12/2025</span>
        </header>

        <p className={styles.intro} ref={startRef}>
          At NoCapCode, we respect your privacy.
          <br />
          This policy explains what information we collect, why we collect it,
          and how we handle it.
          <br />
          If you have questions, we encourage you to ask.
        </p>

        <section className={styles.block}>
          <h3>1. Information We Collect</h3>
          <p>We collect only what's necessary.</p>
          <p>This may include:</p>
          <ul>
            <li>your name</li>
            <li>email address</li>
            <li>information you share through contact or clarity forms</li>
            <li>basic usage data (such as page visits)</li>
          </ul>
          <p className={styles.muted}>
            We do not collect sensitive personal data unless you choose to share it.
          </p>
        </section>

        <section className={styles.block}>
          <h3>2. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>respond to your inquiries</li>
            <li>understand what you're trying to build</li>
            <li>evaluate whether there's a good fit for collaboration</li>
            <li>improve how our website and services work</li>
          </ul>
          <p>
            We don't use your data for spam, aggressive marketing, or resale.
          </p>
        </section>

        <section className={styles.block}>
          <h3>3. Forms & Communication</h3>
          <p>When you submit a form on our site:</p>
          <ul>
            <li>the information is reviewed by our team</li>
            <li>used only for the purpose it was shared</li>
            <li>not added to mass mailing lists</li>
          </ul>
          <p>
            We communicate thoughtfully and only when relevant.
          </p>
        </section>

        <section className={styles.block}>
          <h3>4. Cookies & Analytics</h3>
          <p>Our website may use basic cookies or analytics tools to understand:</p>
          <ul>
            <li>how pages are used</li>
            <li>what content is helpful</li>
          </ul>
          <p>
            This data is anonymous and used only to improve the site experience.
            <br />
            You can disable cookies in your browser if you prefer.
          </p>
        </section>

        <section className={styles.block}>
          <h3>5. Data Storage & Security</h3>
          <p>We take reasonable steps to protect your information:</p>
          <ul>
            <li>secure hosting</li>
            <li>limited access</li>
            <li>no unnecessary data retention</li>
          </ul>
          <p>
            However, no system is completely risk-free. We encourage discretion
            when sharing information online.
          </p>
        </section>

        <section className={styles.block}>
          <h3>6. Sharing of Information</h3>
          <p>
            We do not sell, rent, or trade your personal information.
          </p>
          <p>Information may only be shared:</p>
          <ul>
            <li>with trusted service providers when necessary (e.g., hosting, email)</li>
            <li>if required by law</li>
          </ul>
          <p>Nothing more.</p>
        </section>

        <section className={styles.block}>
          <h3>7. Your Rights</h3>
          <p>You may:</p>
          <ul>
            <li>request access to your information</li>
            <li>ask for corrections</li>
            <li>request deletion of your data</li>
          </ul>
          <p>Just reach out through our website.</p>
        </section>

        <section className={styles.block}>
          <h3>8. External Links</h3>
          <p>
            Our website may link to other websites.
            <br />
            We are not responsible for the privacy practices of those sites.
            <br />
            We recommend reviewing their policies separately.
          </p>
        </section>

        <section className={styles.block}>
          <h3>9. Changes to This Policy</h3>
          <p>
            This policy may be updated as our work evolves.
            <br />
            The most current version will always be available on this page.
          </p>
        </section>

        <section className={styles.block}>
          <h3>10. Contact</h3>
          <p>
            If you have questions or concerns about privacy, contact us
            thoughtfully through the website.
          </p>

          <p className={styles.closing}>
            Closing note:
            <br />
            We collect information to understand not to track, pressure, or manipulate.
            <br />
            Privacy, like good software, works best when it's simple and honest.
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
};

export default Privacy;
