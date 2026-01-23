import React from "react";
import styles from "../CSS/Condition.module.css";

const Condition = () => {
  return (
    <section className={styles.wrap}>
      {/* subtle top bar */}
      <div className={styles.topBar} />

      {/* ghost background heading */}
      <h1 className={styles.ghost}>Welcome to NoCapCode</h1>

      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Terms & Conditions</h2>
          <span className={styles.updated}>Last updated: 12/12/2025</span>
        </header>

        <p className={styles.intro}>
          By accessing or using our website, services, or engaging with us for
          work, you agree to the terms outlined below.
          <br />
          If you don’t agree with these terms, please don’t use our site or
          services.
        </p>

        <section className={styles.block}>
          <h3>1. About NoCapCode</h3>
          <p>
            NoCapCode is a digital product studio.
            <br />
            We help founders, creators, and teams with product clarity, MVP
            development, systems, and related services.
            <br />
            Our work is collaborative and context-driven. Outcomes depend on
            clarity, communication, and decisions made together.
          </p>
        </section>

        <section className={styles.block}>
          <h3>2. Use of This Website</h3>
          <p>You may use this website to:</p>
          <ul>
            <li>learn about our work</li>
            <li>understand our approach</li>
            <li>contact us for potential collaboration</li>
          </ul>

          <p>You may not:</p>
          <ul>
            <li>misuse, copy, or republish content without permission</li>
            <li>attempt to disrupt or harm the site or its users</li>
            <li>use our content to misrepresent our work or your own</li>
          </ul>

          <p className={styles.muted}>
            All content is provided for general information purposes only.
          </p>
        </section>

        <section className={styles.block}>
          <h3>3. Engagement & Services</h3>
          <p>
            Any project, consultation, or service begins only after mutual
            agreement on scope, timelines, and terms.
          </p>
          <p>Nothing on this website should be considered:</p>
          <ul>
            <li>a binding offer</li>
            <li>a guarantee of results</li>
            <li>a promise of availability</li>
          </ul>
          <p>
            Each engagement is assessed individually to ensure a proper fit.
          </p>
        </section>

        <section className={styles.block}>
          <h3>4. No Guarantees</h3>
          <p>We don’t promise specific outcomes such as:</p>
          <ul>
            <li>growth</li>
            <li>revenue</li>
            <li>performance metrics</li>
            <li>market success</li>
          </ul>
          <p>
            Our role is to provide clarity, execution support, and thoughtful
            systems — not guarantees.
            <br />
            Results depend on many factors beyond our control.
          </p>
        </section>

        <section className={styles.block}>
          <h3>5. Intellectual Property</h3>
          <ul>
            <li>
              All original materials we create remain our intellectual property
              until payment terms are fulfilled.
            </li>
            <li>
              Once fulfilled, ownership and usage rights are transferred as
              agreed per project.
            </li>
          </ul>
          <p>
            Content on this website (text, visuals, branding) belongs to
            NoCapCode and may not be reused without permission.
          </p>
        </section>

        <section className={styles.block}>
          <h3>6. Confidentiality</h3>
          <p>
            We respect confidentiality.
            <br />
            Any information shared with us during discussions or projects is
            treated as private and will not be disclosed without consent, except
            where required by law.
          </p>
        </section>

        <section className={styles.block}>
          <h3>7. Limitation of Liability</h3>
          <p>To the extent permitted by law:</p>
          <ul>
            <li>
              NoCapCode is not liable for indirect, incidental, or consequential
              damages.
            </li>
            <li>
              We are not responsible for losses resulting from decisions made
              based on information from this site alone.
            </li>
          </ul>
          <p>Use judgment. Ask questions. We encourage that.</p>
        </section>

        <section className={styles.block}>
          <h3>8. External Links</h3>
          <p>
            Our website may contain links to third-party sites.
            <br />
            We are not responsible for their content, policies, or practices.
          </p>
        </section>

        <section className={styles.block}>
          <h3>9. Changes to These Terms</h3>
          <p>
            We may update these terms from time to time to reflect changes in how
            we work or operate.
            <br />
            The latest version will always be available on this page.
          </p>
        </section>

        <section className={styles.block}>
          <h3>10. Contact</h3>
          <p>
            If you have questions about these terms, reach out thoughtfully.
            <br />
            Contact us via the website.
          </p>

          <p className={styles.closing}>
            Closing note:
            <br />
            These terms exist to create clarity, not distance.
            <br />
            We believe good work starts with mutual understanding.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Condition;
