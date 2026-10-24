import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from '../../CSS/LogoProjectTwo.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEO from "../SEO";

gsap.registerPlugin(ScrollTrigger);

const LogoProjectTwo = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const reveals = gsap.utils.toArray('.gsap-reveal');
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        }
      );
    });

    const grids = gsap.utils.toArray('.gsap-stagger');
    grids.forEach((grid) => {
      gsap.fromTo(grid.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 80%" }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <SEO 
        title="AXON Human Connection | Visual Identity | NoCapCode"
        description="Evolving AXON's brand from a rigid system to a smart, fluid hub built around human connection and intuitive product design."
        canonicalUrl="https://nocapcode.cloud/portfolio/logo-redesign/axon-human-connection/"
        image="https://nocapcode.cloud/portfolio-assets/axon-new-logo-glow.png"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
                "headline": "AXON - A Smarter Human Connection",
                "name": "AXON - A Smarter Human Connection",
                "description": "Brand transformation shifting AXON from a technical utility to a vibrant, user-centric ecosystem.",
                "image": "https://nocapcode.cloud/portfolio-assets/axon-new-logo-glow.png",
                "author": {
                  "@type": "Organization",
                  "@id": "https://nocapcode.cloud/#organization",
                  "name": "NoCapCode",
                  "url": "https://nocapcode.cloud/"
                },
                "publisher": {
                  "@type": "Organization",
                  "@id": "https://nocapcode.cloud/#organization",
                  "name": "NoCapCode",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://nocapcode.cloud/favicon/favicon-96x96.png"
                  }
                },
                "url": "https://nocapcode.cloud/portfolio/logo-redesign/axon-human-connection/"
              },
              {
                "@type": "Product",
                "name": "AXON — Brand Architecture & Product UI System",
                "description": "Visual identity system, brand transformation, and enterprise dashboard UI design engineered by NoCapCode.",
                "image": "https://nocapcode.cloud/portfolio-assets/axon-new-logo-glow.png",
                "brand": { "@type": "Brand", "name": "NoCapCode" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://nocapcode.cloud/portfolio/logo-redesign/axon-human-connection/",
                  "priceCurrency": "INR",
                  "price": "85000",
                  "availability": "https://schema.org/InStock"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      
      <div className={styles.topGradientGroup}>
        <section className={`${styles.section} ${styles.hero}`}>
          <span className={`${styles.eyebrow} gsap-reveal`}>BRAND ARCHITECTURE</span>
          <h2 className={`${styles.heroSub} ${styles.serif} ${styles.italic} gsap-reveal`}>A smarter, more</h2>
          <h1 className={`${styles.heroTitle} gsap-reveal`}>
            Human<br/>Connection<span className={styles.neon}>.</span>
          </h1>
          <div className={`${styles.heroTags} gsap-reveal`}>
            <span>BRAND STRATEGY</span> <span className={styles.dot}>•</span>
            <span>VISUAL IDENTITY</span> <span className={styles.dot}>•</span>
            <span>PRODUCT DESIGN</span>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.splitGrid}>
            <div className="splitLeft gsap-reveal">
              <span className={styles.eyebrow}>01. THE CHALLENGE</span>
              <h2 className={styles.serif}>
                From a rigid system<br/>to a smart hub built<br/>around <span className={`${styles.italic} ${styles.cyanAccent}`}>human<br/>connection.</span>
              </h2>
            </div>
            <div className="splitRight gsap-reveal">
              <span className={styles.eyebrow}>Challenge</span>
              <p>AXON required a brand transformation that shifted their image from a cold, technical utility to a vibrant, user-centric ecosystem.</p>
              <p>By defining a fluid, electric visual language, we positioned them as an empowering force in enterprise communication.</p>
            </div>
          </div>

          <div className={styles.splitGrid} style={{ marginTop: '140px' }}>
            <div className="splitLeft gsap-reveal">
              <span className={styles.eyebrow}>02. THE SOLUTION</span>
              <h2 className={styles.serif}>From rigid to <span className={styles.italic}>fluid.</span></h2>
              <p className={styles.textMuted} style={{ marginTop: '20px', maxWidth: '350px' }}>
                We evolved the static mark into a dynamic, glowing signature that breathes energy into digital environments.
              </p>
            </div>
            <div className={`${styles.evoCards} gsap-stagger`}>
              <div className={styles.cardBefore}>
                <img src="/portfolio-assets/axon-old-logo.png" alt="Original Logo" loading="lazy" />
              </div>
              <div className={styles.cardAfter}>
                <img src="/portfolio-assets/axon-new-logo-glow.png" alt="New Glowing Logo" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div> 

      <section className={`${styles.section} ${styles.bgNeon}`}>
        <div className={`${styles.sysHeader} gsap-reveal`}>
          <span className={styles.eyebrow}>03. VISUAL LANGUAGE</span>
          <h2 className={styles.serif}>Technology with <span className={styles.italic}>a pulse.</span></h2>
        </div>
        
        <div className={`${styles.threeColGrid} gsap-stagger`}>
          <div className={`${styles.sysCard} ${styles.sysCardWhite}`}>
            <div className={styles.sysVisual}>
              <img src="/portfolio-assets/axon-mark-neon.svg" alt="Fluid Geometry" loading="lazy" />
            </div>
            <h4 className={styles.serif}>Fluid geometry</h4>
            <p className={styles.textMuted}>The 'A' operates as an ongoing energetic pulse.</p>
          </div>
          
          <div className={`${styles.sysCard} ${styles.sysCardGrid}`}>
            <div className={styles.sysVisual} style={{ paddingBottom: '20px' }}>
              <div className={styles.colorGrid}>
                <div style={{ background: '#c4f000' }}></div>
                <div style={{ background: '#6b4ce6' }}></div>
                <div style={{ background: '#3bcfc6' }}></div>
                <div style={{ background: '#050505' }}></div>
              </div>
            </div>
            <h4 className={styles.serif}>Vibrant energy</h4>
            <p className={styles.textMuted}>Electric neon balanced by deep space blacks.</p>
          </div>
          
          <div className={`${styles.sysCard} ${styles.sysCardNavy}`}>
            <div className={styles.sysVisual}>
              <span className={`${styles.sysTypography} ${styles.serif}`}>Aa</span>
            </div>
            <h4 className={styles.serif}>Friendly precision</h4>
            <p className={styles.textMuted}>Accessible sans-serif forms for optimal legibility.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgBlack}`}>
        <div className={`${styles.bentoHeader} gsap-reveal`}>
          <div>
            <span className={styles.eyebrow}>04. PRODUCT DESIGN</span>
            <h2 className={styles.serif}>Clear at <br/><span className={styles.italic}>every scale.</span></h2>
          </div>
          <p>A comprehensive UI kit ensures the visual identity remains distinct across massive data dashboards and micro-interactions.</p>
        </div>
        
        <div className={`${styles.bentoGrid} gsap-stagger`}>
          <div className={`${styles.bentoItem} ${styles.bentoTop}`}>
            <img src="/portfolio-assets/axon-dashboard-ui.png" alt="Dashboard Mockup" loading="lazy" />
          </div>
          <div className={`${styles.bentoItem} ${styles.bentoBottomLeft}`}>
            <img src="/portfolio-assets/axon-mobile-ui.png" alt="Mobile UI Mockup" loading="lazy" />
          </div>
          <div className={`${styles.bentoItem} ${styles.bentoBottomRight}`}>
            <img src="/portfolio-assets/axon-mark-black.svg" alt="Axon Mark" className={styles.bentoLogoCenter} loading="lazy" />
            <h3 className={styles.sans}>Technology that feels intuitive and empowering.</h3>
          </div>
        </div>
      </section>

      <section className={`${styles.bgIndigo} ${styles.outcomeGrid}`}>
        <div className={`${styles.outcomeGraphic} gsap-reveal`}>
          <img src="/portfolio-assets/axon-footer-circles.svg" alt="Concentric Graphic" loading="lazy" />
        </div>
        <div className={`${styles.outcomeText} gsap-reveal`}>
          <span className={styles.eyebrow}>05. THE OUTCOME</span>
          <h2 className={styles.serif}>Smart by nature.<br/><span className={styles.italic}>Human by design.</span></h2>
          <p>
            The successful rollout positioned AXON as the premier choice for modern teams, drastically increasing user adoption metrics while solidifying their authority in the tech ecosystem.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogoProjectTwo;