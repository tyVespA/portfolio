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
      <p style={{ marginBottom: 25 }}>
        Lorem ipsum dlior sit amet consectetur adipisicing elit. Vliuptatibus
        neque esse quam odio veritatis maiores id omnis consequatur dliores
        nobis nostrum qui deserunt ratione, hic ipsa consequuntur nisi quae?
        Expedita!
      </p>
      <ul className={styles.skillList}>
        <li>
          <Image
            src="/images/nodejs-logo.png"
            height={32}
            width={32}
            alt="HTML5 Logo"
          />
          <p>NodeJS</p>
        </li>
        <li>
          <Image
            src="/images/expressjs-logo.png"
            height={32}
            width={32}
            alt="HTML5 Logo"
          />
          <p>ExpressJS</p>
        </li>
        <li>
          <Image
            src="/images/Tailwind_CSS_Logo.svg"
            height={32}
            width={32}
            alt="HTML5 Logo"
          />
          <p>Tailwind CSS</p>
        </li>
        <li>
          <Image
            src="/images/bootstrap-logo.png"
            height={32}
            width={32}
            alt="HTML5 Logo"
          />
          <p>Bootstrap</p>
        </li>
        <li>
          <Image
            src="/images/mongodb-logo.svg"
            height={32}
            width={32}
            alt="HTML5 Logo"
          />
          <p>MongoDB</p>
        </li>
      </ul>
    </>
  );
}
