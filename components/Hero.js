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
              Full Stack Developer
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
            Sin da piccolo, ho sempre avuto una passione per la creazione di
            esperienze interattive. Sperimentavo progettando livelli su giochi
            come Little Big Planet e Minecraft, affascinato dall’idea di
            costruire mondi digitali. Allo stesso tempo, il mondo della
            programmazione mi incuriosiva profondamente, ma non sapevo ancora
            come trasformare queste passioni in una carriera.
            <br />
            <br />
            La svolta è arrivata quando, durante un impiego precedente, mi è
            stato chiesto di realizzare una pagina web per visualizzare
            documenti PDF. In quel momento ho scoperto il mondo dello sviluppo
            web e ne ho subito riconosciuto il potenziale. Da lì, ho iniziato a
            studiare e applicare le mie conoscenze, fino a sviluppare l’intero
            sito web dell’azienda. <br /> <br />
          </p>
        </div>
        <div>
          <p>
            Oggi, cerco di unire creatività e tecnologia per progettare
            soluzioni digitali funzionali e coinvolgenti. Il web development è
            diventato il mio percorso, un campo in cui posso costruire
            esperienze utili e significative per gli utenti. Ogni progetto è
            un’opportunità per imparare, sperimentare e creare qualcosa di
            valore, e non vedo l’ora di portare la mia passione e le mie
            competenze in nuove sfide professionali.
          </p>
        </div>
      </section>
    </>
  );
}
