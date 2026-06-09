import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../CSS/Privacy.module.css"; // Reusing your Privacy/Condition CSS structure
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./Navbar";
import useWindowWidth from "./usewindowwidth";
import Footer from './Footer';

const Security = () => {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null);
  const startRef = useRef(null);
  const width = useWindowWidth();

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
      borderRadius: isMobile ? "8px" : "8px",
      top: isMobile ? "10px" : "10px",
      justifyContent: "flex-end",
      gap: "20px",
      duration: 0.45,
      ease: "power2.out",
    });
  
    // logo fade + slide
    tl.to(
      logRef.current,
      {
        opacity: 0,
        display: "none",
        x: -24,
        duration: 0.25,
        ease: "power2.out",
      },
      "<"
    );
  
    // button text out
    tl.to(
      btnTextRef.current,
      {
        opacity: 0,
        width: 0,
        marginRight: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      "<"
    );
  
    // arrow pop in
    tl.to(
      btnIconRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.6)",
      },
      "<"
    );
  }, [width]);

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Trust & Security | Enterprise-Grade Architecture by NoCapCode</title>
        <meta
          name="description"
          content="Learn about NoCapCode's enterprise-grade security model, ISO-aligned infrastructure, data encryption standards, and secure development lifecycle."
        />
        <meta
          name="keywords"
          content="software security, ISO 27001 software development, secure cloud infrastructure, SOC 2 readiness, SaaS data privacy, secure software development lifecycle"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nocapcode.cloud/security" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trust & Security | NoCapCode" />
        <meta
          property="og:description"
          content="Enterprise-grade security, engineered into every line of code. Read our infrastructure, encryption, and compliance guidelines."
        />
        <meta property="og:url" content="https://nocapcode.cloud/security" />
        <meta property="og:image" content="https://nocapcode.cloud/internal/og-cover.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trust & Security | NoCapCode" />
        <meta
          name="twitter:description"
          content="Enterprise-grade security, engineered into every line of code. ISO-aligned frameworks, data encryption, and secure cloud infrastructure."
        />
        <meta name="twitter:image" content="https://nocapcode.cloud/internal/og-cover.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Trust & Security | NoCapCode",
            url: "https://nocapcode.cloud/security",
            description: "NoCapCode Trust & Security guidelines covering ISO compliance, data encryption, access control, and operational resilience.",
            publisher: {
              "@type": "Organization",
              name: "NoCapCode",
              url: "https://nocapcode.cloud/",
            },
          })}
        </script>
      </Helmet>

      <section className={styles.wrap}>
        <Navbar
          ref={navbarRef}
          logoRef={logRef}
          btnTextRef={btnTextRef}
          btnIconRef={btnIconRef}
        />
        
        {/* Ghost background heading */}
        <h1 className={`${styles.ghost} ${styles.gradienttext}`}>
          Trust & Security
        </h1>

        <div className={styles.container}>
          <header className={styles.header}>
            <h2>Trust & Security Guidelines</h2>
            <span className={styles.updated}>Last updated: 12/12/2025</span>
          </header>

          <p className={styles.intro} ref={startRef}>
            At NoCapCode, we treat your infrastructure, intellectual property, and user data with the highest level of uncompromising rigor.
            <br />
            We build scalable, resilient architecture designed to protect your business and your reputation from day one, aligned with the world's most stringent security frameworks.
          </p>

          <section className={styles.block}>
            <h3>1. Information Security Management</h3>
            <p>
              <strong>Security isn't just about code; it's about how a company operates. We approach risk management systematically to ensure your intellectual property is never compromised.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> NoCapCode establishes and maintains its operational workflows in strict alignment with the information security management principles of the ISO/IEC 27001 framework. We conduct mandatory thread modeling, strict risk assessments, and vulnerability management across all design and architectural planning phases before development begins.
            </p>
          </section>

          <section className={styles.block}>
            <h3>2. Secure Cloud Infrastructure</h3>
            <p>
              <strong>We build on hardened, isolated cloud environments. Your application infrastructure is decoupled, secured, and shielded from external threats.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> In accordance with ISO/IEC 27017 guidelines for cloud service security, all production systems engineered by NoCapCode are deployed exclusively within premier, enterprise-grade public clouds (such as AWS, Google Cloud, or Azure). Compute nodes and production clusters are isolated inside private Virtual Private Clouds (VPCs) utilizing strict Identity and Access Management (IAM) configurations.
            </p>
          </section>

          <section className={styles.block}>
            <h3>3. Data Encryption Standards</h3>
            <p>
              <strong>Your data is locked down everywhere. We use industry-standard cryptographic keys to protect information while it's stored and while it's moving.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> To protect data integrity, all information assets are encrypted both at rest and in transit. Data at rest within production databases, backups, and cloud object storage is encrypted using advanced cryptographic standards, specifically AES-256. Data in transit across public networks is strictly enforced using transport layer protection with TLS 1.2 or TLS 1.3 protocols.
            </p>
          </section>

          <section className={styles.block}>
            <h3>4. Identity & Access Control</h3>
            <p>
              <strong>We enforce zero-trust security across our team and yours. Nobody gets access to master files or codebases unless it's strictly necessary for their role.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> Operational security at NoCapCode enforces a strict "Least Privilege" access model. Production environments, continuous deployment engines, and underlying repository networks are walled off behind strict multi-factor authentication (MFA) and enterprise Single Sign-On (SSO). Master database credentials and administrative tokens are strictly rotational and monitored under immutable session logs.
            </p>
          </section>

          <section className={styles.block}>
            <h3>5. Secure Development Lifecycle (SDLC)</h3>
            <p>
              <strong>We do not ship code blindly. Security is a continuous, automated process embedded directly into our deployment pipeline.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> Our software engineering pipeline adheres to an automated Secure Software Development Lifecycle. Continuous Integration (CI) runners parse code on every single commit, automatically carrying out static application security testing (SAST), checking dependencies against public Common Vulnerabilities and Exposures (CVE) databases, and blocking commits with leaked secrets. All software requires mandatory peer review and branch protection authorization before merging to production.
            </p>
          </section>

          <section className={styles.block}>
            <h3>6. Global Privacy & Data Sovereignty</h3>
            <p>
              <strong>Engineered to protect Personally Identifiable Information (PII) globally. We build compliant data flows that scale seamlessly across international lines.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> NoCapCode aligns data structures with the privacy protections established by the ISO/IEC 28018 standard for protecting PII in public clouds. Our architectures are natively structured to enable absolute client compliance under global regulatory frameworks, explicitly including the General Data Protection Regulation (GDPR in the EU) and the California Consumer Privacy Act (CCPA in the US).
            </p>
          </section>

          <section className={styles.block}>
            <h3>7. Data Minimization & Rights Execution</h3>
            <p>
              <strong>We believe the most secure data is the data you don’t needlessly collect. We build systems that make privacy rights fast and automatic to execute.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> We advocate for absolute data minimization principles across all database schemas. Systems engineered by NoCapCode are designed with programmatic hooks and execution scripts allowing data controllers to execute data portability, localized data residency constraints, and complete user erasure protocols ("Right to be Forgotten") instantly and permanently without database schema corruption.
            </p>
          </section>

          <section className={styles.block}>
            <h3>8. External Systems & Third-Party Vendors</h3>
            <p>
              <strong>When your platform integrates with external APIs, tools, or dependencies, we screen them for corporate risk and security alignment.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> Modern platforms rely heavily on microservices and third-party integrations (such as Stripe, Auth0, or Twilio). NoCapCode systematically evaluates the vendor compliance postures (requiring valid SOC 2 Type II or ISO certification credentials) of any structural dependency we integrate into your systems to prevent supply-chain vulnerabilities.
            </p>
          </section>

          <section className={styles.block}>
            <h3>9. Operational Resilience & Business Continuity</h3>
            <p>
              <strong>We engineer architectures with zero single points of failure. If an unexpected server goes down, your system stays up.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> All database deployments are configured natively with point-in-time recovery (PITR), multi-region hot-standby replication, and automated, encrypted daily backup routines. Our Infrastructure-as-Code (IaC) templates allow for near-zero Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) in disaster recovery scenarios.
            </p>
          </section>

          <section className={styles.block}>
            <h3>10. Technical Vetting & Vouching</h3>
            <p>
              <strong>Your security is a shared responsibility. We are fully prepared to pass your team's compliance reviews, procurement checks, or security screenings.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> NoCapCode stands behind its technical architecture. If your internal compliance officers, enterprise IT procurement teams, or external auditors require exhaustive technical architecture diagrams, deep network maps, or detailed answers to standardized vendor security questionnaires (VSQs), our engineering team provides comprehensive disclosure to expedite corporate onboarding.
            </p>
          </section>

          <section className={styles.block}>
            <p className={styles.closing}>
              Note:
              <br />
              Trust isn’t built on promises; it’s proven through infrastructure.
              <br />
              We believe elite software must be as secure as it is functional—built with restraint, responsibility, and long-term resilience.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Security;