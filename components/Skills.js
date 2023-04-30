import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  const { activeTheme } = useContext(ThemeContext);
  const nextJsLogoColor = activeTheme === "light" ? "black" : "white";

  return (
    <>
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
            src="/images/logos/HTML5_Badge_64.png"
            height={32}
            width={32}
            alt="HTML5 Logo"
          />
          <p>HTML5</p>
        </li>
        <li>
          <Image
            src="/images/logos/w3_css-icon.svg"
            height={32}
            width={32}
            alt="CSS Logo"
          />
          <p>CSS3</p>
        </li>
        <li>
          <Image
            src="/images/logos/sass-color-aef0354c.png"
            height={32}
            width={32}
            alt="SASS Logo"
          />
          <p>Sass</p>
        </li>
        <li>
          <Image
            src="/images/logos/js-logo.jpg"
            height={32}
            width={32}
            alt="JavaScript Logo"
          />
          <p>JavaScript ES6</p>
        </li>
        <li>
          <Image
            src="/images/logos/api-logo 1.png"
            height={32}
            width={32}
            alt="API Logo"
          />
          <p>RESTful API</p>
        </li>
        <li>
          <Image
            src="/images/logos/React-icon.png"
            height={26.5}
            width={32}
            alt="React Logo"
          />
          <p>React</p>
        </li>
        <li>
          <Image
            src={`/images/logos/nextjs-logo-${nextJsLogoColor}.svg`}
            height={32}
            width={32}
            alt="Next Logo"
          />
          <p>Next.js</p>
        </li>
        <li>
          <Image
            src="/images/logos/WordPress_blue_logo.svg.png"
            height={32}
            width={32}
            alt="Wordpress Logo"
          />
          <p>Wordpress</p>
        </li>
        <li>
          <Image
            src="/images/logos/figma-logo.webp"
            height={32}
            width={32}
            alt="Figma Logo"
          />
          <p>Figma</p>
        </li>
        <li>
          <Image
            src="/images/logos/Git-Icon-1788C.png"
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
