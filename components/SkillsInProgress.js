import React from "react";
import styles from "../styles/Skills.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      {/* <h2 style={{ marginBottom: 20 }}>Le tecnologie che conosco e uso:</h2> */}
      <h2 style={{ marginBottom: 20, marginTop: -50 }}>
        Le tecnologie che sto studiando
      </h2>
      <p style={{ marginBottom: 30 }}>
        Il mondo della programmazione mi appassiona profondamente e cerco
        costantemente di arricchire il mio bagaglio di competenze attraverso
        l&apos;apprendimento di nuove tecnologie.
        {/* <br /> Sono entusiasta di mettere in pratica queste
        nuove conoscenze per lavorare a progetti sempre più complessi,
        interessanti e utili. */}
      </p>
      <ul className={styles.skillList}>
        <li>
          <Image
            src="/images/logos/typescript-logo.png"
            height={32}
            width={32}
            alt="TypeScript Logo"
          />
          <p>TypeScript</p>
        </li>
        <li>
          <Image
            src="/images/logos/tailwind-logo.svg"
            height={32}
            width={32}
            alt="Tailwind Logo"
          />
          <p>Tailwind CSS</p>
        </li>
        <li>
          <Image
            src="/images/logos/bootstrap-logo.png"
            height={32}
            width={32}
            alt="Bootstrap Logo"
          />
          <p>Bootstrap</p>
        </li>
        <li>
          <Image
            src="/images/logos/angular-logo.svg"
            height={32}
            width={32}
            alt="Angular Logo"
          />
          <p>Angular</p>
        </li>
        <li>
          <Image
            src="/images/logos/react-logo.png"
            height={32}
            width={32}
            alt="React Logo"
          />
          <p>React Native</p>
        </li>
        <li>
          <Image
            src="/images/logos/sql-logo.png"
            height={32}
            width={32}
            alt="SQL Logo"
          />
          <p>SQL</p>
        </li>
        <li>
          <Image
            src="/images/logos/php-logo.png"
            height={32}
            width={32}
            alt="PHP Logo"
          />
          <p>PHP</p>
        </li>
      </ul>
    </>
  );
}
