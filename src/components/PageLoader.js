import { useEffect, useState, useRef } from "react";
import styles from "../CSS/PageLoader.module.css";
import gsap from "gsap";

export default function PageLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const isReactSnap = navigator.userAgent === 'ReactSnap';

    // Instantly complete and unmount for the SEO crawler
    if (isReactSnap) {
      setVisible(false);
      if (typeof onComplete === "function") onComplete();
      return;
    }
  
    const tl = gsap.timeline({
      delay: 2.5,
      onComplete: () => {
        setVisible(false);
        if (typeof onComplete === "function") onComplete();
      },
    });
  
    tl.to(loaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "power3.inOut",
    });
  
    return () => tl.kill();
  }, [onComplete]);
  
  if (!visible) return null;

  return (
    <div ref={loaderRef} className={styles.loader}>
      <video
        className={styles.videoBg}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg2.mp4" type="video/mp4" />
      </video>

      <div className={styles.inner}>
        <h1 className={styles.logo}>NoCapCode™</h1>

        <div className={styles.lineLoader}>
          <span />
        </div>
      </div>
    </div>
  );
}