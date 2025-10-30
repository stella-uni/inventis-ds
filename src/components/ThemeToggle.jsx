// src/components/ThemeToggle.jsx
import React from "react";
import Button from "./Button";
import { getTheme, toggleTheme } from "../lib/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle({ className }) {
  const [theme, setTheme] = React.useState(() => getTheme());
  const isDark = theme === "dark";

  const onClick = () => {
    toggleTheme();
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      variant="plain"
      size="base"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={onClick}
      className={cn("w-10 h-10", className)}
    >
      {isDark ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </Button>
  );
}

// Tiny classnames combiner (cn)
function cn(...args) {
  return args.filter(Boolean).join(" ");
}
