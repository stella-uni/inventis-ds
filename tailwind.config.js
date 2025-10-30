/** Auto-generated Tailwind config exposing semantic tokens */
const config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        /* background */
        "background-amber": { DEFAULT: "rgb(var(--background-amber) / <alpha-value>)" },
        "background-blue": { DEFAULT: "rgb(var(--background-blue) / <alpha-value>)" },
        "background-cyan": { DEFAULT: "rgb(var(--background-cyan) / <alpha-value>)" },
        "background-emerald": { DEFAULT: "rgb(var(--background-emerald) / <alpha-value>)" },
        "background-fuchsia": { DEFAULT: "rgb(var(--background-fuchsia) / <alpha-value>)" },
        "background-green": { DEFAULT: "rgb(var(--background-green) / <alpha-value>)" },
        "background-indigo": { DEFAULT: "rgb(var(--background-indigo) / <alpha-value>)" },
        "background-inverse-overlay": { DEFAULT: "rgb(var(--background-inverse-overlay))" }, // overlay fix
        "background-inverse-primary": { DEFAULT: "rgb(var(--background-inverse-primary) / <alpha-value>)" },
        "background-inverse-secondary": { DEFAULT: "rgb(var(--background-inverse-secondary) / <alpha-value>)" },
        "background-lime": { DEFAULT: "rgb(var(--background-lime) / <alpha-value>)" },
        "background-orange": { DEFAULT: "rgb(var(--background-orange) / <alpha-value>)" },
        "background-overlay": { DEFAULT: "rgb(var(--background-overlay))" }, // overlay fix
        "background-pink": { DEFAULT: "rgb(var(--background-pink) / <alpha-value>)" },
        "background-primary": { DEFAULT: "rgb(var(--background-primary) / <alpha-value>)" },
        "background-purple": { DEFAULT: "rgb(var(--background-purple) / <alpha-value>)" },
        "background-quaternary": { DEFAULT: "rgb(var(--background-quaternary) / <alpha-value>)" },
        "background-red": { DEFAULT: "rgb(var(--background-red) / <alpha-value>)" },
        "background-rose": { DEFAULT: "rgb(var(--background-rose) / <alpha-value>)" },
        "background-secondary": { DEFAULT: "rgb(var(--background-secondary) / <alpha-value>)" },
        "background-sky": { DEFAULT: "rgb(var(--background-sky) / <alpha-value>)" },
        "background-teal": { DEFAULT: "rgb(var(--background-teal) / <alpha-value>)" },
        "background-tertiary": { DEFAULT: "rgb(var(--background-tertiary) / <alpha-value>)" },
        "background-violet": { DEFAULT: "rgb(var(--background-violet) / <alpha-value>)" },
        "background-yellow": { DEFAULT: "rgb(var(--background-yellow) / <alpha-value>)" },
        "background-zinc": { DEFAULT: "rgb(var(--background-zinc) / <alpha-value>)" },

        /* border */
        "border-accent": { DEFAULT: "rgb(var(--border-accent) / <alpha-value>)" },
        "border-error": { DEFAULT: "rgb(var(--border-error) / <alpha-value>)" },
        "border-inverse-overlay": { DEFAULT: "rgb(var(--border-inverse-overlay))" }, // overlay fix
        "border-overlay": { DEFAULT: "rgb(var(--border-overlay))" }, // overlay fix
        "border-primary": { DEFAULT: "rgb(var(--border-primary) / <alpha-value>)" },
        "border-secondary": { DEFAULT: "rgb(var(--border-secondary) / <alpha-value>)" },
        "border-success": { DEFAULT: "rgb(var(--border-success) / <alpha-value>)" },
        "border-tertiary": { DEFAULT: "rgb(var(--border-tertiary) / <alpha-value>)" },
        "border-warning": { DEFAULT: "rgb(var(--border-warning) / <alpha-value>)" },

        /* content */
        "content-amber": { DEFAULT: "rgb(var(--content-amber) / <alpha-value>)" },
        "content-blue": { DEFAULT: "rgb(var(--content-blue) / <alpha-value>)" },
        "content-cyan": { DEFAULT: "rgb(var(--content-cyan) / <alpha-value>)" },
        "content-emerald": { DEFAULT: "rgb(var(--content-emerald) / <alpha-value>)" },
        "content-fuchsia": { DEFAULT: "rgb(var(--content-fuchsia) / <alpha-value>)" },
        "content-green": { DEFAULT: "rgb(var(--content-green) / <alpha-value>)" },
        "content-indigo": { DEFAULT: "rgb(var(--content-indigo) / <alpha-value>)" },
        "content-inverse-primary": { DEFAULT: "rgb(var(--content-inverse-primary) / <alpha-value>)" },
        "content-inverse-secondary": { DEFAULT: "rgb(var(--content-inverse-secondary) / <alpha-value>)" },
        "content-inverse-tertiary": { DEFAULT: "rgb(var(--content-inverse-tertiary) / <alpha-value>)" },
        "content-lime": { DEFAULT: "rgb(var(--content-lime) / <alpha-value>)" },
        "content-orange": { DEFAULT: "rgb(var(--content-orange) / <alpha-value>)" },
        "content-pink": { DEFAULT: "rgb(var(--content-pink) / <alpha-value>)" },
        "content-primary": { DEFAULT: "rgb(var(--content-primary) / <alpha-value>)" },
        "content-purple": { DEFAULT: "rgb(var(--content-purple) / <alpha-value>)" },
        "content-red": { DEFAULT: "rgb(var(--content-red) / <alpha-value>)" },
        "content-rose": { DEFAULT: "rgb(var(--content-rose) / <alpha-value>)" },
        "content-secondary": { DEFAULT: "rgb(var(--content-secondary) / <alpha-value>)" },
        "content-sky": { DEFAULT: "rgb(var(--content-sky) / <alpha-value>)" },
        "content-teal": { DEFAULT: "rgb(var(--content-teal) / <alpha-value>)" },
        "content-tertiary": { DEFAULT: "rgb(var(--content-tertiary) / <alpha-value>)" },
        "content-violet": { DEFAULT: "rgb(var(--content-violet) / <alpha-value>)" },
        "content-yellow": { DEFAULT: "rgb(var(--content-yellow) / <alpha-value>)" },
        "content-zinc": { DEFAULT: "rgb(var(--content-zinc) / <alpha-value>)" },

        /* core */
        "core-black": { DEFAULT: "rgb(var(--core-black) / <alpha-value>)" },
        "core-white": { DEFAULT: "rgb(var(--core-white) / <alpha-value>)" },

        /* hover / focus */
        "btn-hover": { DEFAULT: "rgb(var(--btn-hover) / <alpha-value>)" },
        "btn-inverse-hover": { DEFAULT: "rgb(var(--btn-inverse-hover) / <alpha-value>)" },
        "input-border-hover": { DEFAULT: "rgb(var(--input-border-hover) / <alpha-value>)" },
        "input-border-hover-error": { DEFAULT: "rgb(var(--input-border-hover-error) / <alpha-value>)" },
        "focus-ring": { DEFAULT: "rgb(var(--focus-ring) / <alpha-value>)" },
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // shadow-sm
        DEFAULT: "0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)", // shadow
        md: "0 2px 4px -2px rgba(0, 0, 0, 0.10), 0 4px 6px -1px rgba(0, 0, 0, 0.10)", // shadow-md
        lg: "0 4px 6px -4px rgba(0, 0, 0, 0.10), 0 10px 15px -3px rgba(0, 0, 0, 0.10)", // shadow-lg
        xl: "0 8px 10px -6px rgba(0, 0, 0, 0.10), 0 20px 25px -5px rgba(0, 0, 0, 0.10)", // shadow-xl
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // shadow-2xl
      },
    },
  },
};

export default config;
