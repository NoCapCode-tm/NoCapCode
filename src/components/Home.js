import { useNavigate } from "react-router";
import styles from "../CSS/Home.module.css";
import { Briefcase, FileText, FileBadge } from "lucide-react";
import Footer from "./Footer"; // Assuming you have this from the previous page

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      
      {/* HEADER SECTION */}
      <div className={styles.header}>
        <h1 className={styles.welcome}>Welcome to NoCapCode</h1>
        <h2 className={styles.tagline}>No cap. Built like its ours</h2>
        <p className={styles.subtitle}>Create and manage everything in one place</p>
      </div>

      {/* CARDS SECTION */}
      <div className={styles.cardsWrapper}>
        
        {/* CARD 1: Job Posting */}
        <div className={styles.card}>
          <div className={styles.iconBox}>
            <Briefcase size={20} color="#fff" strokeWidth={1.5} />
          </div>
          <h3 className={styles.cardTitle}>Job Posting</h3>
          <p className={styles.cardText}>
            Create and publish job openings to find the right talent.
          </p>

          <div className={styles.actions}>
            <button className={styles.createBtn} onClick={() => navigate("/addjobposting")}>
              Create Job
            </button>
            <button className={styles.editBtn}>
              Edit
            </button>
          </div>
        </div>

        {/* CARD 2: Case Study */}
        <div className={styles.card}>
          <div className={styles.iconBox}>
            <FileText size={20} color="#fff" strokeWidth={1.5} />
          </div>
          <h3 className={styles.cardTitle}>Case Study</h3>
          <p className={styles.cardText}>
            Share success stories and showcase your impact.
          </p>

          <div className={styles.actions}>
            <button className={styles.createBtn} onClick={() => navigate("/addcasestudies")}>
              Create Case Study
            </button>
            <button className={styles.editBtn}>
              Edit
            </button>
          </div>
        </div>

        {/* CARD 3: Add Certificate */}
        <div className={styles.card}>
          <div className={styles.iconBox}>
            <FileBadge size={20} color="#fff" strokeWidth={1.5} />
          </div>
          <h3 className={styles.cardTitle}>Add Certificate</h3>
          <p className={styles.cardText}>
            Create and issue certificate with ease.
          </p>

          <div className={styles.actions}>
            <button className={styles.createBtn} onClick={() => navigate("/addcertificate")}>
              Add Certificate
            </button>
            <button className={styles.editBtn}>
              Edit
            </button>
          </div>
        </div>

      </div>

      {/* MORE FEATURES BUTTON */}
      <div className={styles.moreFeaturesContainer}>
        <button className={styles.moreFeaturesBtn}>
          More exciting features coming soon
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;