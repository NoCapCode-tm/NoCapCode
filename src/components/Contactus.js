import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";  // By Om
import styles from "../CSS/Contactus.module.css";
import { Mail, MapPin } from "lucide-react";
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
  const btnIconRef = useRef(null)
  const startRef = useRef(null);
  const width = useWindowWidth()
  const[loading,setLoading]=useState(false)
  const[name,setname]=useState("Name");
    const[email,setemail]=useState("Email")
    const[message,setmessage]=useState("Enter your message")


 const handleSubmit = async(e) => {
  e.preventDefault();

  // Trim values
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  //Empty field validation
  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    toast.error("Please fill all fields");
    return;
  }

  //  Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    toast.error("Please enter a valid email address");
    return;
  }

   try {
    setLoading(true)
    const response = await axios.post("https://nocapcode-backend-hapd.onrender.com/api/v1/job/contactus",{
     name:name,
     email:email,
     message:message
    },{withCredentials:true})
    console.log(response.data);
    toast.success("Form Submitted Successfully")
    setname("")
    setemail("")
    setmessage("")
   } catch (error) {
    toast.error("Something Went Wrong")
    console.log(error.message)
   }finally{
     setLoading(false)
   }
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
  // const navigate = useNavigate()
  return (
    <>

  <Helmet>

    {/* Primary SEO */}
    <title>
      Contact NoCapCode | SaaS, AI Automation & Software Development
    </title>

    <meta
      name="description"
      content="Contact NoCapCode for SaaS development, AI automation systems, MVP engineering, custom software development, scalable web applications, and startup technology solutions."
    />

    <meta
      name="keywords"
      content="contact software company, SaaS development company, AI automation agency, startup software partner, MVP developers, web application development, custom software services"
    />

    <meta
      name="robots"
      content="index, follow, max-image-preview:large"
    />

    <link
      rel="canonical"
      href="https://nocapcode.cloud/#/contact"
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
      content="Contact NoCapCode"
    />

    <meta
      property="og:description"
      content="Talk to NoCapCode about SaaS products, AI automation systems, MVP development, scalable software architecture, and digital product engineering."
    />

    <meta
      property="og:url"
      content="https://nocapcode.cloud/#/contact"
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
      content="Contact NoCapCode"
    />

    <meta
      name="twitter:description"
      content="Discuss your SaaS platform, AI automation system, startup software, or MVP with NoCapCode."
    />

    <meta
      name="twitter:image"
      content="https://nocapcode.cloud/internal/og-cover.png"
    />

    {/* Contact Page Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact NoCapCode",
        "url": "https://nocapcode.cloud/#/contact",
        "description":
          "Contact NoCapCode for SaaS development, MVP engineering, AI automation systems, websites, and scalable software products."
      })}
    </script>

    {/* Organization Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NoCapCode",
        "url": "https://nocapcode.cloud/",
        "logo": "https://nocapcode.cloud/favicon/favicon-96x96.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@nocapcode.cloud",
          "contactType": "customer support",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/nocapcode",
          "https://www.instagram.com/nocapcode.cloud",
          "https://x.com/nocapcodecloud"
        ]
      })}
    </script>

    {/* Local Business Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "NoCapCode",
        "url": "https://nocapcode.cloud/",
        "image": "https://nocapcode.cloud/internal/og-cover.png",
        "description":
          "Software development company building SaaS products, AI automation systems, MVPs, scalable web applications, and startup software solutions.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Santa Fe",
          "addressRegion": "New Mexico",
          "postalCode": "87501",
          "addressCountry": "US"
        },
        "email": "hello@nocapcode.cloud",
        "areaServed": "Worldwide"
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
            "name": "Contact",
            "item": "https://nocapcode.cloud/#/contact"
          }
        ]
      })}
    </script>

  </Helmet>

    {loading && <LoaderDots text="Submitting Enquiry" />}
    <section className={styles.contact}>
     <Navbar
      ref={navbarRef}
      logoRef={logRef}
      btnTextRef={btnTextRef}
      btnIconRef={btnIconRef}
    />
      <div className={styles.wrapper} ref={startRef}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1>
            Ask whatever you have in <br /> your mind
          </h1>

          <p>
            Whether you have questions or are ready to discuss your business,
            we’re here to help. Reach out today.
          </p>

          <div className={styles.info}>
            <span>
              <Mail size={14} /> hello@nocapcode.cloud
            </span>
            <span>
              <MapPin size={14} />Santa Fe NM 87501,{width<=500 ?<br/>:""} United States
            </span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
             <input type="text" placeholder="Steve Harrington" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} onClick={()=>{setname("")}}/>

            <label>Email</label>
            <input type="text" placeholder="steve@gmail.com" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} onClick={()=>{setemail("")}}/>

            <label>Message</label>
            <textarea placeholder="Hi, I'm reaching out for..." value={message} name="message" onChange={(e)=>{setmessage(e.target.value)}} onClick={()=>{setmessage("")}} />

            <button type="submit">Submit</button>

          </form>
        </div>
      </div>
       
    </section>
      <Footer/>
    </>
  );
};

export default Contactus;
