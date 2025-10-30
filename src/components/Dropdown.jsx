// src/components/ui/Dropdown.jsx
import React, { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="
          inline-flex justify-center items-center gap-2
          rounded-md border border-border-primary
          bg-background-primary px-3 py-2
          text-content-primary text-paragraph-base
          shadow-sm
          hover:bg-background-secondary
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-focus-ring focus-visible:ring-offset-2
          focus-visible:ring-offset-bg
        "
      >
        Options
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"
            }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 8l4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="
            absolute mt-2 w-56 origin-top-right rounded-md
            bg-background-primary
            border border-border-primary
            shadow-lg
            ring-1 ring-border-overlay
            z-20
          "
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-paragraph-base text-content-primary hover:bg-background-secondary"
            >
              Account
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-paragraph-base text-content-primary hover:bg-background-secondary"
            >
              Notifications
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-paragraph-base text-content-primary hover:bg-background-secondary"
            >
              Billing
            </a>

            <div className="my-1 border-t border-border-tertiary" />

            <span className="block px-4 py-2 text-paragraph-base text-content-tertiary cursor-not-allowed">
              My events
            </span>

            <a
              href="#"
              className="block px-4 py-2 text-paragraph-base text-content-primary hover:bg-background-secondary"
            >
              Upcoming events
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-paragraph-base text-content-primary hover:bg-background-secondary"
            >
              Past events
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
