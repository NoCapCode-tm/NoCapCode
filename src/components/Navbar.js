import React, { forwardRef } from "react";
import styles from "../CSS/Navbar.module.css";
import { MoveUpRight } from "lucide-react";

import { useNavigate } from "react-router";

const Navbar = forwardRef(
  ({ logoRef, btnTextRef, btnIconRef }, navbarRef) => {
    const navigate = useNavigate();

    const goHome = (section) => {
      navigate("/", { state: { scrollTo: section } });
    };

    return (
      <div className={styles.navbar} ref={navbarRef}>
        <div className={styles.logo} ref={logoRef}>
          <img src="/Companylogo.png" alt="logo" />
        </div>

        <ul className={styles.links}>
          <li onClick={() => goHome("home")}>Home</li>
          <li onClick={() => goHome("about")}>About</li>
          <li onClick={() => goHome("howWeWork")}>Services</li>
          <li onClick={() => navigate("/casestudies")}>Case Studies</li>
        </ul>

        <button
          className={styles.navbutt}
          onClick={() => navigate("/contact")}
        >
          <span ref={btnTextRef} className={styles.btnText}>
            Get in touch
          </span>
          <span ref={btnIconRef} className={styles.btnIcon}>
            <MoveUpRight size={16} />
          </span>
        </button>
      </div>
    );
  }
);


export default Navbar;
