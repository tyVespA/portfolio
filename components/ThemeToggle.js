import React from "react";
import styles from "../styles/ThemeToggle.module.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import Image from "next/image";

export default function ThemeToggle() {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    storedTheme && setActiveTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  const isLightTheme = activeTheme === "light";

  return (
    <>
      <button className={styles.button} onClick={toggleTheme}>
        {isLightTheme ? (
          <Image
            src="/images/noun-moon-5631613.svg"
            height={25}
            width={25}
            alt="Dark mode icon"
          />
        ) : (
          <Image
            src="/images/noun-sun-5631580.svg"
            height={25}
            width={25}
            alt="Dark mode icon"
          />
        )}
      </button>
    </>
  );
}
