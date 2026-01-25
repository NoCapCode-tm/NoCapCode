import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import Navbar from './Navbar';
import styles from '../CSS/CaseStudyDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const CaseStudyDetail = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.caseStudyDetail}>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>

      <div className={styles.container}>
        {/* Back Button */}
        <div className={styles.backButton} onClick={() => navigate('/case-studies')}>
          <ArrowLeft size={20} />
          <span>Back to Case Studies</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Crafting a Timeless Brand Identity That Resonates
            </h1>
            <p className={styles.heroDescription}>
              A strong brand identity builds trust and recognition. Learn the steps to create...
            </p>
          </div>
          <div className={styles.heroImage}>
            {/* Black placeholder for image */}
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>

        {/* Background Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Situation: The Idea Was There. The Clarity Wasn't.</h2>
          <p className={styles.sectionText}>
            The founder didn't come with a tech problem. They came with mental chaos.
          </p>
          <ul className={styles.bulletList}>
            <li>Random notes in Notion</li>
            <li>Features half-decided in WhatsApp chats</li>
            <li>Pressure to "launch fast"</li>
            <li>Constant fear of building the wrong thing</li>
          </ul>
          <p className={styles.sectionText}>
            No PRD. No roadmap. No decisions strong enough to survive development.
            Just energy. And stress.
          </p>
        </div>

        {/* Step One Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step One: We Slowed Everything Down (On Purpose)</h2>
          <p className={styles.sectionText}>Before writing code or designing UI, we built a decision system.</p>
          <p className={styles.sectionText}>We mapped:</p>
          <ul className={styles.bulletList}>
            <li>What actually needed to exist</li>
            <li>What could wait</li>
            <li>What should never be built at all</li>
          </ul>
          <p className={styles.sectionText}>Then we asked the uncomfortable questions early:</p>
          <ul className={styles.bulletList}>
            <li>What happens if this fails?</li>
            <li>What problem are we not solving?</li>
            <li>What does "done" actually mean?</li>
          </ul>
          <p className={styles.sectionText}>
            This phase took 3 days. It saved 3 months of rework, redesign, and regret.
          </p>
        </div>

        {/* Hard Rule Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Hard Rule: No Code Until Decisions Were Locked</h2>
          <p className={styles.sectionText}>Once clarity was there, we froze it. We locked:</p>
          <ul className={styles.bulletList}>
            <li>User flows</li>
            <li>Constraints</li>
            <li>Feature boundaries</li>
            <li>Ownership</li>
          </ul>
          <p className={styles.sectionText}>
            No moving goalposts. No late "one more idea" additions. No silent confusion.
            This is where things changed - engineering became calm, design became easy, 
            and execution moved forward without friction.
          </p>
        </div>

        {/* What We Built Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Actually Built</h2>
          <p className={styles.sectionText}>Instead of a fragile MVP, we built a clean execution-ready system:</p>
          <ul className={styles.bulletList}>
            <li>Clear product roadmap</li>
            <li>Single system owner</li>
            <li>UI that matched engineering reality</li>
            <li>Documentation that survived handoffs</li>
            <li>Scalable MERN stack architecture</li>
          </ul>
          <p className={styles.sectionText}>
            Because thinking was clean, code stayed clean. No hero coding. No rewrites. No late-night panic fixes.
          </p>
        </div>

        {/* Results Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Results (21 Days, No Drama)</h2>
          <ul className={styles.bulletList}>
            <li>Product shipped in 21 days</li>
            <li>Zero rework cycles</li>
            <li>Engineers moved without blockers</li>
            <li>Founder stopped micromanaging</li>
            <li>New features added without breaking the system</li>
          </ul>
          <p className={styles.sectionText}>
            But the real win? The founder said: "This is the first time my product feels calm."
            That's the result we design for.
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Why This Case Study Matters</h2>
          <p className={styles.sectionText}>
            Most startups don't fail because of bad tech. They fail because decisions stay vague for too long.
            NoCapCode exists to make decisions early - so building becomes simple, predictable, and boring (in the good way).
          </p>
        </div>

        {/* CTA Sections in a Row */}
        <div className={styles.ctaRow}>
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Start with clarity, not code</h2>
            <p className={styles.ctaDescription}>
              If your product is still in your head, Notion, or 10 different chats —
              we'll help you turn it into a build-ready system before you waste months.
            </p>
            <button className={styles.ctaButton}>
               Book a clarity session →
            </button>
          </div>

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>See how we work</h2>
            <p className={styles.ctaDescription}>
              Want to understand our full thinking + execution process?
            </p>
            <button className={styles.ctaButton}>
               Explore our process →
            </button>
          </div>
        </div>
      </div>

      {/* Footer - Same as onboarding page */}
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
              <span><a href="https://www.instagram.com/nocapcode.cloud" target="_blank" rel="noreferrer"><Instagram size={16} color="rgba(190, 190, 190, 1)" /></a></span>
              
              
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
    </div>
  );
};

export default CaseStudyDetail;
