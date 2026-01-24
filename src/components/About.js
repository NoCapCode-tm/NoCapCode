import React, { useRef, useState } from 'react'
import styles from "../CSS/About.module.css";
import { ChevronDown, Instagram, Linkedin } from 'lucide-react';
// import { useNavigate } from 'react-router';
import { useGSAP } from '@gsap/react';
import Navbar from "./Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import useWindowWidth from './usewindowwidth';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const faqs = [
  {
    q: "What kind of companies do you work with?",
    a: "We work with founders, startups, and small teams building real products SaaS, internal tools, and automation systems that need to work reliably in production."
  },
  {
    q: "Can you help if I’m not sure what needs to be built yet?",
    a: "Yes. Many projects start with uncertainty. We help clarify scope, remove unnecessary features, and define the first usable version before development begins."
  },
  {
    q: "Do you only build MVPs, or also improve existing systems?",
    a: "Both. We build new MVPs and also improve or stabilize existing software that’s become hard to change, maintain, or scale."
  },
  {
    q: "How do you price and scope projects?",
    a: "We scope based on clarity, not guesses. After understanding your needs, we define what should be built, what shouldn’t, and what risks exist."
  },
  {
    q: "Are you an agency or a long-term partner?",
    a: "We’re an execution partner. We stay involved as long as needed to make the system stable, clear, and usable then step back responsibly."
  }
];
    const faqRef = useRef(null);
const faqLabelRef = useRef(null);
const faqHeadRef = useRef(null);
const faqParaRef = useRef(null);
const faqItemsRef = useRef([]);
// const navigate = useNavigate()
const [openIndex, setOpenIndex] = useState(null);
const navigate = useNavigate()
const headingRef = useRef(null);
const paraRef = useRef(null);
const page1Ref = useRef(null);
const page1ImageRef = useRef(null);
const page1ContentRef = useRef(null);
const page2Ref = useRef(null);
const page2LeftRef = useRef(null);
const page2RightRef = useRef(null);
const page3Ref = useRef(null);
const page3BgRef = useRef(null);
const page3LeftRef = useRef(null);
const page3RightRef = useRef(null);
const startHereRef = useRef(null);
const startHereCardRef = useRef(null);
const startHereGlowRef = useRef(null);
const startHereBtnRef = useRef(null);
const conversationRef = useRef(null);
const conversationCardRef = useRef(null);
const conversationBgRef = useRef(null);
const conversationBtnRef = useRef(null);
const navbarRef = useRef(null);
      const logRef = useRef(null);
      const btnTextRef = useRef(null);
      const btnIconRef = useRef(null);
      const width = useWindowWidth()
      






useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: faqRef.current,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  // Label
  tl.from(faqLabelRef.current, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    ease: "power3.out",
  })

  //Heading
  .from(faqHeadRef.current, {
    opacity: 0,
    y: 60,
    duration: 0.7,
    ease: "power3.out",
  }, "+=0.1")

  // Subheading
  .from(faqParaRef.current.children, {
    opacity: 0,
    y: 40,
    duration: 0.5,
    stagger: 0.2,
    ease: "power3.out",
  }, "+=0.1")

  // FAQ items (one by one)
  .from(faqItemsRef.current, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
  }, "+=0.2");

}, []);

useGSAP(() => {
  const tl = gsap.timeline({delay:1.2});

    tl.from(headingRef.current.children, {
      opacity: 0,
      y: 100,
      duration: 2,
      stagger: 0.15,
      ease: "power3.out",
    })
    tl.from(
      paraRef.current.children,
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      },
      "-=0.4"
    )
}, []);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Ref.current,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  // LEFT IMAGE → left se fade
  tl.from(page1ImageRef.current, {
    opacity: 0,
    x: -120,
    duration: 1,
    ease: "power3.out",
  });

  // RIGHT CONTENT → right se fade
  tl.from(
    page1ContentRef.current.children,
    {
      opacity: 0,
      x: 120,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    },
    "-=0.6" // thoda overlap for premium feel
  );
}, []);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page2Ref.current,
      start: "top 45%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  // LEFT CONTENT → left se fade
  tl.from(page2LeftRef.current.children, {
    opacity: 0,
    x: -120,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });

  // RIGHT IMAGE → right se fade
  tl.from(
    page2RightRef.current,
    {
      opacity: 0,
      x: 120,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.6"
  );
}, []);
gsap.from(".whyText1 span", {
  scrollTrigger: {
    trigger: page2Ref.current,
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  ease: "power3.out",
});

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page3Ref.current,
      start: "top 100%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  //  Background lines — slow cinematic fade
  tl.from(page3BgRef.current, {
    opacity: 0,
    scale: 1.08,
    duration: 0.8,
    ease: "power2.out",
  });

  //  LEFT content — rise + fade
  tl.from(
    page3LeftRef.current.children,
    {
      opacity: 0,
      x: -60,
      y: 60,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    },
    "-=1.4"
  );

  //  RIGHT content — stagger reveal
  tl.from(
    page3RightRef.current.children,
    {
      opacity: 0,
      x: 80,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=1.2"
  );

}, []);
useGSAP(() => {
  gsap.from(`.${styles.page3Item} .${styles.num}`, {
    scrollTrigger: {
      trigger: page3Ref.current,
      start: "top 70%",
    },
    opacity: 0,
    scale: 0.6,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
}, []);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: startHereRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Card enters
  tl.from(startHereCardRef.current, {
    opacity: 0,
    y: 80,
    scale: 0.96,
    duration: 1,
    ease: "power3.out",
  });

  // Text stagger
 tl.from(
  startHereCardRef.current.querySelectorAll(
    `.${styles.startHereTitle}, .${styles.startHereSub}`
  ),
  {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
  },
  "-=0.6"
);


  // Button pop
  tl.from(
    startHereBtnRef.current,
    {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.4,
      ease: "back.out(1.6)",
    },
    "-=0.3"
  );
  

}, []);
useGSAP(() => {
  gsap.to(startHereGlowRef.current, {
    scale: 1.15,
    opacity: 0.6,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  
}, []);
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: conversationRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Card enters
  tl.from(conversationCardRef.current, {
    opacity: 0,
    y: 60,
    scale: 0.97,
    duration: 1,
    ease: "power3.out",
  });

  // Background subtle movement
  tl.from(
    conversationBgRef.current,
    {
      opacity: 0,
      scale: 1.05,
      duration: 1.6,
      ease: "power2.out",
    },
    "-=1.2"
  );

  // Icon pop
  tl.from(
    ".conversationIcon",
    {
      opacity: 0,
      scale: 0.5,
      duration: 0.4,
      ease: "back.out(1.8)",
    },
    "-=1"
  );

  // Text stagger (title + sub)
  tl.from(
    conversationCardRef.current.querySelectorAll(
      `.${styles.conversationTitle}, .${styles.conversationSub}`
    ),
    {
      opacity: 0,
      y: 25,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.8"
  );

  // Button reveal
  tl.from(
    conversationBtnRef.current,
    {
      opacity: 0,
      y: 20,
      scale: 0.94,
      duration: 0.45,
      ease: "back.out(1.6)",
    },
    "-=0.4"
  );
}, []);

useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top top",
            toggleActions: "play play play reverse",
          },
        });
      
        const isMobile = width <= 800;
        // shrink navbar (CENTER STAYS FIXED)
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
      const scrollToPageabout = () => {
  if (!faqRef.current) return;

  gsap.to(window, {
    duration: 1.4,
    scrollTo: {
      y: faqRef.current,
      offsetY: 80, // navbar ke liye thoda gap
    },
    ease: "power3.out",
  });
};

      








  return (
    <div className={styles.about}>
      <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>

        <div className={styles.abboutpage0}>
      <h1 ref={headingRef}>Built <pre>with</pre><span>Clarity</span></h1>
      <p className={styles.aboutpara} ref={paraRef}>
        <span>NoCapCode exists to help people build software that holds up</span>
         <span>not just at launch, but when real usage begins.</span>
      </p>
      </div>
      <div className={styles.aboutpage1} ref={page1Ref} >
  {/* LEFT IMAGE */}
  <div className={styles.aboutImage} ref={page1ImageRef}>
    <img src="/aboutpageimage.png" alt="discussion" />
  </div>

  {/* RIGHT CONTENT */}
  <div className={styles.aboutContent} ref={page1ContentRef}>
    <h2 className={styles.aboutTitle}>
      On a <span>practical</span> note
    </h2>

    <p className={styles.aboutIntro}>
      <strong>We build software that's designed to last.</strong><br />
      Our team works on MVP development, internal tools, automation, and scalable
      software systems where clarity and ownership matter from the start. We apply
      the same standards whether we're building new products or improving existing ones.
    </p>

    <div className={styles.aboutPoint}>
      <h4>Clear Decisions</h4>
      <p>
        We define product requirements and technical scope early so software
        development stays focused, efficient, and free from costly rewrites.
      </p>
    </div>

    <div className={styles.aboutPoint}>
      <h4>Real Outcomes</h4>
      <p>
        We measure success by what improves after launch—safer updates, fewer
        errors, and smoother operations for growing teams.
      </p>
    </div>

    <div className={styles.aboutPoint}>
      <h4>Stable Systems</h4>
      <p>
        We design scalable backend systems and architectures that handle change
        safely without breaking features or workflows.
      </p>
    </div>
  </div>
      </div>
     <div className={styles.aboutpage2} ref={page2Ref}>
  {/* TOP FADED TEXT */}
  <div className={styles.aboutWhy}>
    <span className={styles.whyTag}>WHY THIS MATTERS</span>
    <p className={`${styles.whyText1} ${styles.gradienttext}`}>
      <span>When systems are built with clarity and restraint, they last longer,</span>
      <span>cost less to maintain, and are easier to improve. That's what good</span>
      <span>software is supposed to do.</span>
    </p>
  </div>

  {/* MAIN GRID */}
  <div className={styles.aboutGrid}>
    {/* LEFT CONTENT */}
    <div className={styles.aboutLeft} ref={page2LeftRef}>
      <h2 className={styles.personalTitle}>
        On a <span>personal</span> note
      </h2>

      <p className={styles.personalIntro}>
        <strong>We care deeply about the work we leave behind.</strong>
      </p>

      <p className={styles.personalPara}>
        Most of us have had to maintain systems we didn't build and fix
        decisions we didn't make. That experience changed how we approach
        every project today.
      </p>

      <div className={styles.aboutPoint}>
        <h4>We value clear thinking</h4>
        <p>
          We take time to understand the problem before touching code.
          Not because it's slower, but because it prevents months of
          rework later.
        </p>
      </div>

      <div className={styles.aboutPoint}>
        <h4>We respect ownership</h4>
        <p>
          Every system needs a clear owner. We design for responsibility,
          not handoffs, so work doesn't fall between people.
        </p>
      </div>

      <div className={styles.aboutPoint}>
        <h4>We prefer calm over chaos</h4>
        <p>
          We build in a way that reduces stress for teams who live with
          the software after launch. Quiet systems are a sign of good
          decisions.
        </p>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className={styles.aboutRight} ref={page2RightRef}>
      <img src="/aboutpageimage2.png" alt="team discussion" />
    </div>
  </div>
      </div>
      <div className={styles.aboutpage3}  ref={page3Ref}>
  {/* background lines image goes here */}
  <div className={styles.bgLines} ref={page3BgRef}>
    <img src="/aboutpage3line.png" alt="/" width="100%" height="100%"/>
    </div>

  <div className={styles.page3Grid}>
    {/* LEFT */}
    <div className={styles.page3Left} ref={page3LeftRef}>
      <span className={styles.page3Tag}>
        WHEN WE'RE NOT THE RIGHT FIT
      </span>

      <h2 className={styles.page3Heading}>
        Clear boundaries help<br />
        software projects<br />
        succeed.
      </h2>

      {/* dotted arrow placeholder */}
      <div className={styles.dottedArrow}>
         <img src="/aboutpage3arrow.png" alt="/" width="100%" height="100%"/>
      </div>
    </div>

    {/* RIGHT */}
    <div className={styles.page3Right} ref={page3RightRef}>
      <p className={styles.page3Intro}>
        NoCapCode focuses on MVP development, scalable software systems,
        automation, and long-term maintainability. If your expectations
        fall into the areas below, we may not be the right partner —
        and that's intentional.
      </p>

      <div className={styles.page3List}>
        <div className={styles.page3Item}>
          <span className={styles.num}>01</span>
          <div>
            <h4>Cheapest-first builds</h4>
            <p>
              We prioritize long-term software quality over low-cost,
              short-term delivery.
            </p>
          </div>
        </div>

        <div className={styles.page3Item}>
          <span className={styles.num}>02</span>
          <div>
            <h4>Speed without clarity</h4>
            <p>
              We don't start development without defined scope, product
              decisions, and technical direction.
            </p>
          </div>
        </div>

        <div className={styles.page3Item}>
          <span className={styles.num}>03</span>
          <div>
            <h4>UI-only requests</h4>
            <p>
              We build complete systems, not just interfaces. Software
              needs structure beneath the surface.
            </p>
          </div>
        </div>

        <div className={styles.page3Item}>
          <span className={styles.num}>04</span>
          <div>
            <h4>Unclear ownership</h4>
            <p>
              Successful software systems need a clear decision owner.
              Without that, projects slow down or fail.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div className={styles.startHereWrap}  ref={startHereRef}>
  <div className={styles.startHereCard} ref={startHereCardRef}>
    {/* subtle inner vignette */}
    <div className={styles.startHereGlow} ref={startHereGlowRef}/>

    <h2 className={styles.startHereTitle}>Start here</h2>

    <p className={styles.startHereSub}>
      No pitches. No funnels. Just clarity, restraint, and software built with intent.
    </p>

    <button className={styles.startHereBtn} onClick={()=>{navigate("/contact")}} >
      Start a thoughtful Conversation
      <span className={styles.arrow}>↗</span>
    </button>
  </div>
     </div>

        <div className={styles.faq} ref={faqRef}>
      {/* 🔵 background glow placeholder */}
      <div className={styles.faqGlow} />

      <span className={styles.page5first} ref={faqLabelRef}>FAQs</span>

      <h1 className={styles.outcomemainhead} ref={faqHeadRef}>
        <span>We're here to help</span>
      </h1>

      <p className={styles.outcomepara} ref={faqParaRef}>
        <span>FAQs designed to provide the information you need.</span>
      </p>

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
    <div className={styles.conversationWrap} ref={conversationRef}>
  <div className={styles.conversationCard} ref={conversationCardRef}>
    {/* background image / gradient */}
    <div className={styles.conversationBg}  ref={conversationBgRef}/>

    {/* top icon */}
    <div className={styles.conversationIcon}>
      ✦
    </div>

    <h2 className={styles.conversationTitle} >
      Start with a thoughtful conversation
    </h2>

    <p className={styles.conversationSub}>
      No pitches. No pressure. Just clarity on what should be built next.
    </p>
    <button className={styles.startHereBtn1} onClick={()=>{navigate("/clarity")}}>
      Start with Clarity
      <span className={styles.arrow}>↗</span>
    </button>
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
              <span onClick={()=>{navigate("/404")}}><FontAwesomeIcon icon={faXTwitter} /></span>
              <span onClick={()=>{navigate("/404")}}><Instagram size={16} color="rgba(190, 190, 190, 1)"/></span>
              
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
                  <li onClick={scrollToPageabout}
  style={{ cursor: "pointer" }} >FAQs</li>
                <li onClick={()=>{navigate("/clarity")}}
                  style={{ cursor: "pointer" }}>Start with Clarity</li>
            
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


    </div>
  )
}

export default About
