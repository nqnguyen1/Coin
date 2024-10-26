import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as styles from "./Navbar.module.css";
import logo from "../../assets/1280x708Logo.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav style={{ backgroundColor: "#2c2c2c" }}>
      <ul className={styles.nav}>
        <li className={styles.logo}>
          <Link to="/" onClick={toggleMenu}>
            <img
              src={logo}
              className={styles.logo}
              alt="Broadway Coin & Stamp Exchange Logo"
            />
          </Link>
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
          <button>
            <Link to="/about" onClick={toggleMenu} className={styles.link}>
              About Us
            </Link>
          </button>
          <button>
            <Link to="/products" onClick={toggleMenu} className={styles.link}>
              Products
            </Link>
          </button>
          <button>
            <Link to="/contact" onClick={toggleMenu} className={styles.link}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
