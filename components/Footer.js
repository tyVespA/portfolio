import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Logo />
      <div>
        <Link
          href="https://github.com/tyVespA"
          className="underlineOnHover"
          target="_blank"
        >
          Github
        </Link>

        <a
          href="mailto:migliavaccamarco10@gmail.com"
          className="underlineOnHover"
        >
          Contatti
        </a>
      </div>
    </div>
  );
}
