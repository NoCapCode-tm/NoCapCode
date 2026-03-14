import React from 'react'
import styles from "../CSS/Verify.module.css";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Check } from 'lucide-react';

const Verify = () => {
  const[credid,setCredid]=useState('')
  const navigate = useNavigate()

  

    function FeatureCard({ title }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>
        <span><Check/></span>
      </div>
      <p className={styles.cardText}>{title}</p>
    </div>
  );
}
  return (
    <div className={styles.verify}>
      <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Certificate Verfication</h2>
                    <p className={styles.subtext}>
                      Search for your certificate.
                    </p>
    <div className={styles.wrapper}>
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={credid}
          placeholder="Search..."
          onChange={(e)=>{setCredid(e.target.value)}}
          className={styles.searchInput}
        />
        <div className={styles.searchArrow} onClick={()=>{navigate(`/certificate/${credid}`)}}>↗</div>
      </div>

      {/* Cards */}
      <div className={styles.cardRow}>
        <FeatureCard title="Verification & Authenticity" />
        <FeatureCard title="Industry Recognition" />
        <FeatureCard title="Skill-Based Validation" />
      </div>
    </div>
    </div>
  )
}

export default Verify
