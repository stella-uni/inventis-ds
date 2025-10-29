// src/components/ui/Button.jsx
import React from "react";
const sizeStyles = {
  xs: "px-2 py-1 rounded-md text-label-tiny",
  sm: "px-2 py-1 rounded-md text-label-small",
  base: "px-2.5 py-1.5 rounded-lg text-label-small",
  l: "px-3 py-2 rounded-lg text-label-small",
  xl: "px-4 py-2 rounded-lg text-label-base",
};
const variants = {
  default:
    "bg-background-inverse-primary text-content-inverse-primary border border-border-inverse-primary shadow-sm " +
    "hover:bg-btn-inverse-hover/95 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ring-offset-2 ring-offset-bg " +
    "disabled:opacity-50 disabled:cursor-not-allowed",
  outline:
    "bg-background-primary text-content-primary border border-border-primary shadow-sm " +
    "hover:bg-btn-inverse-hover/5 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ring-offset-2 ring-offset-bg " +
    "disabled:text-content-secondary disabled:opacity-50 disabled:cursor-not-allowed",
  plain:
    "bg-transparent text-content-primary " +
    "hover:bg-btn-inverse-hover/5 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ring-offset-2 ring-offset-bg " +
    "disabled:text-content-secondary disabled:opacity-50 disabled:cursor-not-allowed",
};
function cn(...v) {
  return v.filter(Boolean).join(" ");
}
export default function Button({
  variant = "default",
  size = "base",
  className,
  children = "Button text",
  ...props
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap select-none transition-colors outline-none",
        sizeStyles[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {" "}
      {children}{" "}
    </button>
  );
}
export function ShowcaseButton({
  state = "default",
  variant = "default",
  className,
  ...props
}) {
  if (state === "disabled") {
    return (
      <Button disabled variant={variant} className={className} {...props} />
    );
  }
  if (state === "hover") {
    const hoverBg =
      variant === "default"
        ? "bg-background-inverse-primary/95"
        : "bg-btn-inverse-hover/5";
    return (
      <Button variant={variant} className={cn(hoverBg, className)} {...props} />
    );
  }
  if (state === "focus") {
    const focusRing =
      "ring-2 ring-focus-ring ring-offset-2 ring-offset-bg focus-visible:outline-none";
    return (
      <Button
        variant={variant}
        className={cn(focusRing, className)}
        {...props}
      />
    );
  }
  return <Button variant={variant} className={className} {...props} />;
}
