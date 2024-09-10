import React from "react";
import Logo from "./Logo";
import * as styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Logo></Logo>
        </li>
        <li>
          <h1 className={styles.title}>Broadway Coin & Stamp Exchange</h1>
        </li>

        <li style={{ display: "flex", gap: "1rem" }}>
          <button>About us</button>
          <button>Contact us</button>
        </li>
      </ul>
    </nav>
  );
}

// home -> Featured Product
// nav logo underneath logo will be broadwaycoin and stamp exchange
