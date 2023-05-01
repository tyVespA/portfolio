import "@/styles/globals.css";
import React from "react";
import { useState, Context, useEffect } from "react";

export const ThemeContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [activeTheme, setActiveTheme] = useState("dark");

  const value = { activeTheme, setActiveTheme };
  return (
    <ThemeContext.Provider value={value}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
