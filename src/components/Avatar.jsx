import React from "react";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

/** Core */
const sizeStyles = {
  sm: "w-6 h-6 text-[10px]",
  md: "w-8 h-8 text-[11px]",
  lg: "w-10 h-10 text-sm",
};

export function Avatar({
  src = "https://picsum.photos/200/200",
  alt = "Avatar",
  size = "md",
  shape = "circle",   // circle | rounded | square | pill
  label = "TW",
  variant = "image",  // image | label
  className,
}) {
  const base = clsx(sizeStyles[size], "border border-border-primary/50 overflow-hidden select-none", className);

  if (variant === "image") {
    const radius = shape === "rounded" ? "rounded-lg" : "rounded-full";
    return (
      <div className={clsx(base, radius)}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  const labelShape = shape === "pill" ? "rounded-full" : "rounded-md";
  return (
    <div className={clsx(base, labelShape, "bg-background-primary text-content-primary flex items-center justify-center")}>
      <span className="font-medium leading-none">{label}</span>
    </div>
  );
}

/** Showcase: 한 화면 + ThemeToggle */
export default function ShowcaseAvatar() {
  const sizes = ["sm", "md", "lg"];

  return (
    <main className="p-8">
      <section className="relative mx-auto max-w-3xl rounded-2xl border bg-background-primary border-border-tertiary p-6">
        <span className="inline-block px-2 py-1 rounded-md border text-sm mb-6">Avatar</span>
        <ThemeToggle className="absolute top-4 right-4" />

        <div className="space-y-8">
          <div className="flex items-center gap-8">
            {sizes.map((s) => <Avatar key={`img-circle-${s}`} size={s} shape="circle" variant="image" />)}
          </div>
          <div className="flex items-center gap-8">
            {sizes.map((s) => <Avatar key={`img-rounded-${s}`} size={s} shape="rounded" variant="image" />)}
          </div>
          <div className="flex items-center gap-8">
            {sizes.map((s) => (
              <Avatar key={`label-square-${s}`} size={s} shape="square" variant="label" label="TW" />
            ))}
          </div>
          <div className="flex items-center gap-8">
            {sizes.map((s) => (
              <Avatar key={`label-pill-${s}`} size={s} shape="pill" variant="label" label="TW" className="bg-background-inverse-primary text-content-inverse-primary border-transparent" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
