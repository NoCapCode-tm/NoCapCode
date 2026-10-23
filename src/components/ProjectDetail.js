import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async'; // <--- 1. IMPORT HELMET
import styles from '../CSS/CaseStudyDetail.module.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import LoaderDots from './LoaderDots';
import SEO from './SEO'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://nocapcode-backend.onrender.com/api/v1/job/getallcasestudy",
          { withCredentials: true }
        );
        const foundProject = response.data.message?.find(p => p._id === id || p.id === id || p.title === id);
        setProject(foundProject);
      } catch (error) {
        console.error("Failed to load project details", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <LoaderDots text="Loading Project..." />;
  if (!project) return <div style={{ color: 'white', textAlign: 'center', marginTop: '20vh' }}>Project not found.</div>;

  return (
    <>
      <SEO 
        title={`${project.title} | NoCapCode Portfolio`}
        description={project.subtitle || "Explore enterprise software case studies and architecture breakdowns by NoCapCode."}
        canonicalUrl={`https://nocapcode.cloud/portfolio/${id}/`}
        image={project.thumbnail || "https://nocapcode.cloud/internal/og-cover.png"}
      />

      {/* 2. WRAP THE SCRIPT IN HELMET */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "headline": project.title,
            "description": project.subtitle,
            "image": project.thumbnail,
            "author": { "@type": "Organization", "@id": "https://nocapcode.cloud/#organization" },
            "url": `https://nocapcode.cloud/portfolio/${id}/`
          })}
        </script>
      </Helmet>

      <Navbar />
      
      <div className={styles.caseStudyDetail}>
        <div className={styles.container}>
          <div className={styles.backButton} onClick={() => navigate('/portfolio')}>
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </div>

          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{project.title}</h1>
              <p className={styles.heroDescription}>{project.subtitle}</p>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imagePlaceholder}>
                <img src={project.thumbnail} alt={project.title} height="100%" width="100%"/>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.richContent} dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;