import React, { useEffect, useState } from 'react';
import styles from "../CSS/Jobdetailspage.module.css";
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { BriefcaseBusiness, Clock, MapPin, User } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

const Jobdetailspage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://nocapcode-backend.onrender.com/api/v1/job/getjobs`,
          { withCredentials: true }
        );
        const jobs = response.data.message.find(j => j?._id === id);
        setJob(jobs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const roleTitle = job?.title
    ? `${job.title} | NoCapCode Careers`.slice(0, 60)
    : "Software Engineering Role | NoCapCode Careers";

  const roleDesc = `Apply for the ${job?.title || 'Engineering'} position in our ${job?.department || 'Engineering'} department at NoCapCode. Join our team.`.slice(0, 155);

  return (
    <>
      <SEO 
        title={roleTitle}
        description={roleDesc}
        canonicalUrl={`https://nocapcode.cloud/careers/${id}/`}
      />

      <Navbar />

      <div className={styles.jobdetails}>
        {loading && <p>Loading...</p>}

        {job && (
          <div className={styles.container}>
            {/* TOP META */}
            <div className={styles.meta}>
              <span><MapPin size={16}/>New Mexico, US</span>
              <span><Clock size={16}/>{job?.mode}</span>
              <span><BriefcaseBusiness size={16}/>{job?.department}</span>
              <span><User size={18}/>{job?.employementtype}</span>
            </div>

            {/* HEADER SECTION */}
            <div className={styles.header}>
              <h1 className={styles.title}>{job.title}</h1>
              <button className={styles.applyBtn} onClick={() => navigate(`/career/${id}/applicationform`)}>
                Apply now <span>↗</span>
              </button>
            </div>

            <div className={styles.divider} />

            {/* JOB DESCRIPTION */}
            <section className={styles.section}>
              <h2 className={styles.sectionheader}>Job description</h2>
              <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </section>

            {/* RESPONSIBILITIES */}
            <section className={styles.section}>
              <h2 className={styles.sectionheader}>Job responsibilities</h2>
              <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: job.responsibilities }}
              />
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionheader}>Job Perks</h2>
              <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: job?.perks }}
              />
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionheader}>Who Should Apply</h2>
              <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: job?.whoshouldapply }}
              />
            </section>

            {/* FOOTER ACTIONS */}
            <div className={styles.actions}>
              <button className={styles.applyBtn} onClick={() => navigate(`/career/${id}/applicationform`)}>
                Apply now <span>↗</span>
              </button>
              <Link to="/careers/" className={styles.secondaryBtn} style={{ textDecoration: 'none' }}>
                Browse all positions <span>↗</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Jobdetailspage;