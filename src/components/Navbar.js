import React, { forwardRef, useState, useEffect } from "react";
import { Menu, X, MoveUpRight } from "lucide-react";
import styles from "../CSS/Navbar.module.css";
import { useNavigate, Link } from "react-router-dom"; // <-- Imported Link
import useWindowWidth from "./usewindowwidth";

const Navbar = forwardRef(
  ({ logoRef, btnTextRef, btnIconRef, serviceRef }, navbarRef) => {
    const navigate = useNavigate();
    const width = useWindowWidth();
    const [open, setOpen] = useState(false);

    const isMobile = width <= 800;

    // auto-close menu when switching to desktop
    useEffect(() => {
      if (!isMobile && open) setOpen(false);
    }, [isMobile, open]);

    return (
      <>
        <div className={styles.navbar} ref={navbarRef}>
          {/* LOGO – always visible */}
          <div className={styles.logo} ref={logoRef}>
            <Link to="/"><img src="/internal/Companylogo.png" alt="logo" /></Link>
          </div>

          {/* DESKTOP ONLY */}
          {!isMobile && (
            <>
              <ul className={styles.links}>
                <li style={{ cursor: "pointer" }}><Link to="/" state={{ scrollTo: "home" }} style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
                <li style={{ cursor: "pointer" }}><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link></li>
                <li style={{ cursor: "pointer" }}><Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>Services</Link></li>
                <li style={{ cursor: "pointer" }}><Link to="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>Portfolio</Link></li>
              </ul>

              <button
                className={styles.navbutt}
                onClick={() => navigate("/contact")}
                style={{ cursor: "pointer" }}>
                <span ref={btnTextRef} className={styles.btnText}>
                  Get in touch
                </span>
                <span ref={btnIconRef} className={styles.btnIcon}>
                  <MoveUpRight size={16} />
                </span>
              </button>
            </>
          )}

          {/* MOBILE ONLY TOGGLE */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>

        {/* MOBILE DROPDOWN (FULL WIDTH) */}
        {isMobile && open && (
          <div
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              width: "100vw",
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(5px)",
              padding: "24px",
              zIndex: 998,
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "20px",
                color: "white",
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px"
              }}
            >
              <li onClick={() => setOpen(false)} style={{ cursor: "pointer" }}><Link to="/" state={{ scrollTo: "home" }} style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
              <li onClick={() => setOpen(false)} style={{ cursor: "pointer" }}><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link></li>
              <li onClick={() => setOpen(false)} style={{ cursor: "pointer" }}><Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>Services</Link></li>
              <li onClick={() => setOpen(false)} style={{ cursor: "pointer" }}><Link to="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>Portfolio</Link></li>
            </ul>

            <button
              style={{
                width: "100%",
                padding: "14px",
                background: "#3225bf",
                color: "white",
                borderRadius: "10px",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                cursor: "pointer"
              }}
              onClick={() => { navigate("/contact"); setOpen(false); }}
            >
              Get in touch <MoveUpRight size={16} />
            </button>
          </div>
        )}
      </>
    );
  }
);

export default Navbar;