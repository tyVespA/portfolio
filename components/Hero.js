import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import { ThemeContext } from "@/pages/_app";

export default function Hero() {
  const { activeTheme } = useContext(ThemeContext);

  const heroImagePath =
    activeTheme === "light"
      ? "/images/heroImg-light.jpg"
      : "/images/heroImg-dark.jpg";

  return (
    <>
      <div className={styles.titleSection}>
        <div className={styles.heroTitle}>
          <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
            Ciao👋
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            sono Marco,
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <span className={`${styles.accented} ${styles.animatedGradient}`}>
              Web Developer
            </span>
          </h2>

          {/* <h1>Ciao👋, sono Marco.</h1> */}

          {/* <h2 className={isVisible ? "visible" : "hidden"}>etc etc</h2> */}
        </div>
        {/* <Image
          src="/images/profile.jpg"
          height={1100 / 4}
          width={896 / 4}
          alt="Hero picture"
          className={styles.heroImage}
          style={{ objectFit: "contain" }}
        /> */}
        <div
          className={` ${styles.imageContainer}`}
          data-aos="fade-down"
          data-aos-once="true"
          // data-aos-delay="600"
          data-aos-duration="1000"
        >
          <Image
            src={heroImagePath}
            height={1100}
            width={896}
            alt="Hero picture"
          />
        </div>
      </div>
      <section className={styles.heroText}>
        <div>
          <p>
            Fin da piccolo, ho sempre amato creare cose interattive e utili.
            Sperimentare con la progettazione di livelli su giochi come Little
            Big Planet e Minecraft è stato il mio primo passo nell'interattività
            digitale. Allo stesso tempo, nutrivo una forte passione per la
            tecnologia, ma non sapevo come unire queste due passioni in un
            percorso professionale.
            <br />
            <br />
            Durante un precedente impiego, mi era stato chiesto di creare di una
            pagina web per la visualizzazione di documenti PDF. Questa
            esperienza mi ha introdotto al mondo dello sviluppo web e ho subito
            compreso il suo potenziale.
          </p>
        </div>
        <div>
          <p>
            Da quel momento, ho investito il mio tempo e la mia energia nello
            sviluppo delle mie competenze nel campo del web development. Ho
            creato l'intero sito web per l'azienda e ho capito che questa
            sarebbe stata la mia strada per il futuro. <br /> <br /> La capacità
            di combinare la mia passione per la tecnologia con la creazione di
            esperienze digitali coinvolgenti mi ha ispirato a perseguire una
            carriera nel web development, dove posso continuare a innovare e
            creare soluzioni utili e significative per gli utenti.
          </p>
        </div>
      </section>
    </>
  );
}
