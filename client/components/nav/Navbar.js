import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as styles from "./Navbar.module.css";
import logoPNG from "../../assets/Logo 13/Logo 13.png";
import coinPNG from "../../assets/Logo Front/Logo Front.png";

export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev);
  // };
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav style={{ backgroundColor: "#2c2c2c" }}>
        <ul className={styles.nav}>
          <li className={styles.logo}>
            <Link to="/">
              <img
                src={logoPNG}
                className={styles.logo}
                alt="Broadway Coin & Stamp Exchange Logo"
              />
            </Link>
          </li>
          <li className={styles.titleContainer}>
            {width > 700 ? (
              <h1 className={styles.title}>Broadway Coin & Stamp Exchange</h1>
            ) : (
              <Link to="/" className={styles.link}>
                <div className={styles.logoJS}>
                  <div>
                    <h1 className={styles.textLine1}>BROADWAY</h1>
                    <div className={styles.underline}></div>
                    <h1 className={styles.textLine2}>COIN & STAMP</h1>
                  </div>
                  <span>
                    <img
                      src={coinPNG}
                      style={{
                        width: "4rem",
                        height: "auto",
                        marginLeft: "1rem",
                      }}
                    ></img>
                  </span>
                </div>
              </Link>
            )}
          </li>

          {/* <li className={styles.menuIcon}>
          <button onClick={toggleMenu}>&#9776;</button>
        </li> */}

          <li
          // className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}
          >
            {/* <button className={styles.cta}>
            <Link to="/about" onClick={toggleMenu} className={styles.link}>
              About Us
            </Link>
          </button>
          <button className={styles.cta}>
            <Link to="/products" onClick={toggleMenu} className={styles.link}>
              Products
            </Link>
          </button> */}
            <button className={`${styles.cta} ${styles.mobile}`}>
              <a className={styles.link} href="#contact-section">
                Contact Us
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
