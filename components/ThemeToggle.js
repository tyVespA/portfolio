import React from "react";
import styles from "../components/ThemeToggle.module.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/pages/_app";

export default function ThemeToggle() {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);
  const isLightTheme = activeTheme === "light";

  return (
    <div>
      <button className={styles.button} onClick={toggleTheme}>
        {isLightTheme ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
