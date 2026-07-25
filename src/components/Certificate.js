import React, { useEffect, useState } from 'react';
import styles from "../CSS/Certificate.module.css";
import { 
  Download, Share2, ArrowLeft, ShieldCheck, Calendar, 
  Target, Check, FileText, Focus, RotateCcw, Users, ExternalLink 
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Certificate = () => {
  const { credid } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const start = new Date(user?.startedAt);
  const end = new Date(user?.endAt);

  const duration =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://nocapcode-backend-hapd.onrender.com/api/v1/job/getcertificate/${credid}`);
        setUser(response.data.message);
      } catch (error) {
        console.error("Failed to fetch certificate", error);
      }
    })();
  }, [credid]);

  const handleDownload = async () => {
    const imageUrl = user?.completioncertificate;
    if (!imageUrl) return;
    
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${user?.name || "NoCapCode"}-Certificate.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Internship Certificate - NoCapCode",
        text: `Proudly completed my ${user?.role} internship at NoCapCode!`,
        url: user?.completioncertificate,
      });
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <div className={styles.certificatePage}>
      <div className={styles.wrapper}>
        
        {/* Navigation & Header */}
        <div className={styles.navTop} onClick={() => navigate('/verify')}>
          <ArrowLeft size={16} /> Back to Search
        </div>

        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Certificate Verification</h1>
            <p className={styles.subtitle}>
              Verify the authenticity and details of the certified accomplishment.
            </p>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.secureBadge}>
              <ShieldCheck size={16} className={styles.badgeIcon} />
              Secure. Verified. Trusted.
            </div>
          </div>
        </div>

        {/* Top Completion Card */}
        <div className={styles.topCard}>
          <div className={styles.profileWrapper}>
            <div className={styles.userCircle}>
              <img src={user?.profilepicture || "/default-avatar.png"} alt="Profile" width="100%" height="100%" />
            </div>
            <div className={styles.verifiedBadge}>
              <Check size={10} strokeWidth={4} />
            </div>
          </div>

          <div className={styles.topContent}>
            <p className={styles.completedLabel}>COMPLETED BY</p>
            <h2 className={styles.name}>{user?.name}</h2>
            <div className={styles.metaRow}>
              <span className={styles.metaItem}>
                <Calendar size={14} /> 
                {new Date(user?.startedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })} - {new Date(user?.endAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
              </span>
              <span className={styles.divider}>|</span>
              <span className={styles.metaItem}>{duration} Month{duration > 1 ? 's' : ''}</span>
              <span className={styles.divider}>|</span>
              <span className={styles.metaItem}>
                <Target size={14} /> Excellent
              </span>
            </div>
            
            {/* FIX: Forced React Space {" "} and .trim() to ensure perfect inline rendering */}
            <p className={styles.verifyText}>
              {user?.name}'s account is verified. NoCapCode certifies their successful completion of{" "}
              <span className={styles.highlight}>{user?.role ? user.role.trim() : ""} Internship.</span>
            </p>
          </div>
        </div>

        {/* Main Content Split */}
        <div className={styles.mainSection}>
          
          {/* Left Section */}
          <div className={styles.left}>
            
            {/* Internship Info Card */}
            <div className={styles.internshipCard}>
              <div className={styles.logoBox}>
                <img src="/Credlogo.png" alt="NoCapCode" width="100%" height="100%" />
              </div>
              <div className={styles.metadata}>
                <h3>{user?.role} Internship</h3>
                <p className={styles.company}>NoCapCode</p>
                <div className={styles.meta}>
                  <span>{user?.department} Department</span>
                  <span className={styles.pipe}>|</span>
                  <span>{duration} Month Duration</span>
                  <span className={styles.pipe}>|</span>
                  <span>{user?.workdetails?.mode || "Remote"}</span>
                </div>
              </div>
            </div>

            {/* Performance & Skills Card */}
            <div className={styles.skillsSection}>
              <h4>Performance Evaluation & Skill Endorsement</h4>
              
              <div className={styles.richContent} dangerouslySetInnerHTML={{ __html: user?.acknowledge }} />

              <div className={styles.competenciesWrapper}>
                <p className={styles.competenciesLabel}>KEY COMPETENCIES DEMONSTRATED</p>
                
                {/* FIX: Updated icons to perfectly match target design */}
                <div className={styles.competenciesGrid}>
                  <div className={styles.compItem}>
                    <FileText size={18} className={styles.compIcon} strokeWidth={2} />
                    <span>Strategic<br/>Thinking</span>
                  </div>
                  <div className={styles.compItem}>
                    <Focus size={18} className={styles.compIcon} strokeWidth={2} />
                    <span>Execution<br/>Discipline</span>
                  </div>
                  <div className={styles.compItem}>
                    <RotateCcw size={18} className={styles.compIcon} strokeWidth={2} />
                    <span>Ownership &<br/>Accountability</span>
                  </div>
                  <div className={styles.compItem}>
                    <Users size={18} className={styles.compIcon} strokeWidth={2} />
                    <span>Partnership &<br/>Collaboration</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className={styles.right}>
            <div className={styles.certificateBox}>
              <img src={user?.completioncertificate} alt="Certificate" className={styles.certImage} />
            </div>

            <div className={styles.actionRow}>
              <button className={styles.downloadBtn} onClick={handleDownload}>
                <Download size={16} /> Download Certificate
              </button>
              <button className={styles.shareBtn} onClick={handleShare}>
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

        </div>
      </div>     
    </div>
  );
}

export default Certificate;