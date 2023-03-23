import "@/styles/globals.css";
import React from "react";
import { useState, Context, useEffect } from "react";

export const ThemeContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [activeTheme, setActiveTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  const toggleTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  const value = { activeTheme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
