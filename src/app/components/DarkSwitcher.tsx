"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeChanger = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Loading theme"
        className="text-gray-500 dark:text-gray-300 p-2"
        disabled
      >
        <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = () => {
    console.log("Current theme before toggle:", currentTheme);
    setTheme(currentTheme === "dark" ? "light" : "dark");
    console.log("Theme set to:", currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
    >
      {currentTheme === "dark" ? (
        // Ícone de lua (Dark Mode)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        // Ícone de sol (Light Mode)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeChanger;
