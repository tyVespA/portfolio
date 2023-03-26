import React from "react";
import ThemeToggle from "./ThemeToggle";
import Layout from "./Layout";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <p>Navbar</p>
        <ThemeToggle />
      </div>
    </>
  );
}
