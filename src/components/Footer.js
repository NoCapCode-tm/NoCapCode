import React from 'react';
import { useNavigate } from "react-router";
import { Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import useWindowWidth from "./usewindowwidth";
import styles from "../CSS/Footer.module.css"; // Note: We will handle the CSS next

const Footer = () => {
  const navigate = useNavigate();
  const width = useWindowWidth();

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
            {/* Replace your existing socials div with this: */}
            <div className={styles.socials}>
              <span>
                {/* Added aria-label to tell Google what this link is */}
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
                <ul>
                    {/* Replaced scrollToPage6 with navigate state */}
                    <li onClick={() => navigate("/", { state: { scrollTo: "service", t: Date.now() } })} style={{ cursor: "pointer" }}>
                        How We Work
                        </li>
                    
                    <li onClick={() => navigate("/casestudies")} style={{ cursor: "pointer" }}>
                    Case Studies
                    </li>
                    
                    <li onClick={() => { navigate("/about"); window.scrollTo(0,0); }} style={{ cursor: "pointer" }}>
                    About NoCapCode
                    </li>
                    
                    {/* Replaced scrollToPageabout with navigate state */}
                    <li onClick={() => navigate("/", { state: { scrollTo: "faq", t: Date.now() } })} style={{ cursor: "pointer" }}>
                      FAQs
                    </li>
                    
                    <li onClick={() => navigate("/clarity")} style={{ cursor: "pointer" }}>
                    Start with Clarity
                    </li>
                </ul>
            </div>

            <div className={styles.col}>
              <h3>Company</h3>
              <ul>
                <li onClick={()=>{
                  navigate("/careers")}} style={{ cursor: "pointer" }}>Careers</li>
                <li onClick={()=>{
                  navigate("/contact")}} style={{ cursor: "pointer" }}>Contact</li>
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
            <span onClick={()=>{navigate("/terms")}} style={{ cursor: "pointer" }}>Terms of Service</span>
            <span onClick={()=>{navigate("/privacy")}} style={{ cursor: "pointer" }}>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>

    );
};

export default Footer;