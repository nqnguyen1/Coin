import React from "react";
import Carousel from "./carousel/Carousel";
import * as styles from "./Main.module.css";
import example from "../../assets/example.jpg";

import gold from "../../assets/gold.jpeg";
import stamp from "../../assets/stamp.jpg";

export default function Main() {
  return (
    <main className={styles.container}>
      <section className={styles.two}>
        <img src={example} className={styles.exampleImg}></img>
      </section>
      <section className={styles.three}>
        <h2>Buy Sell Coins, Bullion and Stamps</h2>
        <p>
          Broadway Coin and Stamp Exchange has been located in the same Shopping
          center for over 33 year. We buy Sell and Trade, US and World wide
          Coins, Bullions, Medals, Tokens, Paper Money and Stamps. We also offer
          Appraisals, in store or at your Site. Call us, or if local come in and
          see us.
        </p>
      </section>
      <section className={styles.four}>
        <img src={gold} className={styles.exampleImg}></img>
      </section>
      <section className={styles.five}>
        <h2>Our Commitment</h2>
        <p>
          At our shop, we are committed to offering the highest quality gold,
          bullion, and stamps. Our collection features a wide variety of items,
          including rare coins and bullion bars sourced from reputable mints. We
          take pride in offering products that meet rigorous standards for
          authenticity and purity.
        </p>
      </section>
      <section className={styles.six}>
        <img src={stamp} className={styles.exampleImg}></img>
      </section>
      <section className={styles.seven}>
        <h2>Why Choose Us?</h2>
        <p>
          With years of experience in the precious metals industry, we provide
          trustworthy services for buying and selling gold and collectible
          items. Our knowledgeable staff is always available to answer your
          questions and help you make informed decisions about your investments.
          Whether you're looking to expand your collection or sell your items,
          we offer competitive rates and exceptional customer service.
        </p>
      </section>

      {/* <section className={styles.featureContainer}>
        <h2>Featured Products</h2>
        <Carousel></Carousel>
      </section> */}
    </main>
  );
}
