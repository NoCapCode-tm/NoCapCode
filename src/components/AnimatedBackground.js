import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "../CSS/AnimatedBackground.module.css";
import Navbar from "./Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Globe from "./Globe";
import { ChevronDown, Instagram, Linkedin } from "lucide-react";
import { ScrollToPlugin } from "gsap/all";
import { useNavigate,useLocation} from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import useWindowWidth from "./usewindowwidth";
// import SmallNavbar from "./SmallNavbar";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





export default function AnimatedBackground() {
  const mainHeadRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const navbarRef = useRef(null);
  const logRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnIconRef = useRef(null);
  const logoRef = useRef(null)
  const page2LabelRef = useRef(null); 
  const page3LabelRef = useRef(null);  
const page2HeadRef = useRef(null);    
const page2ParaRef = useRef(null);    // subhead
const page2Ref = useRef(null); 
const cardsRef = useRef([]);
const page3Ref = useRef(null);
const page4Ref = useRef(null);
const page3LinesRef = useRef([]);
const page4LinesRef = useRef([]);
const aboutLabelRef = useRef(null);
const aboutParaRef = useRef(null);
const aboutBtnRef = useRef(null);
const boldSectionRef = useRef(null);
const boldHeadRef = useRef(null);
const boldSpanRef = useRef(null);
const page5Ref = useRef(null);
const page5FirstRef = useRef(null);
const imageTextRefs = useRef([]);
const innerLineRef = useRef(null);
const page6Ref = useRef(null);
const page6FirstRef = useRef(null);
const image1TextRefs = useRef([]);
const inner1LineRef = useRef(null);
const [openIndex, setOpenIndex] = useState(null);
const outcomesRef = useRef(null);
const outcomesLabelRef = useRef(null);
const outcomesHeadRef = useRef(null);
const outcomesParaRef = useRef(null);
const outcomeCardsRef = useRef([]);
const faqRef = useRef(null);
const faqLabelRef = useRef(null);
const faqHeadRef = useRef(null);
const faqParaRef = useRef(null);
const faqItemsRef = useRef([]);
const aboutEntryRef = useRef(null);
const location = useLocation();
const width=useWindowWidth()
// const isMobile = ScrollTrigger.isTouch === 1 || window.innerWidth < 768;

ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});




// const smallNavbarRef = useRef(null);

const navigate = useNavigate()

useGSAP(() => {
  if (!location.state?.scrollTo) return;

  const map = {
    howWeWork: page6Ref,
    faq: faqRef,
    about: page4Ref,
  };

  const targetRef = map[location.state.scrollTo];

  if (!targetRef?.current) return;

  gsap.to(window, {
    scrollTo: {
      y: targetRef.current,
      offsetY: 90, // navbar height
    },
    duration: 1.4,
    ease: "power3.out",
  });
}, [location.state]);

useGSAP(() => {
  if (!location.state?.scrollTo) return;

  const map = {
    home: mainHeadRef,
    about: page4Ref,
    howWeWork: page6Ref,
    faq: faqRef,
  };

  const targetRef = map[location.state.scrollTo];
  if (!targetRef?.current) return;

  gsap.to(window, {
    scrollTo: {
      y: targetRef.current,
      offsetY: 90,
    },
    duration: 1.4,
    ease: "power3.out",
  });
}, [location.state]);



useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page3Ref.current,
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





useGSAP(() => {
  const tl = gsap.timeline();

  // tl.from(navbarRef.current, {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1,
  //   ease: "power3.out",
  // })
    tl.from(mainHeadRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    })
    .from(
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
    .from(
      buttonsRef.current.children,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      },
      "-=0.3"
    );
}, []);

useGSAP(() => {
  const slider = logoRef.current;
  const totalWidth = slider.scrollWidth / 2;

  const marqueeTween = gsap.to(slider, {
    x: -totalWidth,
    duration: 25,
    ease: "linear",
    repeat: -1,
  });

  // Hover = slow down
  slider.addEventListener("mouseenter", () => {
    gsap.to(marqueeTween, {
      timeScale: 2, // slow speed
      duration: 3,
      ease: "power2.out",
    });
  });

  // Leave = normal speed
  slider.addEventListener("mouseleave", () => {
    gsap.to(marqueeTween, {
      timeScale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  });

}, []);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page2Ref.current,
      start: "top 95%",
      end: "bottom 100%",
      // markers:true,
      scrub: 1,
    },
  });

  // Label
  tl.from(page2LabelRef.current, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out",
  })

  // Heading
  .from(page2HeadRef.current, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out",
  }, "+=0.1")

  // Subhead
  .from(page2ParaRef.current.children, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.25,
    ease: "power3.out",
  }, "+=0.1")

  // LEFT CARD → from left
  .from(cardsRef.current[0], {
    opacity: 0,
    x: -120,
    duration: 0.9,
    ease: "power3.out",
  }, "+=0.2")

  // CENTER CARD → from bottom
  .from(cardsRef.current[1], {
    opacity: 0,
    y: 100,
    duration: 0.9,
    ease: "power3.out",
  }, "-=0.6")

  // RIGHT CARD → from right
  .from(cardsRef.current[2], {
    opacity: 0,
    x: 120,
    duration: 0.9,
    ease: "power3.out",
  }, "-=0.6");

}, []);

useGSAP(() => {
  const words = page3LinesRef.current;

  // initial grey
  gsap.set(words, {
    color: "#424040",
  });

  gsap.to(words, {
    color: "#ffffff",
    stagger: 0.08,     // word by word
    ease: "none",
    scrollTrigger: {
      trigger: page3Ref.current,
      start: "top 80%",   // page3 thoda screen me aaye
      end: "bottom 100%",  // page3 nikalte nikalte
      scrub: 5,        //  scroll speed = animation speed
      pin: false,         //   NO PIN
    },
  });
}, []);
useGSAP(() => {
  const isMobile = width <= 800;

  // initial state
  gsap.set(page4LinesRef.current, {
    color: "#424040",
  });

  gsap.to(page4LinesRef.current, {
    color: "#ffffff",
    stagger: 0.08,
    ease: "none",
    scrollTrigger: {
      trigger: page4Ref.current,
      start: "top 50%",
      end: "+=700",
      scrub: isMobile ? 1 : 5,
      pin: !isMobile,
      pinSpacing: !isMobile, // VERY IMPORTANT
      invalidateOnRefresh: true,
    },
  });
}, [width]);



useGSAP(() => {
  const isMobile = width <= 800;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutEntryRef.current,
      start: "top 85%",
      toggleActions: "play none none reverse",
      scrub: isMobile ? false : 2,   //  KEY FIX
    },
  });

  tl.from(aboutLabelRef.current, {
    opacity: 0,
    y: 20,
    duration: 0.35,
    ease: "power2.out",
  })
    .from(
      page4LinesRef.current,
      {
        opacity: 0,
        y: 16,
        stagger: isMobile ? 0.01 : 0.03, //  lighter on mobile
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      aboutParaRef.current.children,
      {
        opacity: 0,
        y: 14,
        stagger: isMobile ? 0.08 : 0.2,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=0.15"
    )
    .from(
      aboutBtnRef.current,
      {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.1"
    );
}, [width]);


const marqueeRef = useRef(null);

useGSAP(() => {
  const el = marqueeRef.current;
  const blockWidth = el.scrollWidth / 3;

  // start from left filled position
  gsap.set(el, { x: -blockWidth });

  gsap.to(el, {
    x: 0,
    duration: 18,
    ease: "linear",
    repeat: -1,
  });
}, []);





useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: boldSectionRef.current,
      start: "top 75%",
      toggleActions: "play none none reverse",
      scrub:5
    },
  });

  tl.from(boldHeadRef.current, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    ease: "power3.out",
  })
  .from(
    boldSpanRef.current,
    {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.3"
  );
}, []);


useGSAP(() => {
  const items = imageTextRefs.current;
  const total = items.length;

  const isDesktop = width > 900;

  // reset
  gsap.set(items, { clearProps: "all" });
  gsap.set(innerLineRef.current, { width: "0%" });

  if (!isDesktop) {
  const container = page5Ref.current.querySelector(
    `.${styles.allimageandtext}`
  );

  // force horizontal carousel layout
  gsap.set(container, {
    position: "relative",
    overflow: "hidden",
  });

  gsap.set(items, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    autoAlpha: 0,
    x: 120,
  });

  // show first slide
  gsap.set(items[0], { autoAlpha: 1, x: 0 });

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.3,
    defaults: { ease: "power3.inOut" },
    scrollTrigger: {
      trigger: page5Ref.current,
      start: "top 80%",
      once: true,
    },
  });

  items.forEach((item, i) => {
    const next = items[(i + 1) % total];

    // HOLD center
    tl.to({}, { duration: 1 });

    // current → slide out right
    tl.to(item, {
      autoAlpha: 0,
      x: 120,
      duration: 0.6,
    });

    // next → slide in from left
    tl.fromTo(
      next,
      { autoAlpha: 0, x: -120 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.6,
      },
      "-=0.45"
    );

    // progress line
    tl.to(
      innerLineRef.current,
      {
        width: `${((i + 1) / total) * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );
  });

  /* =========================
     🛑 PAUSE ON HOVER / HOLD
     ========================= */

  const pause = () => tl.pause();
  const resume = () => tl.resume();

  // mouse hover (tablet / desktop small)
  container.addEventListener("mouseenter", pause);
  container.addEventListener("mouseleave", resume);

  // touch hold (mobile)
  container.addEventListener("touchstart", pause, { passive: true });
  container.addEventListener("touchend", resume);
  container.addEventListener("touchcancel", resume);

  return;
}




  gsap.set(items, { autoAlpha: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page5Ref.current,
      start: "top top",
      end: `+=${total * 120}%`,
      scrub: 4,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
    },
  });

  tl.from(page5FirstRef.current, {
    opacity: 0,
    y: 40,
    duration: 0.5,
    ease: "power3.out",
  }).from(
    page5Ref.current.querySelector(`.${styles.page5para}`),
    {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.2"
  );

  items.forEach((item, i) => {
    const text = item.querySelector(`.${styles.imagetext}`);
    const image = item.querySelector(`.${styles.image}`);

    tl.to(item, { autoAlpha: 1, duration: 0.1 })
      .from(text, {
        x: -80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(
        image,
        {
          x: -80,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        innerLineRef.current,
        {
          width: `${((i + 1) / total) * 100}%`,
          duration: 0.4,
        },
        "-=0.2"
      )
      .to({}, { duration: 0.7 })
      .to(item, { autoAlpha: 0, duration: 0.25 });
  });
}, [width]);






useGSAP(() => {
  const items = image1TextRefs.current;
  const total = items.length;

  const isDesktop = width > 900;

  // reset
  gsap.set(items, { clearProps: "all" });
  gsap.set(inner1LineRef.current, { width: "0%" });

   if (!isDesktop) {
  const container = page6Ref.current.querySelector(
    `.${styles.allimageandtext}`
  );

  // force horizontal carousel layout
  gsap.set(container, {
    position: "relative",
    overflow: "hidden",
  });

  gsap.set(items, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    autoAlpha: 0,
    x: 120,
  });

  // show first slide
  gsap.set(items[0], { autoAlpha: 1, x: 0 });

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.3,
    defaults: { ease: "power3.inOut" },
    scrollTrigger: {
      trigger: page6Ref.current,
      start: "top 80%",
      once: true,
    },
  });

  items.forEach((item, i) => {
    const next = items[(i + 1) % total];

    // HOLD center
    tl.to({}, { duration: 1 });

    // current → slide out right
    tl.to(item, {
      autoAlpha: 0,
      x: 120,
      duration: 0.6,
    });

    // next → slide in from left
    tl.fromTo(
      next,
      { autoAlpha: 0, x: -120 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.6,
      },
      "-=0.45"
    );

    // progress line
    tl.to(
      inner1LineRef.current,
      {
        width: `${((i + 1) / total) * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );
  });

  const pause = () => tl.pause();
  const resume = () => tl.resume();

  // mouse hover 
  container.addEventListener("mouseenter", pause);
  container.addEventListener("mouseleave", resume);

  // touch hold
  container.addEventListener("touchstart", pause, { passive: true });
  container.addEventListener("touchend", resume);
  container.addEventListener("touchcancel", resume);

  return;
}


  gsap.set(items, { autoAlpha: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page6Ref.current,
      start: "top top",
      end: `+=${total * 120}%`,
      scrub: 4,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
    },
  });

  tl.from(page6FirstRef.current, {
    opacity: 0,
    y: 40,
    duration: 0.5,
    ease: "power3.out",
  }).from(
    page6Ref.current.querySelector(`.${styles.page5para}`),
    {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.2"
  );

  items.forEach((item, i) => {
    const text = item.querySelector(`.${styles.imagetext}`);
    const image = item.querySelector(`.${styles.image}`);

    tl.to(item, { autoAlpha: 1, duration: 0.1 })
      .from(text, {
        x: -80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(
        image,
        {
          x: -80,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        inner1LineRef.current,
        {
          width: `${((i + 1) / total) * 100}%`,
          duration: 0.4,
        },
        "-=0.2"
      )
      .to({}, { duration: 0.7 })
      .to(item, { autoAlpha: 0, duration: 0.25 });
  });
}, [width]);
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: outcomesRef.current,
      start: "top 70%",
      end: "bottom 60%",
      scrub: 5,
    },
  });

  //   Label
  tl.from(outcomesLabelRef.current, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out",
  })

  //   Heading
  .from(outcomesHeadRef.current, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out",
  }, "+=0.1")

  //   Subheading
  .from(outcomesParaRef.current.children, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.2,
    ease: "power3.out",
  }, "+=0.1")

  //   LEFT CARD
  .from(outcomeCardsRef.current[0], {
    opacity: 0,
    x: -120,
    duration: 0.9,
    ease: "power3.out",
  }, "+=0.2")

  //   CENTER CARD
  .from(outcomeCardsRef.current[1], {
    opacity: 0,
    y: 120,
    duration: 0.9,
    ease: "power3.out",
  }, "-=0.6")

  //   RIGHT CARD
  .from(outcomeCardsRef.current[2], {
    opacity: 0,
    x: 120,
    duration: 0.9,
    ease: "power3.out",
  }, "-=0.6");

}, []);
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: faqRef.current,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 5,
    },
  });

  //   Label
  tl.from(faqLabelRef.current, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    ease: "power3.out",
  })

  //   Heading
  .from(faqHeadRef.current, {
    opacity: 0,
    y: 60,
    duration: 0.7,
    ease: "power3.out",
  }, "+=0.1")

  //   Subheading
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

const scrollToPage6 = () => {
  if (!page6Ref.current) return;

  gsap.to(window, {
    duration: 1.4,
    scrollTo: {
      y: page6Ref.current,
      offsetY: 80, // navbar ke liye thoda gap
    },
    ease: "power3.out",
  });
};
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

const scrollToPagework = () => {
  if (!page6FirstRef.current) return;

  gsap.to(window, {
    duration: 1.4,
    scrollTo: {
      y: page6FirstRef.current,
      offsetY: 80, // navbar ke liye thoda gap
    },
    ease: "power3.out",
  });
};




 const logo = [
    { src: "/Masdar.png" },
    { src: "/Amazon.png" },
    { src: "/Byjus.png" },
    { src: "/Bajaj.png" },
    { src: "/Terranova.png" },
    { src: "/Qasper Agro.png" },
  ];



const faqs = [
  {
    q: "What kind of companies do you work with?",
    a: "We work with early-stage founders, small teams, and growing businesses that need reliable software systems not just quick prototypes. Most of our work involves MVP development, internal tools, automation, and scalable product systems."
  },
  {
    q: "Can you help if I’m not sure what needs to be built yet?",
    a: "Yes. Many projects start with clarity, not code. We help define scope, remove unnecessary features, and make decisions before development begins often saving time and cost later."
  },
  {
    q: "Do you only build MVPs, or do you also improve existing systems?",
    a: "We do both. We build new products from scratch and also improve existing software that has become fragile, slow, or hard to change. The goal is always stability and long-term usability."
  },
  {
    q: "How do you price and scope projects?",
    a: "We scope work based on clarity, not guesses. After understanding your problem, we define what should be built, what shouldn’t, and what risks exist. Pricing follows that reality not fixed packages."
  },
  {
    q: "Are you an agency or a long-term partner?",
    a: "We're neither a typical agency nor a staffing service. We act as an execution partner focused on decision quality, system stability, and outcomes whether that’s a short engagement or ongoing work."
  }
];
  const page3TextLines = [
  "Every system we build is shaped",
  "by clear decisions, real ownership,",
  "and standards that hold up as",
  "products grow."
];

const page4TextLines = [
  "NoCapCode exists to remove",
  "unnecessary complexity from",
  "building software.",
  "We work with people who",
  "care less about sounding",
  "impressive and more about ",
  "shipping things that actually",
  " work."
];

  return (
    <>
    <div className={styles.container}>
      {/* Background */}
      <video
  className={styles.videoBg}
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/bg1.mp4" type="video/mp4" />
</video>

      {/* Content */}
      <div className={styles.content}>
       <Navbar ref={navbarRef} homeRef={mainHeadRef} logoRef={logRef} btnTextRef={btnTextRef} btnIconRef={btnIconRef} aboutRef={page4Ref} serviceRef={page6FirstRef} />


        {/* <SmallNavbar ref={smallNavbarRef} /> */}

        {/* 1️Heading */}
        <h1 ref={mainHeadRef} className={styles.mainhead}>
  <span>We build usable software for</span>
  <span>people who care about</span>
  <span>execution.</span>
</h1>


        {/* 2️Paragraph */}
        <p ref={paraRef}>
  <span>NoCapCode helps founders and teams turn ideas into <b>stable, working systems</b></span>
  
  <span>without overengineering, buzzwords, or handoffs that break later.</span>
</p>


        {/* 3Buttons */}
        <div ref={buttonsRef} className={styles.buttons}>
          <button className={styles.firstbutt} onClick={()=>{navigate("/clarity")}}>Start with clarity</button>
          <button className={styles.secondbutt} onClick={scrollToPagework}>See how it works</button>
        </div>

        {/* Marquee */}
       <div className={styles.marquee}> 
  <span className={styles.marqueehead}>
    Experience shaped by real-world teams
  </span>

  <div className={styles.rowsliderWrapper}>
    <div className={styles.rowslider} ref={logoRef}>
      {[...logo, ...logo].map((i, index) => (
        <div className={styles.logo} key={index}>
          <img src={i.src} alt="logo" height="100%" width="100%" />
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>

     <div className={styles.page3} ref={page3Ref}>
      <div  className={styles.globkeeper} style={{ width: "600px", height: "600px" }}>
  <Globe />
      </div>
     <div className={styles.page3text}>
       <span className={styles.first} ref={page3LabelRef}>Standards We Build By</span>
      <h4 className={styles.mainhead2}>
  {page3TextLines.map((line, lineIndex) => (
    <React.Fragment key={lineIndex}>
      {line.split(" ").map((word, wordIndex) => {
        const index =
          page3TextLines
            .slice(0, lineIndex)
            .join(" ")
            .split(" ").length + wordIndex;

        return (
          <span
            key={index}
            ref={(el) => (page3LinesRef.current[index] = el)}
            style={{ display: "inline-block", marginRight: "6px" }}
          >
            {word}
          </span>
        );
      })}
      <br />
    </React.Fragment>
  ))}
      </h4>
      <div className={styles.kip}>
        <div className={styles.kipcard}>
          <h1>0</h1>
          <span>Throwaway MVP</span>
        </div>
        <div className={styles.kipcard}>
          <h1>100%</h1>
          <span>Iteration Ready Systems</span>
        </div>
        <div className={styles.kipcard}>
          <h1>1</h1>
          <span>Clear System Owner</span>
        </div>
        <div className={styles.kipcard}>
          <h1>100%</h1>
          <span>Decisions Made Before Code</span>
        </div>
      </div>


     </div>
    </div>
    <div className={styles.page2} ref={page2Ref}>
      <span className={styles.first} ref={page2LabelRef}>WHAT WE DO</span>
      <h1 ref={page2HeadRef} className={styles.mainhead1}>We build what makes products last.</h1>
      <p ref={page2ParaRef} className={styles.subhead1}>
  <span>We focus on the work that turns ideas into usable, sustainable systems </span>
  
  <span>without losing clarity in the process.</span>
  <div className={styles.cards1}>
    <div
  className={styles.firstcard}
  ref={(el) => (cardsRef.current[0] = el)}
>
      <div className={styles.cardimage}>
         <img src="/img2.png" alt="logo" height="100%" width="100%" />
      </div>
      <div className={styles.cardtext}>
        <h4>Build</h4>
        <span>We turn ideas into usable products
designed to evolve, not to be replaced.</span>
      </div>
    </div>
     <div
  className={styles.firstcard}
  ref={(el) => (cardsRef.current[1] = el)}
>
      <div className={styles.cardimage}>
         <img src="/img3.png" alt="logo" height="100%" width="100%" />
      </div>
      <div className={styles.cardtext}>
        <h4>Stabilize</h4>
        <span>We replace manual work and scattered tools with systems that run quietly and reliably.</span>
      </div>
    </div>
     <div
  className={styles.firstcard}
  ref={(el) => (cardsRef.current[2] = el)}
>
      <div className={styles.cardimage}>
         <img src="/img1.png" alt="logo" height="100%" width="100%" />
      </div>
      <div className={styles.cardtext}>
        <h4>Decide</h4>
        <span>We help you make the right calls early, before code turns decisions into debt.</span>
      </div>
    </div>
  </div>
  </p>
  <div className={styles.boldtext}  ref={boldSectionRef}>
   <h1 className={styles.boldtexthead} ref={boldHeadRef}>We don't try to do everything.</h1>
   <span  ref={boldSpanRef}>We focus on what helps products move from</span>
  <div className={styles.marqueeWrap}>
  <div className={styles.marqueeInner} ref={marqueeRef}>
    {[...Array(3)].map((_, i) => (
      <h1 key={i} className={`${styles.IUS} ${styles.gradientText}`}>
        Idea → Usable → Sustainable →&nbsp;&nbsp;
      </h1>
    ))}
  </div>
</div>




  </div>
  
    </div>
    <div className={styles.aboutpage}>
        <video
  className={styles.videoBg}
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/bg3.mp4" type="video/mp4" width="20%" />
</video>

      {/* Content */}
      <div className={styles.aboutcontent} ref={page4Ref}>
        
         <div className={styles.aboutheadmore} ref={aboutEntryRef}>
           <span className={styles.aboutfirst} ref={aboutLabelRef} >ABOUT</span>
                <h4 className={styles.mainhead3}>
  {page4TextLines.map((line, lineIndex) => (
    <React.Fragment key={lineIndex}>
      {line.split(" ").map((word, wordIndex) => {
        const index =
          page4TextLines
            .slice(0, lineIndex)
            .join(" ")
            .split(" ").length + wordIndex;

        return (
          <span
            key={index}
            ref={(el) => (page4LinesRef.current[index] = el)}
            style={{ display: "inline-block", marginRight: "6px" }}
          >
            {word}
          </span>
        );
      })}
      <br />
    </React.Fragment>
  ))}
                </h4>
      <p className={styles.aboutpara} ref={aboutParaRef}>
  <span>Most digital products don't fail because of bad code.</span>
  
  <span>They fail because the wrong things were built with confidence.We help prevent that.</span>
</p>
      <button className={styles.aboutbutt}  ref={aboutBtnRef}>Read our thinking</button>
         </div>
      
      </div>
    </div>
    <div className={styles.page5} ref={page5Ref}>
      <span className={styles.page5first} ref={page5FirstRef}>WHO WE WORK WITH</span>
      <p  className={`${styles.page5para} ${styles.gradienttext}`}>
      <span>We work with people who are serious</span>
      <span>about building and honest about what </span>
      <span>they don't know yet.</span>
     </p>
     <div className={styles.allimageandtext}>
       <div className={styles.imageandtext} ref={el => imageTextRefs.current[0] = el}>
      <div className={styles.imagetext} >
         <h3>Founders & Early-Stage Teams</h3>
         <span>People building their first or second<br/> product and trying to get it right from<br/> the start.</span>
      </div>
      <div className={styles.image}>
        <img src="/team1.png" alt="/" height="100%" width="100%"/>
      </div>
     </div>
      <div className={styles.imageandtext} ref={el => imageTextRefs.current[2] = el}>
      <div className={styles.imagetext}>
         <h3>Creators & Solo Builders</h3>
         <span>Independent builders turning knowledge, tools,<br/> or audiencesinto real products.product and <br/>trying  to get itright from the start.</span>
      </div>
      <div className={styles.image}>
        <img src="/team3.png" alt="/" height="100%" width="100%"/>
      </div>
     </div>
     <div className={styles.imageandtext} ref={el => imageTextRefs.current[1] = el}>
      <div className={styles.imagetext} >
         <h3>Teams Improving Their Systems</h3>
         <span>Teams that already exist but feel slowed<br/> down by process or tooling. product and trying to get it<br/> right from the start.</span>
      </div>
      <div className={styles.image}>
        <img src="/team2.png" alt="/" height="100%" width="100%"/>
      </div>
     </div>
    </div>

    
     <div className={styles.outerline}>
      <div className={styles.innerline} ref={innerLineRef}/>
      </div>
    </div>
    <div className={styles.page6} ref={page6Ref}>
      <span className={styles.page5first} ref={page6FirstRef}>HOW WE WORK</span>
      <p  className={`${styles.page5para} ${styles.gradienttext}`}>
      <span>We work with people who are serious</span>
      <span>about building and honest about what </span>
      <span>they don't know yet.</span>
     </p>
     <div className={styles.allimageandtext}>
       <div className={styles.imageandtext1} ref={el => image1TextRefs.current[0] = el}>
      <div className={styles.imagetext} >
         <h3>Understand the Problem</h3>
         <span>We start by asking hard questions early<br/> so we don't build the wrong thing<br/> with confidence.</span>
      </div>
      <div className={styles.image}>
        <img src="/work1.png" alt="/" height="100%" width="100%"/>
      </div>
     </div>
     <div className={styles.imageandtext1} ref={el => image1TextRefs.current[1] = el}>
      <div className={styles.imagetext} >
         <h3>Define the Smallest Useful Version</h3>
         <span>We narrow the scope to what actually<br/> needs to exist first, and intentionally<br/> leave the rest out.</span>
      </div>
      <div className={styles.image}>
        <img src="/work2.png" alt="/" height="100%" width="100%"/>
      </div>
     </div>
      <div className={styles.imageandtext1} ref={el => image1TextRefs.current[2] = el}>
      <div className={styles.imagetext}>
         <h3>Build Lean, Stable Systems</h3>
         <span>We use sensible tech and clean<br/> architecture to build systems that are reliable<br/> and easy to evolve.</span>
      </div>
      <div className={styles.image}>
        <img src="/work3.png" alt="/" height="100%" width="100%"/>
      </div>
     </div>
      <div className={styles.imageandtext1} ref={el => image1TextRefs.current[3] = el}>
      <div className={styles.imagetext}>
         <h3>Iterate With Real Feedback</h3>
         <span>We improve based on usage and<br/> outcomes not assumptions or opinions.</span>
      </div>
      <div className={styles.image}>
        <img src="/work4.png" alt="/" height="100%" width="100%"/>
      </div>
     </div>
    

     </div>

    
     <div className={styles.outerline}>
      <div className={styles.innerline} ref={inner1LineRef}/>
      </div>
    </div>
    <div className={styles.outcomes} ref={outcomesRef}>
      <span className={styles.page5first}  ref={outcomesLabelRef}>HOW WE WORK</span>
          <h1 className={styles.outcomemainhead}  ref={outcomesHeadRef}>
             <span>What Improves When the System Is Right</span>
          </h1>


        {/*   Paragraph */}
        <p  className={styles.outcomepara} ref={outcomesParaRef}>
           <span>Discover the key benefits of partnering with us.</span>
        </p>
         <div className={styles.cards12}>
    <div
  className={styles.firstcard1}
  ref={(el) => (outcomeCardsRef.current[0] = el)}
>
      <div className={styles.cardimage1}>
        <img src="/Compass.png" height="100%" width="100%" alt="/" />
      </div>
      <div className={styles.cardtext1}>
        <h4>Decide Once</h4>
        <span>Clear product and system decisions are made early, documented, and reused so teams avoid repeated debates and delays.</span>
      </div>
    </div>
     <div
  className={styles.firstcard1}
  ref={(el) => (outcomeCardsRef.current[1] = el)}
>
      <div className={styles.cardimage1}>
         <img src="/Animated.png" alt="logo" height="100%" width="100%" />
      </div>
      <div className={styles.cardtext1}>
        <h4>Change Safely</h4>
        <span>Scalable software systems are built to handle updates without breaking features, workflows, or dependent operations.</span>
      </div>
    </div>
     <div
  className={styles.firstcard1}
  ref={(el) => (outcomeCardsRef.current[2] = el)}
>
      <div className={styles.cardimage1}>
         <img src="/Samsung.png" alt="logo" height="100%" width="100%" />
      </div>
      <div className={styles.cardtext1}>
        <h4>Run Quietly</h4>
        <span>Automation and reliable systems reduce operational noise, helping teams focus on  product, customers, and growth.</span>
      </div>
    </div>
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
                <li onClick={scrollToPage6} style={{ cursor: "pointer" }}>How We Work</li>
                <li onClick={()=>{
                  navigate("/casestudies")}} style={{ cursor: "pointer" }}>Case Studies</li>
                <li onClick={()=>{
                  navigate("/about")
                  window.scrollTo(0,0);}} style={{ cursor: "pointer" }}>About NoCapCode</li>
                  <li  onClick={scrollToPageabout} style={{ cursor: "pointer" }}>FAQs</li>
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
}
