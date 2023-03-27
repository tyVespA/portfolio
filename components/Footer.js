import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>Footer Logo</p>
      <div>
        <Link href="https://github.com/tyVespA" className="underlineOnHover">
          Github
        </Link>
        <p>Contatti</p>
      </div>
    </div>
  );
}
