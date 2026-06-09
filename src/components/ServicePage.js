import React, { useRef } from "react";
import styles from "../CSS/ServicePage.module.css";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";  // By Om
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

// Dedicated FAQs for the Services Page
const serviceFaqs = [
  {
    q: "What types of custom tools do you build?",
    a: "We engineer everything from internal administrative dashboards and client portals to comprehensive SaaS platforms and complex data-processing applications."
  },
  {
    q: "How does your workflow automation service work?",
    a: "We audit your current manual processes, identify bottlenecks, and integrate APIs, AI-driven logic, and custom scripts to automate data entry, communication, and task management."
  },
  {
    q: "Who is the SeedSpace™ program designed for?",
    a: "SeedSpace™ is tailored for early-stage startups and non-technical founders who need elite technical infrastructure, strategic guidance, and scalable MVP development without the overhead of an in-house engineering team."
  },
  {
    q: "Do you handle the technical SEO and analytics setup?",
    a: "Yes. Every web platform we build includes robust technical SEO foundations, pre-configured analytics integration, optimized server-side rendering, and performance tuning for maximum discoverability."
  },
  {
    q: "Do you provide long-term maintenance after launch?",
    a: "Absolutely. We view software as a living system. We offer continuous technical support, security auditing, and iterative refactoring to ensure your product scales reliably."
  }
];

export default function ServicePage() {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null);
  const startRef = useRef(null);
  const width = useWindowWidth();
  const navigate = useNavigate();

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Services | Custom Software, AI & Automation | NoCapCode™</title>
        <meta 
          name="description" 
          content="NoCapCode provides elite custom software engineering, AI workflow automation, SaaS MVP development, and technical SEO architecture for modern businesses and startups." 
        />
        <meta 
          name="keywords" 
          content="Custom Software Development, Workflow Automation, SaaS Development, MVP, SeedSpace, API Integration, Technical SEO" 
        />
        <link rel="canonical" href="https://nocapcode.cloud/services" />
        
        {/* Inject FAQ Schema for Rich Snippets in Google Search */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

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
          <span className={styles.sectionBadge}>Our Services</span>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div className={styles.serviceCard} key={i}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
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
