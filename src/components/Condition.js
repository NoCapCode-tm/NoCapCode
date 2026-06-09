import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../CSS/Condition.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./Navbar";
import useWindowWidth from "./usewindowwidth";
import Footer from './Footer';

const Condition = () => {
  const navbarRef = useRef(null);
        const logRef = useRef(null);
        const btnTextRef = useRef(null);
        const btnIconRef = useRef(null);
        const startRef = useRef(null);
        const width = useWindowWidth()

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
  return (
    <>

      <Helmet>
        {/* Primary SEO */}
        <title>Terms & Conditions | NoCapCode</title>
        <meta
          name="description"
          content="Read the NoCapCode Terms & Conditions covering software services, project engagements, intellectual property, website usage, confidentiality, and collaboration policies."
        />
        <meta
          name="keywords"
          content="NoCapCode terms and conditions, software development terms, SaaS agreement, software company legal terms, website terms of use"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nocapcode.cloud/terms" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | NoCapCode" />
        <meta
          property="og:description"
          content="Understand the terms governing NoCapCode services, software engagements, intellectual property, and platform usage."
        />
        <meta property="og:url" content="https://nocapcode.cloud/terms" />
        <meta property="og:image" content="https://nocapcode.cloud/internal/og-cover.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | NoCapCode" />
        <meta
          name="twitter:description"
          content="Review NoCapCode terms related to software development services, project collaboration, ownership, and usage policies."
        />
        <meta name="twitter:image" content="https://nocapcode.cloud/internal/og-cover.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms & Conditions | NoCapCode",
            url: "https://nocapcode.cloud/terms",
            description: "Terms and Conditions page for NoCapCode covering services, website usage, confidentiality, intellectual property, and project engagement policies.",
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
          Legal & Terms
        </h1>

        <div className={styles.container}>
          <header className={styles.header}>
            <h2>Terms & Conditions</h2>
            <span className={styles.updated}>Last updated: 12/12/2025</span>
          </header>

          <p className={styles.intro} ref={startRef}>
            By accessing or using our website, services, or engaging with us for work, you agree to the terms outlined below.
            <br />
            If you don’t agree with these terms, please don’t use our site or services.
          </p>

          <section className={styles.block}>
            <h3>1. About NoCapCode & Service Engagements</h3>
            <p>
              <strong>NoCapCode is a digital product studio. We help founders and teams with product clarity, MVP development, and software systems. These terms apply to your use of this website.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> These Terms govern the use of the nocapcode.cloud website. Formal engagements for software development, consulting, or engineering services will be governed by a separate, mutually signed Master Services Agreement (MSA) or Statement of Work (SOW). In the event of a conflict between these website Terms and an executed MSA, the terms of the MSA shall strictly supersede.
            </p>
          </section>

          <section className={styles.block}>
            <h3>2. Use of This Website</h3>
            <p>
              <strong>You may use this website to learn about our work and contact us for collaboration. You may not misuse, copy, or republish our content without permission, or use our content to misrepresent our work or your own.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> NoCapCode grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the website strictly in accordance with these Terms. You agree not to use the website for any unlawful purpose, or to transmit any malicious code, viruses, or harmful data.
            </p>
          </section>

          <section className={styles.block}>
            <h3>3. No Guarantees & Disclaimer of Warranties</h3>
            <p>
              <strong>We don’t promise specific outcomes such as growth, revenue, or market success. Our role is to provide execution support and thoughtful systems. Results depend on factors beyond our control.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> THIS WEBSITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. NOCAPCODE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section className={styles.block}>
            <h3>4. Intellectual Property</h3>
            <p>
              <strong>All original materials we create remain our intellectual property until payment terms are fulfilled. Content on this website (text, visuals, branding) belongs to NoCapCode and may not be reused.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> The NoCapCode™ name, logos, designs, custom graphics, and website source code are protected by copyright, trademark, and other intellectual property laws. Unauthorized reproduction, distribution, or derivative use is strictly prohibited and will be enforced to the maximum extent of the law.
            </p>
          </section>

          <section className={styles.block}>
            <h3>5. Confidentiality</h3>
            <p>
              <strong>We respect confidentiality. Any information shared with us during discussions is treated as private and will not be disclosed without consent.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> We maintain strict confidentiality protocols regarding unreleased product ideas and business data submitted through our contact forms, utilizing standard Non-Disclosure principles.
            </p>
          </section>

          <section className={styles.block}>
            <h3>6. Limitation of Liability & Indemnification</h3>
            <p>
              <strong>We are not responsible for losses resulting from decisions made based on information from this site alone. Use judgment. Ask questions. We encourage that.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NOCAPCODE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY. Furthermore, you agree to defend, indemnify, and hold harmless NoCapCode and its team from any claims, damages, or expenses (including attorney's fees) arising from your use of this website or breach of these Terms.
            </p>
          </section>

          <section className={styles.block}>
            <h3>7. Governing Law & Dispute Resolution</h3>
            <p>
              <strong>If we ever have a serious disagreement, we believe in resolving it fairly and reasonably.</strong>
            </p>
            <p className={styles.muted}>
              <em>Legal:</em> These Terms shall be governed by and construed in accordance with the laws of the State of New Mexico, USA, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively through binding arbitration in Santa Fe, New Mexico. YOU AGREE TO WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
            </p>
          </section>

          <section className={styles.block}>
            <h3>8. External Links</h3>
            <p>
              Our website may contain links to third-party sites. We are not responsible for their content, policies, or practices.
            </p>
          </section>

          <section className={styles.block}>
            <h3>9. Changes to These Terms</h3>
            <p>
              We may update these terms from time to time to reflect changes in how we work or operate. The latest version will always be available on this page.
            </p>
          </section>

          <section className={styles.block}>
            <h3>10. Contact</h3>
              <p>
                If you have questions about these terms, reach out thoughtfully via our website or email us at{" "}
                <a
                  href="mailto:hello@nocapcode.cloud"
                  className={styles.emailLink}
                >
                  <strong>hello@nocapcode.cloud</strong>
                </a>.
              </p>

            <p className={styles.closing}>
              Note:
              <br />
              These terms exist to create clarity, not distance.
              <br />
              We believe good work starts with mutual understanding.
            </p>
          </section>
        </div>
      </section>

      <Footer />

    </>
  );
};

export default Condition;
