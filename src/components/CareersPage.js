import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";  // By Om
import styles from "../CSS/CareersPage.module.css";

import CareersGlobe from "./CareersGlobe";
import { BriefcaseBusiness, Clock, Instagram, Linkedin, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import useWindowWidth from "./usewindowwidth";
import axios from "axios";
import LoaderDots from "./LoaderDots";

export default function CareersPage() {
    const navigate= useNavigate()
    const navbarRef = useRef(null);
      const logRef = useRef(null);
      const btnTextRef = useRef(null);
      const btnIconRef = useRef(null);
      const positionref =useRef(null)
      const width = useWindowWidth()
      const[jobs,setjobs]=useState([])
      const[loading,setLoading]=useState(false)
      // const[job,setJob]=useState(null)
      const[search, setSearch] = useState('');
      const[activeTab, setActiveTab] = useState("All");

      const tabs = ["All", "Marketing", "Designing", "Engineering"]

      const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title?.toLowerCase().includes(search.toLowerCase());

        const matchesTabs = activeTab === 'All' ||
        job.department?.toLowerCase() === activeTab.toLowerCase();

        return matchesSearch && matchesTabs
      })

       useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://nocapcode-backend-hapd.onrender.com/api/v1/job/getjobs",
          { withCredentials: true }
        );
        console.log(response.data.message)
        const job1 = response.data.message
        setjobs(job1);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);


      useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: positionref.current,
            start: "top top",
            toggleActions: "play play play reverse",
          },
        });
      
        const isMobile = width <= 800;

  tl.to(navbarRef.current, {
    width: isMobile ? "50%" : 440,   // 👈 fixed
    borderRadius: isMobile ? "8px" : "8px",
    top: isMobile ? "10px" : "10px",
    justifyContent:"flex-end",
    gap: "20px",
    duration: 0.45,
    ease: "power2.out",
  });
      
        // logo fade + slide
        tl.to(
          logRef.current,
          {
            opacity: 0,
            display:"none",
            x: -24,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        );
      
        // button text out
        tl.to(
          btnTextRef.current,
          {
            opacity: 0,
            width: 0,
            marginRight: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        );
      
        // arrow pop in
        tl.to(
          btnIconRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.6)",
          },
          "<"
        );
      }, []);
      
      
  return (
    <>
    {/* 
      edit: added advanced SEO optimization, OpenGraph, Twitter metadata,
      JobPosting structured data, breadcrumb schema, and indexing improvements
      for better Google Jobs visibility, indexing, and sitelinks eligibility. By Om 
    */}

    <Helmet>

      {/* Primary SEO */}
      <title>
        Careers at NoCapCode | Software Engineering, Design & Product Opportunities
      </title>

      <meta
        name="description"
        content="Explore careers at NoCapCode. Join our team to build scalable software systems, SaaS platforms, AI automation tools, websites, and digital products for startups and modern businesses."
      />

      <meta
        name="keywords"
        content="NoCapCode careers, software engineering jobs, frontend developer jobs, UI UX internships, startup careers, SaaS jobs, remote developer jobs, software company careers"
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      <link
        rel="canonical"
        href="https://nocapcode.cloud/#/careers"
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="NoCapCode"
      />

      <meta
        property="og:title"
        content="Careers at NoCapCode"
      />

      <meta
        property="og:description"
        content="Build software systems, SaaS platforms, AI automation tools, and digital products with NoCapCode."
      />

      <meta
        property="og:url"
        content="https://nocapcode.cloud/#/careers"
      />

      <meta
        property="og:image"
        content="https://nocapcode.cloud/internal/og-cover.png"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="Careers at NoCapCode"
      />

      <meta
        name="twitter:description"
        content="Join NoCapCode and work on scalable software systems, SaaS platforms, AI automation, and digital innovation."
      />

      <meta
        name="twitter:image"
        content="https://nocapcode.cloud/internal/og-cover.png"
      />

      {/* Careers Page Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Careers at NoCapCode",
          "url": "https://nocapcode.cloud/#/careers",
          "description":
            "Career opportunities at NoCapCode across engineering, design, product, and software systems.",
          "isPartOf": {
            "@type": "WebSite",
            "name": "NoCapCode",
            "url": "https://nocapcode.cloud/"
          },
          "about": {
            "@type": "Organization",
            "name": "NoCapCode",
            "url": "https://nocapcode.cloud/"
          }
        })}
      </script>

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nocapcode.cloud/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Careers",
              "item": "https://nocapcode.cloud/#/careers"
            }
          ]
        })}
      </script>

      {/* Dynamic JobPosting Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": jobs.map((job) => ({
            "@type": "JobPosting",
            "title": job?.title,
            "description": job?.description,
            "employmentType": job?.mode || "FULL_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "NoCapCode",
              "sameAs": "https://nocapcode.cloud/",
              "logo": "https://nocapcode.cloud/favicon/favicon-96x96.png"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santa Fe",
                "addressRegion": "New Mexico",
                "addressCountry": "US"
              }
            },
            "industry": job?.department || "Software Development",
            "url": `https://nocapcode.cloud/#/careers/${job?._id}`
          }))
        })}
      </script>

    </Helmet>
    
    {loading && <LoaderDots text="Loading" />}
    <div className={styles.wrapper}>
      {/* Navbar */}
      <Navbar ref={navbarRef}logoRef={logRef} btnTextRef={btnTextRef} btnIconRef={btnIconRef}/>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.globeWrapper}>
          {/*  your existing globe */}
          <CareersGlobe/>
        </div>

        <div className={styles.heroContent} ref={positionref}>
          <span className={styles.badge}>Career</span>

          <h1 className={styles.title}>
            Join Our Team And <br />
            <span>Build The Future</span> Together
          </h1>

          <p className={styles.subtitle}>
            <span> We're looking for passionate people to join our mission.We value
            flat hierarchies,</span>
            <span>clear communication and full ownership and</span> 
            responsibility.
          </p>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className={styles.positions} >
        <h2>Open positions</h2>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search field"
            className={styles.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
              key={tab} 
              className={activeTab === tab? styles.active : ""}
              onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>

            ))}
          </div>
        </div>

        {/* CARD */}
        {filteredJobs.map((item)=>{
          return (
             <div className={styles.jobCard} onClick={()=>{navigate(`/careers/${item._id}`)}}>
          <div  className={styles.position}>
            <h3>{item?.title}</h3>
            <div
              className={styles.richContent}
              dangerouslySetInnerHTML={{ __html: item?.description }}
            />
          </div>

          <div className={styles.meta}>
            <span><MapPin size={16}/>New Mexico, US</span>
            <span><Clock   size={16}/>{item?.mode}</span>
            <span><BriefcaseBusiness  size={16}/>{item?.department}</span>
          </div>

          <div className={styles.arrow}>↗</div>
             </div>
          )
            
        })}
       
      </section>
    </div>
    <footer className={styles.footerWrap}>
       <div className={styles.footerScene}>
        <img src="/nocapbg.png" width="100%" height="100%" alt="NoCapCode software systems background"/>
      </div>
      <div className={styles.mirrorOverlay}/>
      <div className={styles.footerBox}>
    
        <div className={styles.top}>
          
          <div className={styles.left}>
            <h2 className={styles.logo}>NoCapCode™</h2>
            <p className={styles.tagline}>No cap. Built like it's ours.</p>
            <p className={styles.tagline}>We build software systems for teams who care about clarity, ownership, and longevity.</p>
            <div className={styles.socials}>
              <span><a href="https://www.linkedin.com/company/nocapcode"  rel="noreferrer" target="_blank"><Linkedin size={16} color="rgba(190, 190, 190, 1)"/></a></span>
              <span><a href="https://twitter.com/nocapcodecloud" target="_blank" rel="noreferrer"><Twitter size={16} color="rgba(190, 190, 190, 1)" /></a></span>
              <span><a href="https://www.instagram.com/nocapcode.cloud" target="_blank" rel="noreferrer"><Instagram size={16} color="rgba(190, 190, 190, 1)"/></a></span>
            </div>

            <div className={styles.badge1}>
                <img src="/badge.png"  alt="NoCapCode quality badge"  height="100%" width="100%"/>
            </div>
          </div>

        
          <div className={styles.right}>
            <div className={styles.col}>
              <h4>Explore</h4>
              <ul>
                <li onClick={() =>
    navigate("/", { state: { scrollTo: "howWeWork" } })
  }
  style={{ cursor: "pointer" }}>How We Work</li>
                <li onClick={()=>{
                  navigate("/casestudies")}} style={{ cursor: "pointer" }}>Case Studies</li>
                <li onClick={()=>{
                  navigate("/about")
                  window.scrollTo(0,0);}} style={{ cursor: "pointer" }}>About NoCapCode</li>
                  <li onClick={() =>
    navigate("/", { state: { scrollTo: "faq" } })
  }
  style={{ cursor: "pointer" }} >FAQs</li>
                <li onClick={()=>{navigate("/clarity")}} style={{ cursor: "pointer" }}>Start with Clarity</li>
            
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Company</h4>
              <ul>
                <li onClick={()=>{
                  navigate("/careers")}} style={{ cursor: "pointer" }}>Careers</li>
                <li onClick={()=>{
                  navigate("/contact")}} style={{ cursor: "pointer" }}>Contact</li>
              </ul>
              <p>
                 Santa Fe NM 87501,{width<=500 ?<br/>:""} United States
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p>© 24-{new Date().getFullYear()} NoCapCode. All rights reserved.<br/>Built with restraint, responsibility, and long-term thinking.</p>

          <div className={styles.links}>
            <span onClick={()=>{navigate("/terms")}} style={{ cursor: "pointer" }}>Terms of Service</span>
            <span onClick={()=>{navigate("/privacy")}} style={{ cursor: "pointer" }}>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
