import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from '../../CSS/LogoProjectOne.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEO from "../SEO";

gsap.registerPlugin(ScrollTrigger);

const LogoProjectOne = () => {
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
        title="Symbol of Identity | Brand Architecture | NoCapCode"
        description="A complete brand architecture and visual identity redesign transforming a traditional institution into a modern hub for skill-based education."
        canonicalUrl="https://nocapcode.cloud/portfolio/logo-redesign/symbol-of-identity/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
                "headline": "Symbol of Identity - Brand Architecture",
                "name": "Symbol of Identity - Brand Architecture",
                "description": "A complete brand architecture and visual identity redesign for a skill-based education hub.",
                "image": "https://nocapcode.cloud/portfolio-assets/new-logo-gold.svg",
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
                "url": "https://nocapcode.cloud/portfolio/logo-redesign/symbol-of-identity/"
              },
              {
                "@type": "Product",
                "name": "Symbol of Identity — Brand Architecture & Visual Identity System",
                "description": "Complete brand architecture, geometric monogram design, and visual identity system engineered by NoCapCode.",
                "image": "https://nocapcode.cloud/portfolio-assets/new-logo-gold.svg",
                "brand": { "@type": "Brand", "name": "NoCapCode" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://nocapcode.cloud/portfolio/logo-redesign/symbol-of-identity/",
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
          <h1 className={`${styles.heroTitle} ${styles.serif} gsap-reveal`}>
            Crafting a<br/>Symbol of<br/>Identity<span className={styles.gold}>.</span>
          </h1>
          <div className={`${styles.heroTags} gsap-reveal`}>
            <span>BRAND STRATEGY</span> <span className={styles.dot}>•</span>
            <span>VISUAL IDENTITY</span> <span className={styles.dot}>•</span>
            <span>WEB PLATFORM</span>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.splitGrid}>
            <div className="splitLeft gsap-reveal">
              <span className={styles.eyebrow}>01. THE CHALLENGE</span>
              <h2 className={styles.serif}>
                From a traditional<br/>institution to a<br/>forward-thinking<br/>hub for <span className={`${styles.italic} ${styles.greenAccent}`}>skill-based<br/>education.</span>
              </h2>
            </div>
            <div className="splitRight gsap-reveal">
              <span className={styles.eyebrow}>Challenge</span>
              <p>The rebrand needed to honor the institution's rich heritage while firmly positioning it as a modern leader in technology and design education.</p>
              <p>Our approach stripped away the visual clutter, leaving a bold, iconic mark that translates effortlessly across digital and physical mediums.</p>
            </div>
          </div>

          <div className={styles.splitGrid} style={{ marginTop: '140px' }}>
            <div className="splitLeft gsap-reveal">
              <span className={styles.eyebrow}>02. THE SOLUTION</span>
              <h2 className={styles.serif}>From ornate<br/>to <span className={styles.italic}>iconic.</span></h2>
              <p className={styles.textMuted} style={{ marginTop: '20px', maxWidth: '350px' }}>
                We distilled the original crest into a sleek, structural monogram built for the digital age.
              </p>
            </div>
            <div className={`${styles.evoCards} gsap-stagger`}>
              <div className={styles.cardBefore}>
                <img src="/portfolio-assets/old-crest.png" alt="Original Crest" loading="lazy" />
              </div>
              <div className={styles.cardAfter}>
                <img src="/portfolio-assets/new-logo-gold.svg" alt="New Monogram" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div> 

      <section className={`${styles.section} ${styles.bgBlack}`}>
        <div className={`${styles.monogramTop} gsap-reveal`}>
          <div>
            <span className={styles.eyebrow}>03. THE MONOGRAM</span>
            <h2 className={styles.serif}>One monogram.<br/><span className={styles.italic}>Five powerful ideas.</span></h2>
          </div>
          <p>Built on a strict geometric grid, every angle serves a specific narrative purpose.</p>
        </div>
        
        <div className={`${styles.fourColGrid} gsap-stagger`}>
          <div className={styles.monoItem}>
            <div className={styles.monoIcon}><img src="/portfolio-assets/mono-1.svg" alt="Tradition & Tech" loading="lazy" /></div>
            <h4 className={styles.serif}>Tradition & Tech</h4>
            <p>Merging legacy with forward momentum.</p>
          </div>
          <div className={styles.monoItem}>
            <div className={styles.monoIcon}><img src="/portfolio-assets/mono-2.svg" alt="Growth" loading="lazy" /></div>
            <h4 className={styles.serif}>Growth</h4>
            <p>Structural lines representing upward mobility.</p>
          </div>
          <div className={styles.monoItem}>
            <div className={styles.monoIcon}><img src="/portfolio-assets/mono-3.svg" alt="Skill" loading="lazy" /></div>
            <h4 className={styles.serif}>Skill</h4>
            <p>Foundation built on solid educational principles.</p>
          </div>
          <div className={styles.monoItem}>
            <div className={styles.monoIcon}><img src="/portfolio-assets/mono-4.svg" alt="Unity" loading="lazy" /></div>
            <h4 className={styles.serif}>Unity</h4>
            <p>Bringing diverse disciplines into one hub.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgYellow}`}>
        <div className={`${styles.sysHeader} gsap-reveal`}>
          <span className={styles.eyebrow}>04. VISUAL SYSTEM</span>
          <h2 className={styles.serif}>Clarity in <span className={styles.italic}>every form.</span></h2>
        </div>
        
        <div className={`${styles.threeColGrid} gsap-stagger`}>
          <div className={`${styles.sysCard} ${styles.sysCardCream}`}>
            <div className={styles.sysVisual}>
              <img src="/portfolio-assets/new-logo-gold.svg" alt="Unified Geometry" loading="lazy" />
            </div>
            <h4 className={styles.serif}>Unified geometry</h4>
            <p className={styles.textMuted}>Built on a strict grid for perfect scalability.</p>
          </div>
          
          <div className={`${styles.sysCard} ${styles.sysCardWhite}`}>
            <div className={styles.sysVisual} style={{ paddingBottom: '20px' }}>
              <div className={styles.colorGrid}>
                <div style={{ background: '#dfa724' }}></div>
                <div style={{ background: '#0b4a26' }}></div>
                <div style={{ background: '#1d4ed8' }}></div>
                <div style={{ background: '#0f1626' }}></div>
              </div>
            </div>
            <h4 className={styles.serif}>Vibrant palette</h4>
            <p className={styles.textMuted}>Academic greens paired with digital brights.</p>
          </div>
          
          <div className={`${styles.sysCard} ${styles.sysCardNavy}`}>
            <div className={styles.sysVisual}>
              <span className={`${styles.sysTypography} ${styles.serif}`}>Aa</span>
            </div>
            <h4 className={styles.serif}>Contemporary type</h4>
            <p className={styles.textMuted}>Instrument Serif meets crisp geometric sans.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgBlack}`}>
        <div className={`${styles.bentoHeader} gsap-reveal`}>
          <div>
            <span className={styles.eyebrow}>05. MOCKUPS</span>
            <h2 className={styles.serif}>Built to live<br/><span className={styles.italic}>everywhere.</span></h2>
          </div>
          <p>From digital interfaces to physical campus environments, the system scales flawlessly.</p>
        </div>
        
        <div className={`${styles.bentoGrid} gsap-stagger`}>
          <div className={`${styles.bentoItem} ${styles.bentoTop}`}><img src="/portfolio-assets/bento-1.png" alt="Mockup 1" loading="lazy" /></div>
          <div className={`${styles.bentoItem} ${styles.bentoTop}`}><img src="/portfolio-assets/bento-2.png" alt="Mockup 2" loading="lazy" /></div>
          <div className={`${styles.bentoItem} ${styles.bentoTop}`}><img src="/portfolio-assets/bento-3.png" alt="Mockup 3" loading="lazy" /></div>
          <div className={`${styles.bentoItem} ${styles.bentoTop}`}><img src="/portfolio-assets/bento-4.png" alt="Mockup 4" loading="lazy" /></div>
          <div className={`${styles.bentoItem} ${styles.bentoBottom}`}><img src="/portfolio-assets/bento-5.png" alt="Mockup 5" loading="lazy" /></div>
          <div className={`${styles.bentoItem} ${styles.bentoBottom}`}><img src="/portfolio-assets/bento-6.png" alt="Mockup 6" loading="lazy" /></div>
        </div>
      </section>

      <section className={`${styles.bgFooter} ${styles.outcomeGrid}`}>
        <div className={`${styles.outcomeGraphic} gsap-reveal`}>
          <img src="/portfolio-assets/footer-graphic.svg" alt="Concentric Graphic" loading="lazy" />
        </div>
        <div className={`${styles.outcomeText} gsap-reveal`}>
          <span className={styles.eyebrow}>06. THE OUTCOME</span>
          <h2 className={styles.serif}>Rooted in purpose.<br/><span className={styles.italic}>Ready for tomorrow.</span></h2>
          <p>
            The new identity successfully modernized the institution, increasing digital engagement by 40% in the first quarter and unifying the campus aesthetic under one powerful symbol.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogoProjectOne;