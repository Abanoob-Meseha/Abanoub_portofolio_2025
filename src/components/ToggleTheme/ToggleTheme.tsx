"use client";
import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import Button from "../Button/Button";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setIsDark(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDark);
  };
  return (
    <Button onClick={toggleTheme} type="secondary" circled>
      {isDark ? <IoSunnyOutline className="m-2"/> : <IoMoonOutline className="m-2"/>}
    </Button>
  );
};

export default ToggleTheme;
