import React from "react";
import styles from "../components/ThemeToggle.module.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/pages/_app";

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
    <div>
      <button className={styles.button} onClick={toggleTheme}>
        {isLightTheme ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
