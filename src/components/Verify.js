import React, { useState } from 'react';
import styles from "../CSS/Verify.module.css";
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, ShieldCheck, Check } from 'lucide-react';

const Verify = () => {
  const [credid, setCredid] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (credid.trim()) {
      navigate(`/verify/certificate/${credid}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  function FeatureItem({ title, description }) {
    return (
      <div className={styles.featureItem}>
        <div className={styles.featureIconBox}>
          <Check size={18} strokeWidth={3} />
        </div>
        <div className={styles.featureText}>
          <h4 className={styles.featureTitle}>{title}</h4>
          <p className={styles.featureDesc}>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.verify}>
      
      {/* Main Content Wrapper */}
      <div className={styles.wrapper}>
        
        {/* Top Badge */}
        <div className={styles.badge}>
          <ShieldCheck size={16} className={styles.badgeIcon} />
          <span>Secure. Verified. Trusted.</span>
        </div>

        {/* Headings */}
        <h1 className={styles.title}>Certificate Verification</h1>
        <p className={styles.subtitle}>
          Verify the authenticity of certificates issued by NoCapCode.
        </p>

        {/* Search Container */}
        <div className={styles.searchContainer}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="text"
            value={credid}
            placeholder="Search by Certificate ID"
            onChange={(e) => setCredid(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.searchInput}
          />
          <button className={styles.verifyBtn} onClick={handleVerify}>
            Verify <ArrowRight size={18} />
          </button>
        </div>

        {/* Features Row */}
        <div className={styles.featuresRow}>
          <FeatureItem 
            title="Tamper-Proof" 
            description="Certificates are protected from unauthorized changes." 
          />
          <div className={styles.divider}></div>
          <FeatureItem 
            title="Digitally Verified" 
            description="Cryptographic validation ensures authenticity." 
          />
          <div className={styles.divider}></div>
          <FeatureItem 
            title="Trusted by Recruiters" 
            description="Used and trusted by leading recruiters worldwide." 
          />
        </div>

      </div>

      {/* Target Design Custom Footer */}
      <div className={styles.bottomSection}>
        <div className={styles.footerLinks}>
          <div>© 2025 NoCapCode. All rights reserved.</div>
          <div className={styles.linksRight}>
            <span onClick={() => navigate('/privacy')} className={styles.linkItem}>Privacy Policy</span>
            <span onClick={() => navigate('/terms')} className={styles.linkItem}>Terms of Service</span>
            <span onClick={() => navigate('/security')} className={styles.linkItem}>Trust & Security</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Verify;