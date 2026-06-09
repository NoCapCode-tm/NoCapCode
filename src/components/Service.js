import React, { useRef, useMemo } from "react"; // 1. Added useRef and useMemo here
import styles from "../CSS/Service.module.css";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import {
  TerminalSquare,
  Repeat,
  PieChart,
  GitPullRequest,
  Tag,
  TextSearch,
  Database,
  BarChart2,
  Share2,
  Zap,
  ArrowUpRight
} from "lucide-react";

// ... [services, seoFeatures, whyUsBottom, serviceFaqs constants remain the same] ...

const services = [
  { icon: <TerminalSquare size={24} strokeWidth={1.5} />, title: "Custom Tools Development", desc: "We build tailored software that replaces manual work and fragmented systems with tools that are easier to use, manage, and scale." },
  { icon: <Repeat size={24} strokeWidth={1.5} />, title: "Workflow Automation", desc: "We automate repetitive work and disconnected systems, helping teams work with fewer breakdowns and less manual effort." },
  { icon: <PieChart size={24} strokeWidth={1.5} />, title: "Data & Analytics Tools", desc: "We create dashboards, reporting systems, and analytics tools that help businesses understand performance, monitor activity, and make better decisions." },
  { icon: <GitPullRequest size={24} strokeWidth={1.5} />, title: "Multi-Platform Solution", desc: "We develop connected systems across digital environments, helping products and operations stay aligned through growth." },
];

const seoFeatures = [
  { icon: <TextSearch size={22} strokeWidth={1.5} />, title: "SEO Tagging" },
  { icon: <Database size={22} strokeWidth={1.5} />, title: "Indexing Setup" },
  { icon: <BarChart2 size={22} strokeWidth={1.5} />, title: "Analytics Integration" },
  { icon: <Tag size={22} strokeWidth={1.5} />, title: "Google Tag" },
  { icon: <Share2 size={22} strokeWidth={1.5} />, title: "Technical Architecture" },
  { icon: <Zap size={22} strokeWidth={1.5} />, title: "Performance Optimization" },
];

const whyUsBottom = [
  { title: "Premium UI/UX", desc: "We design clean and intuitive interfaces" },
  { title: "Tailored solutions", desc: "We give solutions aligned to specific business needs" },
  { title: "Reliable support", desc: "We provide support for maintenance, upgrades and continuity" },
];

const serviceFaqs = [
  { q: "What types of custom tools do you build?", a: "We engineer everything from internal administrative dashboards and client portals to comprehensive SaaS platforms and complex data-processing applications." },
  { q: "How does your workflow automation service work?", a: "We audit your current manual processes, identify bottlenecks, and integrate APIs, AI-driven logic, and custom scripts to automate data entry, communication, and task management." },
  { q: "Who is the SeedSpace™ program designed for?", a: "SeedSpace™ is tailored for early-stage startups and non-technical founders who need elite technical infrastructure, strategic guidance, and scalable MVP development without the overhead of an in-house engineering team." },
  { q: "Do you handle the technical SEO and analytics setup?", a: "Yes. Every web platform we build includes robust technical SEO foundations, pre-configured analytics integration, optimized server-side rendering, and performance tuning for maximum discoverability." },
  { q: "Do you provide long-term maintenance after launch?", a: "Absolutely. We view software as a living system. We offer continuous technical support, security auditing, and iterative refactoring to ensure your product scales reliably." }
];

const seedSpacePerks = ["Limited slots", "Selective onboarding", "Longterm growth"];

export default function Service() {
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  // 2. Moved useMemo INSIDE the component
  const faqSchemaData = useMemo(() => ({
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
  }), []);

  return (
    <div className={styles.page}>
      <Navbar />
      <Helmet>
        <title>Services | Custom Software, AI & Automation | NoCapCode™</title>
        <meta 
          name="description" 
          content="NoCapCode provides elite custom software engineering, AI workflow automation, SaaS MVP development, and technical SEO architecture for modern businesses and startups." 
        />
        <meta name="keywords" content="Custom Software Development, Workflow Automation, SaaS Development, MVP, SeedSpace, API Integration, Technical SEO" />
        <link rel="canonical" href="https://nocapcode.cloud/services" />
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
      </Helmet>

    {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <h1>We build software and systems for<br /> teams that value clarity and reliability.</h1>
          <p>NoCapCode helps businesses build usable software, custom tools, workflow systems, and websites that are stable, scalable, and designed to support real operations.</p>
          <button 
            className={styles.heroCta} 
            onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore our services <ArrowUpRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </section>

{/* ── OUR SERVICES SECTION ── */}
      <section className={styles.section} ref={servicesRef}>
        <div className={styles.centerBadge}>
           <span className={styles.sectionBadge}>Our services</span>
        </div>
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

      {/* ── WEBSITE CREATION (SEO) SECTION ── */}
      <section className={styles.seoSection}>
        <div className={styles.centerBadge}>
            <span className={styles.sectionBadge}>Website creation</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Platforms Designed for Visibility, Performance,<br />and Structure
        </h2>
        <p className={styles.sectionSub}>
          Every website includes SEO, indexing, analytics, Google Tag, technical architecture, and
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

      {/* ── WHY CHOOSE US SECTION ── */}
      <section className={styles.whySection}>
        <div className={styles.centerBadge}>
            <span className={styles.sectionBadge}>Why choose us</span>
        </div>
        
        <div className={styles.whyGrid}>
          {/* Top Row: Asymmetrical */}
          <div className={styles.whyTopRow}>
            <div className={styles.whyBlueCard}>
              <h2>Why choose us?</h2>
            </div>
            <div className={styles.whyDarkCard}>
              <h4>Scalable Systems</h4>
              <p>We build systems to grow with the<br/>organization</p>
            </div>
          </div>
          
          {/* Bottom Row: 3 Equal Cards */}
          <div className={styles.whyBottomRow}>
            {whyUsBottom.map((w, i) => (
              <div className={styles.whyDarkCard} key={i}>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDELINES SECTION ── */}
      <section className={styles.guidelinesSection}>
        <div className={styles.guidelinesGlow} />
        <div className={styles.guidelinesContent}>
          <div className={styles.centerBadge}>
            <span className={styles.sectionBadge}>Guidelines</span>
          </div>
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

      {/* ── SEEDSPACE FULL-WIDTH SECTION ── */}
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
        
        {/* Decorative Side Glows */}
        <div className={styles.seedGlowLeft} />
        <div className={styles.seedGlowRight} />
      </section>

      <Footer/>
    </div>
  );
}