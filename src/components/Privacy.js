import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../CSS/Privacy.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./Navbar";
import useWindowWidth from "./usewindowwidth";
import Footer from './Footer';

const Privacy = () => {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null);
  const startRef = useRef(null);
  const width= useWindowWidth()

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
    width: isMobile ? "50%" : 440,   // 👈 fixed
    borderRadius: isMobile ? "8px" : "8px",
    top: isMobile ? "10px" : "10px",
    justifyContent:"flex-end",
    gap: "20px",
    duration: 0.45,
    ease: "power2.out",
  });
      
        // logo fade + slide
        tl.to(
          logRef.current,
          {
            opacity: 0,
            display:"none",
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
      }, []);
  // const navigate = useNavigate()
  return (
    <>

      <Helmet>
        <title>Privacy Policy | NoCapCode</title>
        <meta
          name="description"
          content="Read the NoCapCode Privacy Policy to understand how we collect, use, store, and protect information shared through our website, contact forms, and software consultation processes."
        />
        <meta
          name="keywords"
          content="NoCapCode privacy policy, data privacy, software company privacy, website privacy policy, SaaS privacy policy, AI automation company privacy"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nocapcode.cloud/privacy" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | NoCapCode" />
        <meta
          property="og:description"
          content="Understand how NoCapCode handles information, privacy, analytics, cookies, and communication responsibly."
        />
        <meta property="og:url" content="https://nocapcode.cloud/privacy" />
        <meta property="og:image" content="https://nocapcode.cloud/internal/og-cover.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | NoCapCode" />
        <meta
          name="twitter:description"
          content="Learn how NoCapCode protects and manages information shared through our website and services."
        />
        <meta name="twitter:image" content="https://nocapcode.cloud/internal/og-cover.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy | NoCapCode",
            url: "https://nocapcode.cloud/privacy",
            description: "Privacy Policy page explaining how NoCapCode collects, uses, stores, and protects user information.",
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
      {/* ghost background heading */}
      <h1 className={`${styles.ghost} ${styles.gradienttext}`}>
        Data & Privacy
      </h1>

      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Privacy Policy</h2>
          <span className={styles.updated}>Last updated: 12/12/2025</span>
        </header>

          <p className={styles.intro} ref={startRef}>
            At NoCapCode, we respect your privacy.
            <br />
            This policy explains what information we collect, why we collect it, and how we handle it. If you have questions, we encourage you to ask.
          </p>

          <section className={styles.block}>
            <h3>1. Information We Collect</h3>
            <p>
              <strong>We collect only what's necessary: your name, email address, information you share through contact forms, and basic usage data. We do not collect sensitive personal data unless you choose to share it.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> "Personal Data" refers to any information that relates to an identified or identifiable individual. In compliance with the Children’s Online Privacy Protection Act (COPPA) and international equivalents, our website and services are not intended for individuals under the age of 18. We do not knowingly collect Personal Data from minors. If you believe a minor has provided us with personal data, please contact us immediately.
            </p>
          </section>

          <section className={styles.block}>
            <h3>2. How We Use Your Information</h3>
            <p>
              <strong>We use your information to respond to your inquiries, understand what you're trying to build, and evaluate whether there's a good fit for collaboration. We don't use your data for spam, aggressive marketing, or resale.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> We process your Personal Data based on our legitimate interest in providing customer support, evaluating potential business engagements, and improving our website’s functionality. We do not engage in automated decision-making or profiling that produces legal effects concerning you.
            </p>
          </section>

          <section className={styles.block}>
            <h3>3. Forms & Communication</h3>
            <p>
              <strong>When you submit a form on our site, the information is reviewed by our team and used only for the purpose it was shared. You are not added to mass mailing lists. We communicate thoughtfully and only when relevant.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> By submitting your contact information, you consent to NoCapCode contacting you regarding your inquiry. You may opt out of any future marketing or informational communications at any time by contacting us directly.
            </p>
          </section>

          <section className={styles.block}>
            <h3>4. Cookies & Analytics</h3>
            <p>
              <strong>Our website may use basic cookies or analytics tools to understand how pages are used and what content is helpful. This data is anonymous. You can disable cookies in your browser if you prefer.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> We utilize tracking technologies to analyze trends, administer the website, and track users' movements around the site. You reserve the right to control the use of cookies at the individual browser level.
            </p>
          </section>

          <section className={styles.block}>
            <h3>5. Data Storage, Security, & Retention</h3>
            <p>
              <strong>We take reasonable steps to protect your information through secure hosting and limited access. However, no system is completely risk-free. We encourage discretion when sharing information online.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> We implement commercially reasonable technical and organizational measures to protect Personal Data against unauthorized access. We retain your inquiry data only for as long as necessary to fulfill the purpose of your request, or until you request its deletion, subject to overriding legal and accounting requirements. Please note that data may be processed and stored in the United States, utilizing standard contractual clauses or equivalent safeguards for international data transfers.
            </p>
          </section>

          <section className={styles.block}>
            <h3>6. Sharing of Information</h3>
            <p>
              <strong>We do not sell, rent, or trade your personal information. We only share information with trusted service providers when necessary (e.g., hosting, email) or if required by law. Nothing more.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> NoCapCode complies with the California Consumer Privacy Act (CCPA) and explicitly confirms that we do not "sell" or "share" your Personal Data for cross-context behavioral advertising. We may disclose data to third-party sub-processors bound by confidentiality agreements, or when legally compelled by a valid subpoena, court order, or government request.
            </p>
          </section>

          <section className={styles.block}>
            <h3>7. Your Rights</h3>
            <p>
              <strong>You may request access to your information, ask for corrections, or request the deletion of your data at any time. Just reach out to us.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> Depending on your jurisdiction (including GDPR and CCPA), you may have the right to access, correct, update, port, restrict processing of, or delete your Personal Data. To exercise these rights, or to lodge a complaint, please contact our privacy team at <strong>privacy@nocapcode.cloud</strong>. You also have the right to lodge a complaint with your local data protection supervisory authority.
            </p>
          </section>

          <section className={styles.block}>
            <h3>8. External Links</h3>
            <p>
              Our website may link to other websites. We are not responsible for the privacy practices of those sites. We recommend reviewing their policies separately.
            </p>
          </section>

          <section className={styles.block}>
            <h3>9. Changes to This Policy</h3>
            <p>
              This policy may be updated as our work evolves. The most current version will always be available on this page.
            </p>
          </section>

          <section className={styles.block}>
            <h3>10. Contact</h3>
            <p>
              If you have questions or concerns about privacy, contact us thoughtfully at{" "}
              <a
                href="mailto:privacy@nocapcode.cloud"
                className={styles.emailLink}
              >
                <strong>privacy@nocapcode.cloud</strong>
              </a>.
            </p>

            <p className={styles.closing}>
              Note:
              <br />
              We collect information to understand not to track, pressure, or manipulate.
              <br />
              Privacy, like good software, works best when it's simple and honest.
            </p>
          </section>
      </div>
    </section>

    <Footer />

    </>

  );
};

export default Privacy;
