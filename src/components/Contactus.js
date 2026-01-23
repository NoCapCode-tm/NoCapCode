import React from "react";
import styles from "../CSS/Contactus.module.css";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Contactus = () => {
  return (
    <>
    <section className={styles.contact}>
      {/* top subtle outline */}
      <div className={styles.topOutline} />

      <div className={styles.wrapper}>
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
          <form>
            <label>Name</label>
            <input placeholder="Jane Smith" />

            <label>Email</label>
            <input placeholder="jane@firm.com" />

            <label>Message</label>
            <textarea placeholder="Hi, I’m reaching out for..." />

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
            <div className={styles.socials}>
              <span><Linkedin size={20} color="rgba(190, 190, 190, 1)"/></span>
              <span>𝕏</span>
              <span><Instagram size={20} color="rgba(190, 190, 190, 1)"/></span>
              
            </div>

            <div className={styles.badge}>
                <img src="/badge.png" alt="/" height="100%" width="100%"/>
            </div>
          </div>

        
          <div className={styles.right}>
            <div className={styles.col}>
              <h4>Explore</h4>
              <ul>
                <li style={{ cursor: "pointer" }}>How We Work</li>
                <li >About NoCapCode</li>
                <li>Start with Clarity</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Company</h4>
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
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Contactus;
