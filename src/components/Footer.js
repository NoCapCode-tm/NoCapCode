import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import useWindowWidth from "./usewindowwidth";
import styles from "../CSS/Footer.module.css"; 

const Footer = () => {
  // const width = useWindowWidth();

  return (
    <footer className={styles.footerWrap}>
       <div className={styles.footerScene}>
        <img src="./internal/footerbg.png" width="100%" height="100%" alt="Footer background" />
       </div>
      <div className={styles.mirrorOverlay}/>
      <div className={styles.footerBox}>
    
        <div className={styles.top}>
          
          <div className={styles.left}>
            <h2 className={styles.logo}>NoCapCode™</h2>
            <p className={styles.tagline}>No cap. Built like it's ours.</p>
            <p className={styles.tagline}>We build software systems for teams who care about clarity, ownership, and longevity.</p>
            <div className={styles.socials}>
              <span>
                <a href="https://www.linkedin.com/company/nocapcode" rel="noreferrer" target="_blank" aria-label="Visit our LinkedIn page">
                  <Linkedin size={16} color="rgba(190, 190, 190, 1)"/>
                </a>
              </span>
              <span>
                <a href="https://x.com/nocapcodecloud" target="_blank" rel="noreferrer" aria-label="Visit our X Twitter page">
                  <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "16px", color: "rgba(190, 190, 190, 1)"}}/>
                </a>
              </span> 
              <span>
                <a href="https://www.instagram.com/nocapcode.cloud" target="_blank" rel="noreferrer" aria-label="Visit our Instagram page">
                  <Instagram size={16} color="rgba(190, 190, 190, 1)"/>
                </a>
              </span>
            </div>

            <div className={styles.badge}>
                <img src="/badge.png" alt="Microsoft for startup Badge" height="100%" width="100%"/>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.col}>
                <h3>Explore</h3>
                {/* 
                  Note: We wrap the text in <Link> tags. 
                  We use inline styles to inherit your existing CSS so it doesn't look like standard blue underlined text.
                */}
                <ul>
                    <li>
                        <Link to="/" state={{ scrollTo: "service", t: Date.now() }} style={{ color: "inherit", textDecoration: "none" }}>
                            How We Work
                        </Link>
                    </li>
                    <li>
                        <Link to="/casestudies" style={{ color: "inherit", textDecoration: "none" }}>
                            Case Studies
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => window.scrollTo(0,0)} style={{ color: "inherit", textDecoration: "none" }}>
                            About NoCapCode
                        </Link>
                    </li>
                    <li>
                        <Link to="/" state={{ scrollTo: "faq", t: Date.now() }} style={{ color: "inherit", textDecoration: "none" }}>
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to="/clarity" style={{ color: "inherit", textDecoration: "none" }}>
                            Start with Clarity
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.col}>
              <h3>Company</h3>
              <ul>
                <li>
                    <Link to="/careers" style={{ color: "inherit", textDecoration: "none" }}>Careers</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
                </li>
              </ul>
              <p>
                 Santa Fe NM 87501,<span className={styles.mobileBreak}></span> United States
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
           <p>© 2024-{String(new Date().getFullYear()).slice(-2)} NoCapCode. All rights reserved. <br/>Built with restraint, responsibility, and long-term thinking.</p>

          <div className={styles.links}>
            <span><Link to="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms of Service</Link></span>
            <span><Link to="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link></span>
            <span><Link to="/security" style={{ color: "inherit", textDecoration: "none" }}>Trust & Security</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;