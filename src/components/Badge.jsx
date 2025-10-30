import React from "react";
import ThemeToggle from "./ThemeToggle";

const cn = (...xs) => xs.filter(Boolean).join(" ");

export function Badge({ tone = "zinc", className, children, ...props }) {
  return (
    <span
      role="status"
      className={cn(
        "inline-flex items-center gap-1 select-none align-middle",
        "px-2 py-0.5 text-paragraph-tiny rounded-md",
        `bg-background-${tone} text-content-${tone}`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

const ITEMS = [
  { label: "Close", tone: "zinc" },
  { label: "ERROR", tone: "red" },
  { label: "URGENT", tone: "orange" },
  { label: "badge", tone: "amber" },
  { label: "badge", tone: "yellow" },
  { label: "badge", tone: "lime" },
  { label: "badge", tone: "green" },
  { label: "badge", tone: "emerald" },
  { label: "badge", tone: "teal" },
  { label: "badge", tone: "cyan" },
  { label: "badge", tone: "sky" },
  { label: "DRAFT", tone: "blue" },
  { label: "ON PROCESS", tone: "blue" },
  { label: "badge", tone: "indigo" },
  { label: "badge", tone: "violet" },
  { label: "badge", tone: "purple" },
  { label: "badge", tone: "fuchsia" },
  { label: "badge", tone: "pink" },
  { label: "badge", tone: "rose" },
];

export function BadgeShowcase() {
  return (
    <main className="p-8">
      <section className="relative mx-auto max-w-xl rounded-2xl border bg-background-primary border-border-primary p-6 space-y-2">
        <span className="inline-block px-2 py-1 rounded-md border text-sm mb-4">Badge</span>
        <ThemeToggle className="absolute top-4 right-4" />

        <div className="flex flex-wrap gap-2">
          {ITEMS.map((it, i) => (
            <Badge key={i} tone={it.tone}>{it.label}</Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
