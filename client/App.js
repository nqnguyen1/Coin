import React from "react";
import Navbar from "./components/nav/Navbar";
import Main from "./components/body/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
