import React from "react";
import logo from "../../assets/1280x708Logo.jpg";

export default function Logo() {
  return (
    <div>
      <img
        src={logo}
        style={{
          width: "9rem",
          height: "auto",
        }}
        alt="Broadway Coin & Stamp Exchange Logo"
      />
    </div>
  );
}
