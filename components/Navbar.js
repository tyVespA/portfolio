import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Layout from "./Layout";
import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <ThemeToggle />
      </div>
    </>
  );
}
