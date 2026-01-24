import React from 'react'
import styles from "../CSS/SmallNavbar.module.css";
import { MoveUpRight } from 'lucide-react';

const SmallNavbar = ({ref}) => {
  return (
    <div className={styles.smallnavbar} ref={ref}>
      <ul className={styles.small}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Case Studies</li>
      </ul>
      <button className={styles.getintouch}><MoveUpRight size={12} color="white"/></button>
    </div>
  )
}

export default SmallNavbar
