// src/components/Badge.jsx
import React from "react";
import ThemeToggle from "./ThemeToggle";
const cn = (...xs) => xs.filter(Boolean).join(" ");

// 정적 클래스 매핑 (Tailwind가 확실히 인식)
const toneCls = {
  zinc: "bg-background-zinc text-content-zinc",
  red: "bg-background-red text-content-red",
  orange: "bg-background-orange text-content-orange",
  amber: "bg-background-amber text-content-amber",
  yellow: "bg-background-yellow text-content-yellow",
  lime: "bg-background-lime text-content-lime",
  green: "bg-background-green text-content-green",
  emerald: "bg-background-emerald text-content-emerald",
  teal: "bg-background-teal text-content-teal",
  cyan: "bg-background-cyan text-content-cyan",
  sky: "bg-background-sky text-content-sky",
  blue: "bg-background-blue text-content-blue",
  indigo: "bg-background-indigo text-content-indigo",
  violet: "bg-background-violet text-content-violet",
  purple: "bg-background-purple text-content-purple",
  fuchsia: "bg-background-fuchsia text-content-fuchsia",
  pink: "bg-background-pink text-content-pink",
  rose: "bg-background-rose text-content-rose",
};

export function Badge({ tone = "zinc", className, children, ...props }) {
  const toneClasses = toneCls[tone] ?? toneCls.zinc;
  return (
    <span
      role="status"
      className={cn(
        "inline-flex items-center gap-1 select-none align-middle",
        "px-2 py-0.5 text-paragraph-tiny rounded-md",
        toneClasses,
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
