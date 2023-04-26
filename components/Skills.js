import React from "react";
import styles from "../styles/Skills.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      {/* <h2 style={{ marginBottom: 20 }}>Le tecnologie che conosco e uso:</h2> */}
      <h2 style={{ marginBottom: 20 }}>Le tecnologie che uso</h2>
      <p style={{ marginBottom: 25 }}>
        Lorem ipsum dlior sit amet consectetur adipisicing elit. Vliuptatibus
        neque esse quam odio veritatis maiores id omnis consequatur dliores
        nobis nostrum qui deserunt ratione, hic ipsa consequuntur nisi quae?
        Expedita!
      </p>
      <ul className={styles.skillList}>
        <li>
          <Image
            src="/images/HTML5_Badge_64.png"
            height={32}
            width={32}
            alt="HTML5 Logo"
          />
          <p>HTML5</p>
        </li>
        <li>
          <Image
            src="/images/w3_css-icon.svg"
            height={32}
            width={32}
            alt="CSS Logo"
          />
          <p>CSS3</p>
        </li>
        <li>
          <Image
            src="/images/sass-color-aef0354c.png"
            height={32}
            width={32}
            alt="SASS Logo"
          />
          <p>Sass</p>
        </li>
        <li>
          <Image
            src="/images/js-logo.jpg"
            height={32}
            width={32}
            alt="JavaScript Logo"
          />
          <p>JavaScript ES6</p>
        </li>
        <li>
          <Image
            src="/images/api-logo 1.png"
            height={32}
            width={32}
            alt="API Logo"
          />
          <p>RESTful API</p>
        </li>
        <li>
          <Image
            src="/images/React-icon.png"
            height={26.5}
            width={32}
            alt="React Logo"
          />
          <p>React</p>
        </li>
        <li>
          <Image
            src="/images/nextjs-logo.png"
            height={32}
            width={32}
            alt="Next Logo"
          />
          <p>Next.js</p>
        </li>
        <li>
          <Image
            src="/images/WordPress_blue_logo.svg.png"
            height={32}
            width={32}
            alt="Wordpress Logo"
          />
          <p>Wordpress</p>
        </li>
        <li>
          <Image
            src="/images/figma-logo.webp"
            height={32}
            width={32}
            alt="Figma Logo"
          />
          <p>Figma</p>
        </li>
        <li>
          <Image
            src="/images/Git-Icon-1788C.png"
            height={32}
            width={32}
            alt="Git Logo"
          />
          <p>Git</p>
        </li>
      </ul>
    </>
  );
}
