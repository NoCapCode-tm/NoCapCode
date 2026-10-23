import React, { useRef, useState } from "react";
import styles from "../CSS/Portfolio.module.css";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SEO from "./SEO";

const projects = [
  {
    category: "Website Design",
    to: "/portfolio/website-design/kalin-construction/",
    title: "Kalin Construction",
    subtitle: "Crafting Confidence: Luxury Remodel Website Redesign",
    image: "/portfolio-assets/kalin-after.png",
    alt: "Kalin Construction website redesign",
    imgStyle: { objectFit: "cover" },
  },
  {
    category: "Logo Redesign",
    to: "/portfolio/logo-redesign/symbol-of-identity/",
    title: "Symbol of Identity",
    subtitle: "Brand Architecture & Visual Identity",
    image: "/portfolio-assets/new-logo-gold.svg",
    alt: "Symbol of Identity",
    imgStyle: { backgroundColor: "#101c13", objectFit: "contain", padding: "40px" },
  },
  {
    category: "Logo Redesign",
    to: "/portfolio/logo-redesign/axon-human-connection/",
    title: "AXON",
    subtitle: "A Smarter Human Connection",
    image: "/portfolio-assets/axon-new-logo-glow.png",
    alt: "AXON Human Connection",
    imgStyle: { backgroundColor: "#050505", objectFit: "contain", padding: "60px" },
  },
];

const tabs = ["Website Design", "Logo Redesign"];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Website Design");

  useGSAP(() => {
    gsap.fromTo(
      "." + styles.caseCard,
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
        <h1 className={styles.heading}>
          Our <span>Selected</span> Works
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 24px",
                borderRadius: "30px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: activeTab === tab ? "#3225bf" : "transparent",
                color: "white",
                cursor: "pointer",
                fontFamily: '"Outfit", sans-serif',
                transition: "all 0.3s ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {/* All links stay in the DOM so crawlers discover every project */}
          {projects.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={styles.caseCard}
              style={{
                textDecoration: "none",
                display: activeTab === p.category ? "block" : "none",
              }}
            >
              <div className={styles.caseImage}>
                <img src={p.image} alt={p.alt} style={p.imgStyle} />
                <span className={styles.caseArrow}>
                  <span className={styles.arrowOut}>↗</span>
                  <span className={styles.arrowIn}>↗</span>
                </span>
              </div>
              <div className={styles.caseContent}>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;