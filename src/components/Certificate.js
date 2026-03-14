import React from 'react'
import styles from "../CSS/Certificate.module.css";
import { Download, Share, Share2 } from 'lucide-react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const Certificate = () => {
  const {credid} = useParams()
  const[user,Setuser]=useState()

   const start = new Date(user?.startedAt);
const end = new Date(user?.endAt);

const duration =
  (end.getFullYear() - start.getFullYear()) * 12 +
  (end.getMonth() - start.getMonth());

  useEffect(()=>{
    (async()=>{
      console.log(credid)
      const response = await axios.get(`https://nocapcode-backend.onrender.com/api/v1/job/getcertificate/${credid}`)
      console.log(response.data.message)
      Setuser(response.data.message)
    })()
  },[])

  const handleDownload = async () => {
  const imageUrl = user?.completioncertificate;

  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "NoCapCode-Certificate.png";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: "My Internship Certificate - NoCapCode",
      text: "Proudly completed my internship at NoCapCode ",
      url: user?.completioncertificate,
    });
  } else {
    alert("Sharing not supported on this browser");
  }
};


  return (
    <div calssName = {styles.certificate}>
       <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Certificate Verification</h2>
              <p className={styles.subtext}>
                Submit your case study with detailed information.
              </p>
         <div className={styles.wrapper}>
      {/* Top Completion Card */}
      <div className={styles.topCard}>
        <div className={styles.userCircle}>
          <img src = {user?.profilepicture} alt="/" width="100%" height="100%"/>
        </div>

        <div className={styles.topContent}>
          <p className={styles.completed}>Completed by</p>
          <h2 className={styles.name}>{user?.name}</h2>
          <p className={styles.date}>
            {new Date(user?.startedAt).toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})} - {new Date(user?.endAt).toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})}
          </p>
          <p className={styles.duration}>
            Duration: {duration} Months | Performance: Excellent
          </p>
          <p className={styles.verify}>
            {user?.name}'s account is verified. NoCapCode
            certifies their successful completion of{" "}
            <span>{user?.role} Internship</span>
          </p>
        </div>

        <div className={styles.expandBtn}>↗</div>
      </div>

      <div className={styles.mainSection}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.internshipCard}>
            <div className={styles.logoBox}>
              <img src = "/Credlogo.png" alt="/" width="100%" height="100%"/>
            </div>
            <div className ={styles.metadata}>
              <h3>{user?.role} Internship</h3>
              <p className={styles.company}>NoCapCode</p>
              <p className={styles.meta}>
                {user?.department} Department | {duration} Months Duration | {user?.workdetails?.mode}
              </p>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h4>Performance Evaluation & Skill Endorsement</h4>

            <div className={styles.skillsGrid}>
             <div
                     className={styles.richContent}
                     dangerouslySetInnerHTML={{ __html: user?.acknowledge}}
                   />
          </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <div className={styles.certificateBox}>
            <img src = {user?.completioncertificate} alt="/" width="100%" height="100%" />
          </div>

          <div className={styles.actionRow}>
            <button className={styles.downloadBtn} onClick={handleDownload}>
              <Download size={15} color="white"/>Download Certificate
            </button>

            <button className={styles.shareBtn} onClick={handleShare}><Share2 size={15} color="white"/></button>
          </div>
        </div>
      </div>
    </div>     
    </div>
  )
}

export default Certificate
