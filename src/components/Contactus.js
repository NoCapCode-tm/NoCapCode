import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import styles from "../CSS/Contactus.module.css";
import { 
  Mail, Calendar, Linkedin, ArrowRight, Zap, Sparkles, ShieldCheck 
} from "lucide-react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowWidth from "./usewindowwidth";
import { toast } from "react-toastify";
import LoaderDots from './LoaderDots';
import axios from "axios";
import Footer from './Footer';

const Contactus = () => {
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null);
  const width = useWindowWidth();
  
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!name.trim()) return toast.error("Please enter your name");
      setStep(2);
    } else if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email.trim())) {
        return toast.error("Please enter a valid email address");
      }
      setStep(3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      toast.error("Please fill out your requirements");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://nocapcode-backend-hapd.onrender.com/api/v1/job/contactus", {
        name: name.trim(),
        email: email.trim(),
        message: trimmedMessage
      }, { withCredentials: true });
      
      console.log(response.data);
      toast.success("Message Sent Successfully!");
      setname("");
      setemail("");
      setmessage("");
      setStep(1);
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        toggleActions: "play play play reverse",
      },
    });

    const isMobile = width <= 800;

    tl.to(navbarRef.current, {
      width: isMobile ? "50%" : 440,
      borderRadius: isMobile ? "8px" : "8px",
      top: isMobile ? "10px" : "10px",
      justifyContent: "flex-end",
      gap: "20px",
      duration: 0.45,
      ease: "power2.out",
    });

    tl.to(logRef.current, { opacity: 0, display: "none", x: -24, duration: 0.25, ease: "power2.out" }, "<");
    tl.to(btnTextRef.current, { opacity: 0, width: 0, marginRight: 0, duration: 0.25, ease: "power2.out" }, "<");
    tl.to(btnIconRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.6)" }, "<");
  }, [width]);

  return (
    <>
      <Helmet>
        <title>Contact NoCapCode | SaaS, AI Automation & Software Development</title>
        <meta name="description" content="Contact NoCapCode for enterprise architecture..." />
      </Helmet>

      {loading && <LoaderDots text="Submitting Enquiry" />}
      
      <div className={styles.pageContainer}>
        <Navbar
          ref={navbarRef}
          logoRef={logRef}
          btnTextRef={btnTextRef}
          btnIconRef={btnIconRef}
        />
        
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroLeft}>
            <span className={styles.miniHeader}>CONTACT US</span>
            <h1>Architecting<br/>Scalable<br/>Code For<br/><span>Global Scale.</span></h1>
            <p>Partner with an elite team to build high-availability software and robust enterprise-grade applications. Zero fluff. Complete clarity.</p>
            
            <div className={styles.teamStatus}>
              <div className={styles.avatarGroup}>
                <img src="https://i.pravatar.cc/100?img=11" alt="Team member" />
                <img src="https://i.pravatar.cc/100?img=12" alt="Team member" />
                <img src="https://i.pravatar.cc/100?img=13" alt="Team member" />
              </div>
              <div className={styles.statusText}>
                <span className={styles.online}>Team is online</span>
                <span className={styles.responseTime}>Response Time: &lt; 12 hours</span>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.conversationalCard}>
              {step === 1 && (
                <form onSubmit={handleNextStep}>
                  <h2>Hello! Let's start with your name.</h2>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="text" 
                      placeholder="Type your full name..." 
                      value={name} 
                      onChange={(e) => setname(e.target.value)} 
                      autoFocus
                    />
                    <button type="submit"><ArrowRight size={20} /></button>
                  </div>
                </form>
              )}
              {step === 2 && (
                <form onSubmit={handleNextStep}>
                  <h2>Great to meet you, {name.split(' ')[0]}! What's your email?</h2>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="email" 
                      placeholder="name@company.com" 
                      value={email} 
                      onChange={(e) => setemail(e.target.value)} 
                      autoFocus
                    />
                    <button type="submit"><ArrowRight size={20} /></button>
                  </div>
                </form>
              )}
              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h2>What are you looking to build?</h2>
                  <div className={styles.textareaWrapper}>
                    <textarea 
                      placeholder="Tell us about your project, timeline, and goals..." 
                      value={message} 
                      onChange={(e) => setmessage(e.target.value)} 
                      autoFocus
                    />
                    <div className={styles.submitRow}>
                      <button type="button" onClick={() => setStep(2)} className={styles.backBtn}>Back</button>
                      <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CORE ADVANTAGES SECTION */}
        <section className={styles.advantagesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.miniHeader}>CORE ADVANTAGES</span>
            <h2>Why Build With Us</h2>
          </div>
          
          <div className={styles.advantagesGrid}>
            <div className={styles.advCard}>
              <div className={styles.iconBox}><Zap size={24} color="#2246FF" /></div>
              <h3>Enterprise Precision Engineering</h3>
              <p>High-performance, fault-tolerant architectures built to scale to millions of concurrent users seamlessly.</p>
            </div>
            <div className={styles.advCard}>
              <div className={styles.iconBox}><Sparkles size={24} color="#2246FF" /></div>
              <h3>Generative AI & Advanced Tech</h3>
              <p>Production-ready AI integration and low-latency systems engineered on next-gen tech stacks.</p>
            </div>
            <div className={styles.advCard}>
              <div className={styles.iconBox}><ShieldCheck size={24} color="#2246FF" /></div>
              <h3>Strategic Technical Partnership</h3>
              <p>Dedicated engineering partners driving product roadmap execution, security compliance, and measurable ROI.</p>
            </div>
          </div>
        </section>

        {/* THE JOURNEY SECTION */}
        <section className={styles.journeySection}>
          <div className={styles.journeyLeft}>
            <h2>The Product Lifecycle Journey</h2>
            <p>A transparent, end-to-end framework driving continuous integration, fast time-to-market, and uncompromising system reliability.</p>
          </div>
          <div className={styles.journeyRight}>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.phase}>PHASE 01</span>
                <h3>Scope Discovery & Technical Strategy</h3>
                <p>We run exhaustive technical discovery sprints to analyze operational constraints, document systems requirements, and structure a risk-mitigated product roadmap.</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.phase}>PHASE 02</span>
                <h3>Cloud Architecture & System Blueprinting</h3>
                <p>We architect high-availability schematics, select the optimal technical stack, evaluate database requirements, and define clear database schemas tailored to your business rules.</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.phase}>PHASE 03</span>
                <h3>Agile Development & Automated Pipelines</h3>
                <p>We deploy secure code through continuous integration and deployment (CI/CD) pipelines, combining rapid MVP development for startups with microservices testing and weekly live system updates.</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.phase}>PHASE 04</span>
                <h3>Production Deployment & Scale Operations</h3>
                <p>We manage end-to-end cloud orchestration, implement continuous infrastructure monitoring, configure firewalls, and provide post-launch optimization as your platform scales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM ACTION CARDS */}
        <section className={styles.actionCardsSection}>
          <a href="mailto:hello@nocapcode.cloud" className={styles.actionCard}>
            <div className={styles.actionIcon}><Mail size={24} /></div>
            <h3>Direct Technical Inquiry</h3>
            <p>hello@nocapcode.cloud</p>
          </a>
          <a href="https://nocapcode.cloud/book" className={styles.actionCard}>
            <div className={styles.actionIcon}><Calendar size={24} /></div>
            <h3>Request Engineering Consultation</h3>
            <p>Schedule a 15-Minute Architecture Assessment</p>
          </a>
          <a href="http://linkedin.com/company/nocapcode/" className={styles.actionCard}>
            <div className={styles.actionIcon}><Linkedin size={24} /></div>
            <h3>Corporate Network Integration</h3>
            <p>Connect with our executive leadership team on LinkedIn.</p>
          </a>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Contactus;