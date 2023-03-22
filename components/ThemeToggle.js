import React from "react";
import styles from "../components/ThemeToggle.module.css";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setActiveTheme(inactiveTheme)}
      >
        🌙
      </button>
    </div>
  );
}
