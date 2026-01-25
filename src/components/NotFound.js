import React from "react";
import styles from "../CSS/NotFound.module.css";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className={styles.page}>
      {/* top hairline */}
     <img src="/nf.png" height="100%" width="100%" alt="/"/>

      {/* bottom left */}
      <span className={styles.bottomLeft}>
        ERROR 404 PAGE NOT FOUND
      </span>

      {/* bottom right */}
      <button className={styles.back} onClick={()=>{navigate("/")}}>
        Go back to home page <span>↗</span>
      </button>
    </div>
  );
}
