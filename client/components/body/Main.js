import React from "react";
import Carousel from "./carousel/Carousel";
import * as styles from "./Main.module.css";
import example from "../../assets/example.jpg";
import example2 from "../../assets/example2.jpg";

export default function Main() {
  return (
    <main className={styles.container}>
      <section className={styles.one}>
        <h2>Lorem Ipsum</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, in corpora tractatos iudicabit cum. Eu
            vidit nostro inermis qui, ubique veritus imperdiet ius ea. Cu
            volumus appareat vix, at vix debet sapientem. Et labore regione
            eleifend mei, ne vel quas putent, homero diceret sanctus vix ne. Cum
            nullam fuisset te, ut nonumes vivendo cum, graeco molestie explicari
            ut pri. Dolores posidonium cu usu, ex sententiae liberavisse pri.
            Eos nibh harum ceteros id. Vim alii laoreet ut, cu mei magna ignota,
            at nam error dolores placerat. Pro recusabo interpretaris cu.
          </p>
        </div>
      </section>
      <section className={styles.two}>
        <img
          src={example}
          style={{
            width: "70%",
            maxWidth: "400px",
            height: "auto",
          }}
        ></img>
      </section>
      <section className={styles.three}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, in corpora tractatos iudicabit cum. Eu
          vidit nostro inermis qui, ubique veritus imperdiet ius ea. Cu volumus
          appareat vix, at vix debet sapientem. Et labore regione eleifend mei,
          ne vel quas putent, homero diceret sanctus vix ne. Cum nullam fuisset
          te, ut nonumes vivendo cum, graeco molestie explicari ut pri. Dolores
          posidonium cu usu, ex sententiae liberavisse pri. Eos nibh harum
          ceteros id. Vim alii laoreet ut, cu mei magna ignota, at nam error
          dolores placerat. Pro recusabo interpretaris cu.
        </p>
      </section>

      <section className={styles.featureContainer}>
        <h2>Featured Products</h2>
        <Carousel></Carousel>
      </section>
    </main>
  );
}
