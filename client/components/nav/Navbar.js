import React, { useState } from "react";
import Logo from "./Logo";
import * as styles from "./Navbar.module.css";

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
        <li>
          <Logo />
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
