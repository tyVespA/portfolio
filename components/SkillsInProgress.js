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
            src="/images/logos/typescript-logo.png"
            height={32}
            width={32}
            alt="TypeScript Logo"
          />
          <p>TypeScript</p>
        </li>
        <li>
          <Image
            src="/images/logos/nodejs-logo.png"
            height={32}
            width={32}
            alt="NodeJS Logo"
          />
          <p>NodeJS</p>
        </li>
        <li>
          <Image
            src="/images/logos/expressjs-logo.png"
            height={32}
            width={32}
            alt="ExpressJS Logo"
          />
          <p>ExpressJS</p>
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
            width={40}
            alt="Bootstrap Logo"
          />
          <p>Bootstrap</p>
        </li>
        <li>
          <Image
            src="/images/logos/mongodb-logo.svg"
            height={32}
            width={32}
            alt="MongoDB Logo"
          />
          <p>MongoDB</p>
        </li>
      </ul>
    </>
  );
}
