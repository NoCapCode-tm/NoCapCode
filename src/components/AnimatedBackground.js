import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "../CSS/AnimatedBackground.module.css";
import Navbar from "./Navbar";

export default function AnimatedBackground() {
  const mainHeadRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const navbarRef = useRef(null)
  const logoRef = useRef(null)

useGSAP(() => {
  const tl = gsap.timeline({delay:2.2});

  tl.from(navbarRef.current, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  })
    .from(mainHeadRef.current.children, {
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







  const logo = [
    { src: "/Masdar.png" },
    { src: "/Amazon.png" },
    { src: "/Byjus.png" },
    { src: "/Bajaj.png" },
    { src: "/Terranova.png" },
    { src: "/Qasper Agro.png" },
  ];

  return (
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
        <Navbar  ref={navbarRef}/>

        {/* 1️⃣ Heading */}
        <h1 ref={mainHeadRef} className={styles.mainhead}>
  <span>We build usable software for</span>
  <span>people who care about</span>
  <span>execution.</span>
</h1>


        {/* 2️⃣ Paragraph */}
        <p ref={paraRef}>
  <span>NoCapCode helps founders and teams turn ideas into <b>stable, working systems</b></span>
  
  <span>without overengineering, buzzwords, or handoffs that break later.</span>
</p>


        {/* 3️⃣ Buttons */}
        <div ref={buttonsRef} className={styles.buttons}>
          <button className={styles.firstbutt}>Stay with clarity</button>
          <button className={styles.secondbutt}>See how it works</button>
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
  );
}
