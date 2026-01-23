import React from "react";
import styles from "../CSS/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      {/* top hairline */}
      <div className={styles.topLine} />

      {/* giant background number */}
      <div className={styles.bg}>404</div>

      {/* center copy */}
      <div className={styles.center}>
        <p className={styles.magic}>Abracadabra!...</p>
        <p className={styles.sub}>and the page disappeared.</p>
      </div>

      {/* bottom left */}
      <span className={styles.bottomLeft}>
        ERROR 404 PAGE NOT FOUND
      </span>

      {/* bottom right */}
      <button className={styles.back}>
        Go back to home page <span>↗</span>
      </button>
    </div>
  );
}
