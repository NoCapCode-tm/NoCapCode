import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";  // By Om
import styles from "../CSS/ClarityForm.module.css";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router";
import useWindowWidth from "./usewindowwidth";
import { toast } from "react-toastify";
import axios from "axios"
import LoaderDots from './LoaderDots';
import Footer from './Footer';

export default function ClarityForm() {
    const navbarRef = useRef(null);
    const logRef = useRef(null);
    const btnTextRef = useRef(null);
    const btnIconRef = useRef(null);
    const startRef = useRef(null);
    // const navigate=useNavigate()
    const[loading,setLoading]=useState(false)
    const width = useWindowWidth()
    const [responses, setResponses] = useState({});

    const handleChange = (id, value) => {
  setResponses((prev) => ({
    ...prev,
    [id]: value,
  }));
};


    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: startRef.current,
            start: "top top",
            toggleActions: "play play play reverse",
          },
        });
      
        const isMobile = width <= 800;

  tl.to(navbarRef.current, {
    width: isMobile ? "50%" : 440,   //  fixed
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

      const clarityQuestions = [
  {
    id: 1,
    question: "Full Name",
    placeholder: "Enter Your Full Name",
  },
  {
    id: 2,
    question: "Email",
    placeholder: "Enter Your Email",
  },
  {
    id: 3,
    question: "What are you trying to build?",
    placeholder: "One or two sentences are enough. No pitching just describe it plainly.",
  },
  {
    id: 4,
    question: "Who is this for?",
    placeholder: "Be specific. “Everyone” usually means no one.",
  },
  {
    id: 5,
    question: "What problem are you trying to solve?",
    placeholder: "Not features — the real problem behind them.",
  },
  {
    id: 6,
    question: "What's unclear or stuck right now?",
    placeholder: "This helps us understand where support is needed most.",
  },
  {
    id: 7,
    question: "What exists today?",
    placeholder: "An idea, a prototype, early users, or nothing yet all are fine.",
  },
  {
    id: 8,
    question: "Why now?",
    placeholder: "What made this worth starting at this moment?",
  },
  {
    id: 9,
    question: "What kind of help are you looking for?",
    placeholder: "MVP build, product direction, validation, execution, or something else.",
  },
];


const handleSubmit = async () => {
  const finalPayload = clarityQuestions.map((item) => ({
    questionId: item.id,
    question: item.question,
    answer: responses[item.id] || "",
  }));
  console.log(finalPayload[0].answer)

  try {
    setLoading(true)
    const response = await axios.post("https://nocapcode-backend-hapd.onrender.com/api/v1/job/clarity", {
      clarityresponse :finalPayload
    },{withCredentials:true});
    console.log(response.data.message)
    toast.success("Form Submitted Successfully");
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error.message)
  }finally{
    setLoading(false)
  }
};




  return (
    <>

  {/*
  edit: added advanced SEO optimization, OpenGraph metadata,
  Twitter metadata, Service schema, ContactPage schema,
  breadcrumb schema, and indexing optimization for better
  Google understanding, authority, and sitelinks eligibility. By Om
  */}

  <Helmet>

    {/* Primary SEO */}
    <title>
      Start With Clarity | MVP Planning, SaaS Strategy & AI Automation
    </title>

    <meta
      name="description"
      content="Talk through your SaaS idea, MVP, AI automation system, startup product, or software architecture with NoCapCode before development begins. Start with clarity, not chaos."
    />

    <meta
      name="keywords"
      content="MVP planning, SaaS strategy, startup product consulting, AI automation consulting, software architecture planning, product clarity session, technical consulting"
    />

    <meta
      name="robots"
      content="index, follow, max-image-preview:large"
    />

    <link
      rel="canonical"
      href="https://nocapcode.cloud/#/clarity"
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
      content="Start With Clarity | NoCapCode"
    />

    <meta
      property="og:description"
      content="Discuss your MVP, SaaS platform, AI automation system, or startup product before development begins."
    />

    <meta
      property="og:url"
      content="https://nocapcode.cloud/#/clarity"
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
      content="Start With Clarity | NoCapCode"
    />

    <meta
      name="twitter:description"
      content="Plan your SaaS product, MVP, AI automation system, or scalable software architecture with clarity before development starts."
    />

    <meta
      name="twitter:image"
      content="https://nocapcode.cloud/internal/og-cover.png"
    />

    {/* Clarity Session Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Software Product Strategy & MVP Planning",
        "name": "Start With Clarity",
        "provider": {
          "@type": "Organization",
          "name": "NoCapCode",
          "url": "https://nocapcode.cloud/"
        },
        "url": "https://nocapcode.cloud/#/clarity",
        "description":
          "Strategic software planning sessions for SaaS products, AI automation systems, MVPs, startup software, and scalable digital platforms.",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      })}
    </script>

    {/* WebPage Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Start With Clarity",
        "url": "https://nocapcode.cloud/#/clarity",
        "description":
          "Talk through your software idea, MVP, SaaS platform, AI automation system, or startup product before development begins.",
        "isPartOf": {
          "@type": "WebSite",
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
            "name": "Start With Clarity",
            "item": "https://nocapcode.cloud/#/clarity"
          }
        ]
      })}
    </script>

  </Helmet>

    {loading && <LoaderDots text="Submitting Clarity Form" />}
    <div className={styles.page}>
      {/* Top heading */}
       <Navbar
  ref={navbarRef}
  logoRef={logRef}
  btnTextRef={btnTextRef}
  btnIconRef={btnIconRef}
/>

      <div className={styles.abboutpage0}>
      <h1 >Built <pre>with</pre><span>Clarity</span></h1>
      <p className={styles.aboutpara} >
        <span>NoCapCode exists to help people build software that holds up</span>
         <span>not just at launch, but when real usage begins.</span>
      </p>
      </div>
      <div className={styles.divider1}>
        <h2 className={`${styles.claritytext} ${styles.gradienttext}`}>Clarity Questions</h2>
        <p className={styles.subtext}>
          Please answer in your own words. There are no right or wrong answers.
        </p>

      </div>

      {/* Main card */}
      <section className={styles.card} ref={startRef}>
        <div className={styles.form}>
        {clarityQuestions.map((item) => (
  <div key={item.id} className={styles.field}>
    <label>{item.question}</label>
    <input
      placeholder={item.placeholder}
      value={responses[item.id] || ""}
      onChange={(e) => handleChange(item.id, e.target.value)}
    />
  </div>
))}

        </div>
      </section>

      {/* Submit */}
      <div className={styles.submitWrap} onClick={handleSubmit} >
        <button>
          Submit for review <span>→</span>
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
}
