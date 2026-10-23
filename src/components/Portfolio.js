import React, { useRef, useState } from "react";
import styles from "../CSS/Portfolio.module.css"; 
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Footer from './Footer';
import SEO from './SEO';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Website Design"); 

  useGSAP(() => {
    gsap.fromTo("." + styles.caseCard, 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, [activeTab]); 

  return (
    <>
      <SEO 
        title="Portfolio | NoCapCode Software & Design Showcase"
        description="Explore our production-grade enterprise software projects, SaaS architectures, and high-impact UI/UX designs built for startups and modern teams."
        canonicalUrl="https://nocapcode.cloud/portfolio/"
      />

      <Navbar />

      <section className={styles.caseWrap} ref={sectionRef}>
        <span className={styles.pill}>Portfolio</span>
        <h1 className={styles.heading}>Our <span>Selected</span> Works</h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px' }}>
          <button 
            onClick={() => setActiveTab("Website Design")}
            style={{ 
              padding: '10px 24px', 
              borderRadius: '30px', 
              border: '1px solid rgba(255,255,255,0.2)', 
              background: activeTab === "Website Design" ? '#3225bf' : 'transparent', 
              color: 'white', 
              cursor: 'pointer',
              fontFamily: '"Outfit", sans-serif',
              transition: 'all 0.3s ease'
            }}>
            Website Design
          </button>
          <button 
            onClick={() => setActiveTab("Logo Redesign")}
            style={{ 
              padding: '10px 24px', 
              borderRadius: '30px', 
              border: '1px solid rgba(255,255,255,0.2)', 
              background: activeTab === "Logo Redesign" ? '#3225bf' : 'transparent', 
              color: 'white', 
              cursor: 'pointer',
              fontFamily: '"Outfit", sans-serif',
              transition: 'all 0.3s ease'
            }}>
            Logo Redesign
          </button>
        </div>

        <div className={styles.grid}>
          {/* Keep all links in the DOM so crawlers discover every project */}
          <Link 
            to="/portfolio/website-design/medvitals-ai-triage/" 
            className={styles.caseCard} 
            style={{ textDecoration: 'none', display: activeTab === "Website Design" ? 'block' : 'none' }}
          >
            <div className={styles.caseImage}>
              <img src="/internal/og-cover.png" alt="MedVitals AI" />
              <span className={styles.caseArrow}><span className={styles.arrowOut}>↗</span><span className={styles.arrowIn}>↗</span></span>
            </div>
            <div className={styles.caseContent}>
              <h3>MedVitals AI</h3>
              <p>HIPAA-Compliant AI Patient Triage</p>
            </div>
          </Link>

          <Link 
            to="/portfolio/logo-redesign/symbol-of-identity/" 
            className={styles.caseCard} 
            style={{ textDecoration: 'none', display: activeTab === "Logo Redesign" ? 'block' : 'none' }}
          >
            <div className={styles.caseImage}>
              <img src="/portfolio-assets/new-logo-gold.svg" alt="Symbol of Identity" style={{ backgroundColor: '#101c13', objectFit: 'contain', padding: '40px' }} />
              <span className={styles.caseArrow}><span className={styles.arrowOut}>↗</span><span className={styles.arrowIn}>↗</span></span>
            </div>
            <div className={styles.caseContent}>
              <h3>Symbol of Identity</h3>
              <p>Brand Architecture & Visual Identity</p>
            </div>
          </Link>

          <Link 
            to="/portfolio/logo-redesign/axon-human-connection/" 
            className={styles.caseCard} 
            style={{ textDecoration: 'none', display: activeTab === "Logo Redesign" ? 'block' : 'none' }}
          >
            <div className={styles.caseImage}>
              <img src="/portfolio-assets/axon-new-logo-glow.png" alt="AXON Human Connection" style={{ backgroundColor: '#050505', objectFit: 'contain', padding: '60px' }} />
              <span className={styles.caseArrow}><span className={styles.arrowOut}>↗</span><span className={styles.arrowIn}>↗</span></span>
            </div>
            <div className={styles.caseContent}>
              <h3>AXON</h3>
              <p>A Smarter Human Connection</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;