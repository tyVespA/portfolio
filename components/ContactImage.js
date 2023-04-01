import React from "react";
import styles from "../styles/ContactImage.module.css";

export default function ContactImage() {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.orbOne}></div>
      <div className={styles.orbTwo}></div>
      <div className={styles.orbThree}></div>
    </div>
  );
}
