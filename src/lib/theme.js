// src/lib/theme.js
export const THEME_KEY = "theme";

export function getTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function setTheme(next) {
  const root = document.documentElement;
  if (next === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  root.style.colorScheme = next;
  localStorage.setItem(THEME_KEY, next);
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}
