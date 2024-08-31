"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDarkMode);
      document.body.classList.toggle("dark", isDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        rounded-full p-2
       
        transition-all duration-300
      `}
    >
      {darkMode ? (
        <Sun className="h-5 w-5 transition-transform duration-500 ease-in-out hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-500 ease-in-out hover:-rotate-45" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
