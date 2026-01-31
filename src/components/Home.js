import { useNavigate } from "react-router";
import styles from "../CSS/Home.module.css";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.container}>
      
      
      <div className={styles.topBar}>
        <img src="/Home.png" alt="/" height="100%" width="100%"/>
      </div>

      <div className={styles.hero}>
        <h1 className={`${styles.welcome} ${styles.gradienttext}`}>Welcome to<br/> no cap code</h1>
        <p className={styles.tagline}>No cap. Built like it's ours.</p>

        <div className={styles.cards}>
          
          {/* CARD 1 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Job Posting Form</h2>
            <p className={styles.cardText}>
              Draft a new job posting by specifying the role, responsibilities,
              and required qualifications. Include detailed skills, experience,
              and expectations to attract the right candidates.
            </p>

            <div className={styles.actions}>
              <button className={styles.editBtn}>← Edit</button>
              <button className={styles.createBtn} onClick={()=>{navigate("/addjobposting")}}>Create →</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Case Study Form</h2>
            <p className={styles.cardText}>
              Submit your case study by outlining objectives, methods,
              and key outcomes. Provide detailed insights, supporting data,
              and evidence to showcase the impact of your work.
            </p>

            <div className={styles.actions}>
              <button className={styles.editBtn}>← Edit</button>
              <button className={styles.createBtn} onClick={()=>{navigate("/addcasestudies")}}>Create →</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
