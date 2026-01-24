import React, { useRef, useState } from "react";
import styles from "../CSS/Casestudies.module.css";
import { ChevronDown, Instagram, Linkedin } from "lucide-react";
// import { useNavigate } from "react-router";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";

const Casestudies = () => {

     const faqRef = useRef(null);
const faqLabelRef = useRef(null);
const faqHeadRef = useRef(null);
const faqParaRef = useRef(null);
const faqItemsRef = useRef([]);
const sectionRef = useRef(null);
const pillRef = useRef(null);
const headingRef = useRef(null);
const subRef = useRef(null);
const cardsRef = useRef([]);


// const navigate = useNavigate()
const [openIndex, setOpenIndex] = useState(null);
const navigate=useNavigate()


  const faqs = [
  {
    q: "What kind of companies do you work with?",
    a: "We work with early-stage startups, growing product teams, and companies modernizing existing systems."
  },
  {
    q: "Can you help if I'm not sure what needs to be built yet?",
    a: "Yes. We help define the problem first, clarify priorities, and identify the smallest useful system to build."
  },
  {
    q: "Do you only build MVPs, or do you also improve existing systems?",
    a: "We do both. Many engagements focus on stabilizing or improving systems that already exist."
  },
  {
    q: "How do you price and scope projects?",
    a: "We scope projects around outcomes, not features. Pricing depends on complexity, timeline, and ownership level."
  },
  {
    q: "Are you an agency or a long-term partner?",
    a: "We act as long-term partners, embedding deeply into decision-making and system ownership."
  }
];
    const caseStudies = [
  {
    id: 1,
    image: "/case1.png",
    title: "Crafting a Timeless Brand Identity That Resonates",
    desc:
      "A strong brand identity builds trust and recognition. Learn the steps to create...",
  },
  {
    id: 2,
    image: "/case2.png",
    title: "The Art of Using Animation to Enhance Web Design",
    desc:
      "Subtle animations can transform your website’s user experience. Learn how to use…",
  },
  {
    id: 3,
    image: "/case3.png",
    title: "Designing Spaces That Define Your Brand",
    desc:
      "Visual storytelling through spatial design can redefine brand perception…",
  },
  {
    id: 4,
    image: "/case4.png",
    title: "Elevating Digital Products Through Precision Design",
    desc:
      "Thoughtful design choices elevate usability and clarity across platforms…",
  },
  {
    id: 5,
    image: "/case5.png",
    title: "Boosting SEO Through Strategic Web Design",
    desc:
      "Great design improves search rankings. Learn how to optimize your website for SE...",
  },
  {
    id: 6,
    image: "/case6.png",
    title: "Using Shapes to Shape Your Brand's Perception",
    desc:
      "Shapes influence emotions and perceptions. Learn how to use them to strengthen y...",
  },
  {
    id: 7,
    image: "/case7.png",
    title: "Designing for Accessibility: Inclusive Websites in 2025",
    desc:
      "Accessible design welcomes all users. Learn how to create inclusive websites tha...",
  },
  {
    id: 8,
    image: "/case8.png",
    title: "Interactive Storytelling: Engaging Users Through Design",
    desc:
      "Interactive storytelling captivates audiences. Learn how to use it to boost enga...",
  },
  {
    id: 9,
    image: "/case9.png",
    title: "Data-Driven Design: Making Smarter Creative Choices",
    desc:
      "Data informs better design. Learn how to use insights to create visuals that res...",
  },
  {
    id: 10,
    image: "/case10.png",
    title: "Balancing Creativity and Functionality in Web Design",
    desc:
      "Great design blends beauty and usability. Learn how to create websites that wow...",
  },
];

// useGSAP(() => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: faqRef.current,
//       start: "top 75%",
//       end: "bottom 60%",
//       scrub: 1,
//     },
//   });

//   // 🔹 Label
//   tl.from(faqLabelRef.current, {
//     opacity: 0,
//     y: 30,
//     duration: 0.5,
//     ease: "power3.out",
//   })

//   // 🔹 Heading
//   .from(faqHeadRef.current, {
//     opacity: 0,
//     y: 60,
//     duration: 0.7,
//     ease: "power3.out",
//   }, "+=0.1")

//   // 🔹 Subheading
//   .from(faqParaRef.current.children, {
//     opacity: 0,
//     y: 40,
//     duration: 0.5,
//     stagger: 0.2,
//     ease: "power3.out",
//   }, "+=0.1")

//   // 🔹 FAQ items (one by one)
//   .from(faqItemsRef.current, {
//     opacity: 0,
//     y: 50,
//     duration: 0.6,
//     stagger: 0.15,
//     ease: "power3.out",
//   }, "+=0.2");

// }, []);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 70%",
    },
  });

  tl.from(pillRef.current, {
    opacity: 0,
    y: 20,
    duration: 0.4,
    ease: "power3.out",
  })
  .from(headingRef.current, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
  }, "-=0.2")
  .from(subRef.current, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    ease: "power3.out",
  }, "-=0.3");
}, []);
useGSAP(() => {
  gsap.from(cardsRef.current, {
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
      stagger:5,
    },
    opacity: 0,
    x: (i) => (i % 2 === 0 ? -80 : 80), 
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.4,
  });
}, []);
useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: subRef.current,
            start: "top top",
            toggleActions: "play play play reverse",
          },
        });
      
        // shrink navbar (CENTER STAYS FIXED)
        tl.to(navbarRef.current, {
          width:440,
          gap:"20px",
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

const navbarRef = useRef(null);
      const logRef = useRef(null);
      const btnTextRef = useRef(null);
      const btnIconRef = useRef(null);




  return (
    <>
    <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>
    <section className={styles.caseWrap} ref={sectionRef}>
      {/* small pill */}
      <span className={styles.pill} ref={pillRef}>Case Studies</span>

      {/* heading */}
      <h1 className={styles.heading}  ref={headingRef}>
        Our Portfolio of <span>Transformations</span>
      </h1>

      {/* subheading */}
      <p className={styles.subheading} ref={subRef}>
        We rescue websites from the land of the lost. Here’s how we turn
        “meh” into “wow”.
      </p>

      {/* cards grid */}
     <div className={styles.grid}>
        {caseStudies.map((item,i) => (
          <div key={item.id} className={styles.caseCard} ref={(el) => (cardsRef.current[i] = el)} >
            <div className={styles.caseImage} >
              <img src={item.image} alt={item.title} />
              <span className={styles.caseArrow}>↗</span>
            </div>

            <div className={styles.caseContent}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
         <div className={styles.faq} ref={faqRef}>

      <div className={styles.faqallhead}>
          <span className={styles.page5first} ref={faqLabelRef}>FAQs</span>

      <h1 className={styles.outcomemainhead} ref={faqHeadRef}>
        Your <span  >Design</span> Questions  Answered
      </h1>

      <p className={styles.outcomepara} ref={faqParaRef}>
        <span>Find clear and comprehensive solutions to your queries 
about no cap code's process, plans, and services.</span>
      </p>

      </div>

     
      <div className={styles.faqList}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              ref={(el) => (faqItemsRef.current[i] = el)}
              className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className={styles.faqQuestion}>
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  className={styles.arrow}
                />
              </div>

              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
      <footer className={styles.footerWrap}>
       <div className={styles.footerScene}>
        <img src="/nocapbg.png" width="100%" height="100%" alt="/" />
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
              <span><FontAwesomeIcon icon={faXTwitter} /></span>
              <span><Instagram size={16} color="rgba(190, 190, 190, 1)"/></span>
              
            </div>

            <div className={styles.badge}>
                <img src="/badge.png" alt="/" height="100%" width="100%"/>
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
                <li>Start with Clarity</li>
            
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
                Algodones, New Mexico,<br />
                US, 87001
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p>© 2025-2026 NoCapCode. All rights reserved.<br/>Built with restraint, responsibility, and long-term thinking.</p>

          <div className={styles.links}>
            <span onClick={()=>{navigate("/terms")}} style={{ cursor: "pointer" }}>Terms of Service</span>
            <span onClick={()=>{navigate("/privacy")}} style={{ cursor: "pointer" }}>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Casestudies;
