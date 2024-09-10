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
          paddingLeft: "2rem",
        }}
      ></img>
      <h3>Buy Sell Coins, Bullion and Stamps</h3>
    </div>
  );
}
