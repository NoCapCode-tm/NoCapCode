import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../CSS/ServicePage.module.css";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowWidth from "./usewindowwidth";
import Footer from "./Footer";
import {
  Code2,
  Layers,
  BarChart2,
  Puzzle,
  Search,
  Settings2,
  Globe,
  TrendingUp,
  Zap,
  ShieldCheck,
  HeadphonesIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <Code2 size={22} />,
    title: "Custom Tools Development",
    desc: "We build tailored software that replaces manual work and fragmented systems with tools that are easier to use, manage, and scale.",
  },
  {
    icon: <Zap size={22} />,
    title: "Workflow Automation",
    desc: "We automate repetitive work and disconnected systems, helping teams work with fewer breakdowns and less manual effort.",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Data & Analytics Tools",
    desc: "We create dashboards, reporting systems, and analytics tools that help businesses understand performance, monitor activity, and make better decisions.",
  },
  {
    icon: <Puzzle size={22} />,
    title: "Multi-Platform Solution",
    desc: "We develop connected systems across digital environments, helping products and operations stay aligned through growth.",
  },
];

const seoFeatures = [
  { icon: <Search size={22} />, title: "SEO Tagging" },
  { icon: <Settings2 size={22} />, title: "Indexing Setup" },
  { icon: <BarChart2 size={22} />, title: "Analytics Integration" },
  { icon: <Globe size={22} />, title: "Google Tag" },
  { icon: <Layers size={22} />, title: "Technical Architecture" },
  { icon: <Zap size={22} />, title: "Performance Optimization" },
];

const whyUs = [
  {
    title: "Premium UI/UX",
    desc: "We design clean and intuitive interfaces",
  },
  {
    title: "Tailored solutions",
    desc: "We give solutions aligned to specific business needs",
  },
  {
    title: "Reliable support",
    desc: "We provide support for maintenance, upgrades and continuity",
  },
];

const seedSpacePerks = ["Limited slots", "Selective onboarding", "Longterm growth"];

export default function ServicePage() {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null);
  const startRef = useRef(null);
  const width = useWindowWidth();
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: startRef.current,
        start: "top top",
        toggleActions: "play play play reverse",
      },
    });

    const isMobile = width <= 800;

    tl.to(navbarRef.current, {
      width: isMobile ? "50%" : 440,
      borderRadius: "8px",
      top: "10px",
      justifyContent: "flex-end",
      gap: "20px",
      duration: 0.45,
      ease: "power2.out",
    });

    tl.to(logRef.current, { opacity: 0, display: "none", x: -24, duration: 0.25, ease: "power2.out" }, "<");
    tl.to(btnTextRef.current, { opacity: 0, width: 0, marginRight: 0, duration: 0.25, ease: "power2.out" }, "<");
    tl.to(btnIconRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.6)" }, "<");
  }, []);

  return (
    <>
      

      <div className={styles.page} ref={startRef}>
        <Navbar ref={navbarRef} logoRef={logRef} btnTextRef={btnTextRef} btnIconRef={btnIconRef} />

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGlowBottom} />
          <div className={styles.heroContent}>
            <h1>
              We build software and systems for<br />
              teams that value clarity and reliability.
            </h1>
            <p>
              NoCapCode helps businesses build scalable software, custom tools, workflow systems, and
              websites that are stable, accessible, and designed to support real operations.
            </p>
            <button className={styles.heroCta} onClick={() => navigate("/contact")}>
              Explore our services →
            </button>
          </div>
        </section>

        {/* ── OUR SERVICES ── */}
        <section className={styles.section}>
          <span className={styles.sectionBadge}>Our services</span>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div className={styles.serviceCard} key={i}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <button className={styles.outlineBtn} onClick={() => navigate("/contact")}>
            Get a free audit
          </button>
        </section>

        {/* ── SEO / PLATFORMS ── */}
        <section className={styles.seoSection}>
          <span className={styles.sectionBadge}>Website creation</span>
          <h2 className={styles.sectionTitle}>
            Platforms Designed for Visibility, Performance,<br />and Structure
          </h2>
          <p className={styles.sectionSub}>
            Every website includes SEO, indexing, analytics, Google Tag , technical architecture, and
            performance optimization — built to be discovered, measured, and scaled over time.
          </p>
          <div className={styles.seoGrid}>
            {seoFeatures.map((f, i) => (
              <div className={styles.seoItem} key={i}>
                <div className={styles.seoIcon}>{f.icon}</div>
                <span>{f.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className={styles.whySection}>
          <span className={styles.sectionBadge} style={{textAlign: "center", marginBottom: "28px" }}>Why choose us</span>
          <div className={styles.whyGrid}>
            {/* Top row: blue card + scalable systems */}
            <div className={styles.whyTopRow}>
              <div className={styles.whyBlueCard}>
                <h2>Why choose us?</h2>
              </div>
              <div className={styles.whyDarkCard}>
                <h4>Scalable Systems</h4>
                <p>We build systems to grow with the organization</p>
              </div>
            </div>
            {/* Bottom row: 3 equal cards */}
            <div className={styles.whyBottomRow}>
              {whyUs.map((w, i) => (
                <div className={styles.whyDarkCard} key={i}>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GUIDELINES / SEEDSPACE INTRO ── */}
        <section className={styles.guidelinesSection}>
          <div className={styles.guidelinesGlow} />
          <div className={styles.guidelinesContent}>
            <span className={styles.sectionBadge}>Guidelines</span>
            <h2 className={styles.guidelinesTitle}>
              We launched SeedSpace™, a selective program<br />
              that supports start-ups and founders.
            </h2>
            <p className={styles.guidelinesSub}>
              We help you build the right foundation, create a strong online presence, and support them with<br />
              the digital systems they need to grow with clarity and direction.
            </p>
          </div>
        </section>

        {/* ── SEEDSPACE DETAIL CARD ── */}
        <section className={styles.seedSection}>
          <div className={styles.seedTopBadgeRow}>
            <span className={styles.seedTopBadge}>SeedSpace™</span>
          </div>
          <div className={styles.seedContent}>
            <p className={styles.seedLabel}>SeedSpace™</p>
            <h2>A selective, limited strategic growth and<br />infrastructure initiative program</h2>
            <p className={styles.seedDesc}>
              SeedSpace™ is a selective program built for start-ups and early-stage founders who want to
              establish a strong digital presence, modernize their online systems, and grow with ongoing
              support.
            </p>
            <div className={styles.seedPerks}>
              {seedSpacePerks.map((perk, i) => (
                <span className={styles.seedPerk} key={i}>{perk}</span>
              ))}
            </div>
            <button className={styles.seedCta} onClick={() => navigate("/contact")}>
              Enrol in SeedSpace™
            </button>
          </div>
          {/* left + right side glows */}
          <div className={styles.seedGlowLeft} />
          <div className={styles.seedGlowRight} />
        </section>
      </div>

      <Footer />
    </>
  );
}
