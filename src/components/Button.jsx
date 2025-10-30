// src/components/Button.jsx
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const sizeStyles = {
  xs: "px-2 py-1 rounded-md text-label-tiny",
  sm: "px-2 py-1 rounded-md text-label-small",
  base: "px-2.5 py-1.5 rounded-lg text-label-small",
  l: "px-3 py-2 rounded-lg text-label-small",
  xl: "px-4 py-2 rounded-lg text-label-base",
};

// Icon-only 버튼 사이즈 (정사각형)
const iconOnlySizeStyles = {
  xs: "p-1 rounded-md",
  sm: "p-1.5 rounded-md",
  base: "p-2 rounded-lg",
  l: "p-2.5 rounded-lg",
  xl: "p-3 rounded-lg",
};

// 아이콘 크기
const iconSizeStyles = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  base: "w-5 h-5",
  l: "w-5 h-5",
  xl: "w-6 h-6",
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
  iconOnly = false,
  icon = "plus",
  className,
  children,
  ...props
}) {
  // Icon-only 버튼인 경우
  if (iconOnly) {
    const IconComponent = icon === "plus" ? PlusIcon : PlusIcon; // 필요시 확장
    return (
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center select-none transition-colors outline-none",
          iconOnlySizeStyles[size],
          variants[variant],
          className
        )}
        {...props}
      >
        <IconComponent className={iconSizeStyles[size]} />
      </button>
    );
  }

  // 일반 텍스트 버튼
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
      {children || "Button text"}
    </button>
  );
}

export function ShowcaseButton({
  state = "default",
  variant = "default",
  iconOnly = false,
  className,
  ...props
}) {
  if (state === "disabled") {
    return (
      <Button disabled variant={variant} iconOnly={iconOnly} className={className} {...props} />
    );
  }

  if (state === "hover") {
    const hoverBg =
      variant === "default"
        ? "bg-background-inverse-primary/95"
        : "bg-btn-inverse-hover/5";
    return (
      <Button variant={variant} iconOnly={iconOnly} className={cn(hoverBg, className)} {...props} />
    );
  }

  if (state === "focus") {
    const focusRing =
      "ring-2 ring-focus-ring ring-offset-2 ring-offset-bg focus-visible:outline-none";
    return (
      <Button
        variant={variant}
        iconOnly={iconOnly}
        className={cn(focusRing, className)}
        {...props}
      />
    );
  }

  return <Button variant={variant} iconOnly={iconOnly} className={className} {...props} />;
}

