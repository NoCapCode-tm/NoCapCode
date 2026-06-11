import React from "react";
import styles from "../CSS/NotFound.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className={styles.page}>
      
      {/* ── GIANT BACKGROUND TEXT ── */}
      <div className={styles.giantText}>
        404
      </div>

      {/* ── FOREGROUND MESSAGE (Exact Color Split) ── */}
      <div className={styles.messageContainer}>
        <p className={styles.line1}>
          <span className={styles.textBlack}>Abra</span>
          <span className={styles.textWhite}>cadabra!...</span>
        </p>
        <p className={styles.line2}>
          <span className={styles.textWhite}>and the page disappe</span>
          <span className={styles.textBlack}>ared.</span>
        </p>
      </div>

      {/* ── FOOTER LEFT ── */}
      <span className={styles.bottomLeft}>
        ERROR 404 PAGE NOT FOUND
      </span>

      {/* ── FOOTER RIGHT ── */}
      <button className={styles.back} onClick={() => navigate("/")}>
        Go back to home page <ArrowUpRight size={16} strokeWidth={1.5} />
      </button>
      
    </div>
  );
}