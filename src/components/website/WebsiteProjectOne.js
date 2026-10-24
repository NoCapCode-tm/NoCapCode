import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from '../../CSS/WebsiteProjectOne.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEO from "../SEO";

gsap.registerPlugin(ScrollTrigger);

// Figma interactive prototype (embed + direct link)
const FIGMA_PARAMS =
  "node-id=1-74&t=UGvz545LGMhiP15m-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1";

const FIGMA_OPEN_URL =
  `https://www.figma.com/proto/7iOT0EHpGbwiZm0yS4Nn6y/Untitled?${FIGMA_PARAMS}`;

const FIGMA_EMBED_URL =
  `https://embed.figma.com/proto/7iOT0EHpGbwiZm0yS4Nn6y/Untitled?${FIGMA_PARAMS}&embed-host=share`;

// FIXED: Matches the actual route in App.js and Portfolio.js so 0 broken/404 canonicals occur
const URL = "https://nocapcode.cloud/portfolio/website-design/medvitals-ai-triage/";

const intentRows = [
  { n: "01", label: "TONE", word: "Warm", text: "A composed, trustworthy voice that feels personal without becoming informal." },
  { n: "02", label: "VISUAL LANGUAGE", word: "Immersive", text: "Large project imagery and generous space allow the craftsmanship to lead." },
  { n: "03", label: "COLOR", word: "Grounded", text: "Earthy neutrals and confident burgundy evoke permanence and reliability." },
  { n: "04", label: "STRUCTURE", word: "Clear", text: "Services, expertise, and a trusted legacy are organized into an effortless journey." },
];

const badges = [
  { src: "/portfolio-assets/kalin-badge-1.png", alt: "Gold Point Award" },
  { src: "/portfolio-assets/kalin-badge-2.png", alt: "BBB Accredited Business" },
  { src: "/portfolio-assets/kalin-badge-3.png", alt: "Lead Safe Certified" },
  { src: "/portfolio-assets/kalin-badge-4.png", alt: "Local University Partner" },
  { src: "/portfolio-assets/kalin-badge-5.png", alt: "Community Partner" },
];

const WebsiteProjectOne = () => {
  const containerRef = useRef(null);
  const isReactSnap = typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap';

  useGSAP(() => {
    gsap.utils.toArray('.gsap-reveal').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        }
      );
    });

    gsap.utils.toArray('.gsap-stagger').forEach((grid) => {
      gsap.fromTo(grid.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 85%" }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <SEO
        title="Crafting Confidence | Website Redesign | NoCapCode"
        description="A website redesign for Kalin Construction that turns decades of craftsmanship into a warm, clear, and immersive digital experience."
        canonicalUrl={URL}
        image="https://nocapcode.cloud/portfolio-assets/kalin-after.png"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
                "headline": "Crafting Confidence - Website Redesign",
                "name": "Crafting Confidence - Website Redesign",
                "description": "Website redesign for a luxury home remodeling company, focused on clarity, immersive imagery, and trust.",
                "image": "https://nocapcode.cloud/portfolio-assets/kalin-after.png",
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
                "url": URL
              },
              {
                "@type": "Product",
                "name": "Enterprise Website Redesign & UI/UX Architecture",
                "description": "Custom web platform design, UI/UX engineering, and interactive prototyping by NoCapCode.",
                "image": "https://nocapcode.cloud/portfolio-assets/kalin-after.png",
                "brand": { "@type": "Brand", "name": "NoCapCode" },
                "offers": {
                  "@type": "Offer",
                  "url": URL,
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

      {/* HERO → CHALLENGE → INTENT (crimson to black gradient) */}
      <div className={styles.topGroup}>
        <section className={`${styles.section} ${styles.hero}`}>
          <span className={`${styles.eyebrowSmall} gsap-reveal`}>WEBSITE REDESIGN CASE STUDY</span>
          <h1 className={`${styles.heroTitle} gsap-reveal`}>
            Crafting<br />confidence<span className={styles.dotAccent}>.</span>
          </h1>
          <p className={`${styles.heroLead} gsap-reveal`}>
            Reframing six decades of craft through a warmer, clearer, and more immersive digital experience.
          </p>
          <div className={`${styles.heroTags} gsap-reveal`}>
            <span>DIGITAL EXPERIENCE</span>
            <span>WEBSITE DESIGN</span>
          </div>
          <a href="#goal" className={`${styles.heroLink} gsap-reveal`}>Explore the identity ↓</a>
        </section>

        <section id="goal" className={styles.section}>
          <span className={`${styles.eyebrow} gsap-reveal`}>01&nbsp;&nbsp;THE GOAL</span>
          <div className={`${styles.splitGrid} gsap-reveal`}>
            <h2 className={styles.heading}>
              Build a digital home for <span className={styles.italic}>exceptional craftsmanship.</span>
            </h2>
            <div className={styles.copy}>
              <span className={styles.copyLabel}>LUXURY HOME REMODELS, EXPRESSED WITH CLARITY.</span>
              <p>
                Redesigned the website to reflect Kalin's expertise in luxury home structure and emotional connection. Limited hierarchy and an inconsistent photo flow made an accomplished portfolio feel dated.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <span className={`${styles.eyebrow} gsap-reveal`}>02&nbsp;&nbsp;THE CHALLENGE</span>
          <div className={`${styles.splitGrid} gsap-reveal`}>
            <h2 className={styles.heading}>
              Craft was visible. <span className={styles.italic}>The story wasn't.</span>
            </h2>
            <div className={styles.copy}>
              <p>
                Kalin's previous website showcased the work but lacked modern structure, visual hierarchy and a consistent flow that matched the quality of the accomplished portfolio.
              </p>
            </div>
          </div>

          <div className={`${styles.compare} gsap-stagger`}>
            <figure className={styles.beforeFrame}>
              <div className={styles.browserBar}><i /><i /><i /><em>BEFORE · PREVIOUS WEBSITE</em></div>
              <img src="/portfolio-assets/kalin-before.png" alt="Kalin Construction previous website" loading="lazy" />
            </figure>
            <figure className={styles.afterFrame}>
              <div className={styles.browserBar}><i /><i /><i /><em>AFTER · REDESIGNED WEBSITE</em></div>
              <img src="/portfolio-assets/kalin-after.png" alt="Kalin Construction redesigned website" loading="lazy" />
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <span className={`${styles.eyebrow} gsap-reveal`}>03&nbsp;&nbsp;DESIGN INTENT</span>
          <div className={`${styles.splitGrid} gsap-reveal`}>
            <h2 className={styles.heading}>
              Precision, <span className={styles.italic}>with warmth.</span>
            </h2>
            <div className={styles.copy}>
              <p>
                Minimalist but never sterile. The system blends architectural precision with emotional storytelling: light, space and the personality of every project.
              </p>
            </div>
          </div>

          <ul className={`${styles.intentList} gsap-stagger`}>
            {intentRows.map((r) => (
              <li key={r.n} className={styles.intentRow}>
                <span className={styles.intentNum}>{r.n}</span>
                <span className={styles.intentLabel}>{r.label}</span>
                <span className={styles.intentWord}>{r.word}</span>
                <span className={styles.intentText}>{r.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* 04 VISUAL DESIGN */}
      <section className={`${styles.section} ${styles.bgCrimson}`}>
        <span className={`${styles.eyebrow} gsap-reveal`}>04&nbsp;&nbsp;VISUAL DESIGN</span>
        <div className={`${styles.splitGrid} gsap-reveal`}>
          <h2 className={styles.heading}>
            Let the work <span className={styles.italic}>speak.</span>
          </h2>
          <div className={styles.copy}>
            <p>Photography moves from supporting detail to the heart of the experience, revealing material, light, and the personality of every space.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.gallery} gsap-stagger`}>
        <div className={styles.galleryMain}>
          <img src="/portfolio-assets/kalin-gallery-1.png" alt="Luxury living room remodel" loading="lazy" />
          <span className={styles.galleryCap}>LIVING · Modern luxury living room</span>
        </div>
        <div className={styles.galleryTop}>
          <img src="/portfolio-assets/kalin-gallery-2.png" alt="Custom bathroom remodel" loading="lazy" />
          <span className={styles.galleryCap}>BATH · Bold character in detail</span>
        </div>
        <div className={styles.galleryBottom}>
          <img src="/portfolio-assets/kalin-gallery-3.png" alt="Primary suite remodel" loading="lazy" />
          <span className={styles.galleryCap}>SUITE · Comfort, elevated</span>
        </div>
      </section>

      {/* DIGITAL EXPERIENCE */}
      <section className={`${styles.section} ${styles.experience}`}>
        <div className={`${styles.expText} gsap-reveal`}>
          <span className={styles.eyebrowSmall}>THE DIGITAL EXPERIENCE</span>
          <h2 className={styles.headingLg}>
            Designed like a well-considered <span className={styles.italic}>space.</span>
          </h2>
          <p>Clear pathways guide visitors from inspiration to expertise. Generous spacing creates calm, while full-bleed imagery builds confidence before a single conversation begins.</p>
          <ul className={styles.expList}>
            <li>01 / SERVICES</li>
            <li>02 / EXPERTISE</li>
            <li>03 / LEGACY</li>
          </ul>
        </div>
        <div className={`${styles.expVisual} gsap-reveal`}>
          <img src="/portfolio-assets/kalin-experience.png" alt="Kalin homepage hero design" loading="lazy" />
        </div>
      </section>

      {/* FULL DESIGN (scrollable) */}
      <section className={styles.fullDesign}>
        <div className={styles.figmaHead}>
          <span className={styles.eyebrowSmall}>INTERACTIVE PROTOTYPE</span>
          <a href={FIGMA_OPEN_URL} target="_blank" rel="noopener noreferrer" className={styles.figmaOpen}>
            Open in Figma ↗
          </a>
        </div>
        <div className={styles.figmaFrame}>
          {!isReactSnap && (
            <iframe
              title="Kalin Construction full website design - interactive Figma prototype"
              src={FIGMA_EMBED_URL}
              loading="lazy"
              allowFullScreen
            />
          )}
        </div>
      </section>

      {/* STRUCTURE & PRECISION */}
      <section className={`${styles.structure} gsap-reveal`}>
        <div>
          <span className={styles.eyebrowAccent}>STRUCTURE &amp; PRECISION</span>
          <h2 className={styles.headingMd}>
            Every detail has a <span className={styles.italic}>reason.</span>
          </h2>
        </div>
        <p className={styles.structureText}>The page system follows the same discipline as the build itself: clear foundations, thoughtful proportion, and details that serve the whole.</p>
        <div className={styles.swatches}>
          <i style={{ background: '#a8203d' }} />
          <i style={{ background: '#7d1228' }} />
          <i style={{ background: '#d9cdbd' }} />
          <i style={{ background: '#f1ebe2' }} />
        </div>
      </section>

      {/* LEGACY */}
      <section className={`${styles.section} ${styles.legacy}`}>
        <div className={`${styles.since} gsap-reveal`}>
          <small>Since</small>
          <strong>1959</strong>
        </div>
        <div className={`${styles.legacyText} gsap-reveal`}>
          <span className={styles.eyebrowSmall}>A LEGACY OF CONFIDENCE</span>
          <h2 className={styles.headingLg}>Modern presence. Decades of trust.</h2>
          <p>The redesign does not replace Kalin's history. It gives that history room to resonate with a new generation of homeowners.</p>
        </div>
      </section>

      <section className={`${styles.badges} gsap-stagger`}>
        {badges.map((b) => (
          <img key={b.alt} src={b.src} alt={b.alt} loading="lazy" />
        ))}
      </section>

      {/* 05 OUTCOME */}
      <section className={styles.outcome}>
        <div className={`${styles.outcomeImg} gsap-reveal`}>
          <img src="/portfolio-assets/kalin-outcome.png" alt="Completed Kalin Construction home exterior" loading="lazy" />
        </div>
        <div className={`${styles.outcomeText} gsap-reveal`}>
          <span className={styles.eyebrowSmall}>05&nbsp;&nbsp;THE OUTCOME</span>
          <h2 className={styles.headingLg}>
            Clarity that builds <span className={styles.italic}>confidence.</span>
          </h2>
          <p>The redesigned site positions Kalin Construction as a modern luxury contractor with decades of trust. It communicates clarity, craftsmanship, and confidence, helping visitors connect with the promise of effortless remodeling.</p>
          <div className={styles.stats}>
            <div><b>65+</b><span>YEARS OF TRUST</span></div>
            <div><b>01</b><span>CONTINUOUS JOURNEY</span></div>
            <div><b>∞</b><span>LASTING TRANSFORMATIONS</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteProjectOne;