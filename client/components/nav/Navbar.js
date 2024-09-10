import React, { useState } from "react";

import * as styles from "./Navbar.module.css";
import logo from "../../assets/1280x708Logo.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      return prev ? false : true;
    });
  };

  return (
    <nav style={{ backgroundColor: "#2c2c2c" }}>
      <ul className={styles.nav}>
        <li className={styles.logo}>
          <img
            src={logo}
            className={styles.logo}
            alt="Broadway Coin & Stamp Exchange Logo"
          />
        </li>
        <li>
          <h1 className={styles.title}>Broadway Coin & Stamp Exchange</h1>
        </li>

        <li className={styles.menuIcon}>
          <button onClick={toggleMenu}>&#9776;</button>
        </li>

        <li
          className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          <button>About us</button>
          <button>Products</button>
          <button>Contact us</button>
        </li>
      </ul>
    </nav>
  );
}
