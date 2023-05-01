import React from "react";
import styles from "../styles/ContactImage.module.css";

export default function ContactImage() {
  return (
    <div
      className={styles.imageContainer}
      data-aos="fade-left"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div className={styles.orbOne}></div>
      <div className={styles.orbTwo}></div>
      <div className={styles.orbThree}></div>
    </div>
  );
}
