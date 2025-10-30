import React from "react";
import { cn } from "../lib/utils";

/**
 * Light 전용 Input (Error 없음 버전)
 * state: "default" | "hover" | "focus" | "filled" | "disabled"
 */
export default function Input({
  id,
  label,
  helperText,
  placeholder = "Jane Doe",
  state = "default",
  size = "base",
  className,
  defaultValue,
  ...props
}) {
  const sizeStyles = {
    xs: "h-8 text-label-tiny px-2 rounded-md",
    sm: "h-9 text-label-small px-2.5 rounded-md",
    base: "h-10 text-label-small px-3 rounded-lg",
    l: "h-11 text-label-small px-3.5 rounded-lg",
    xl: "h-12 text-label-base px-4 rounded-xl",
  };

  // 색은 전부 토큰으로 고정 (node-id=113-43478 매핑)
  const base =
    "w-full text-left bg-background-primary text-content-primary " +
    "placeholder:text-[rgb(var(--content-secondary))]/60 " +
    "border border-[rgb(var(--border-primary))] outline-none transition-colors " +
    "focus-visible:ring-2 focus-visible:ring-[rgb(var(--focus-ring))] ring-offset-2 ring-offset-bg " +
    "hover:border-[rgb(var(--input-border-hover))] " +
    "disabled:cursor-not-allowed disabled:opacity-60";

  // 쇼케이스 강제 상태
  const forced =
    state === "hover"
      ? "border-[rgb(var(--input-border-hover))]"
      : state === "focus"
        ? "ring-2 ring-[rgb(var(--focus-ring))] ring-offset-2 ring-offset-bg"
        : state === "disabled"
          ? "opacity-60 cursor-not-allowed"
          : "";

  const isDisabled = state === "disabled";
  const isFilled = state === "filled";

  return (
    <div className={cn("w-full text-left", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-label-small text-[rgb(var(--content-secondary))] mb-1"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        disabled={isDisabled}
        placeholder={placeholder}
        defaultValue={isFilled ? (defaultValue ?? "Jane Doe") : undefined}
        className={cn(sizeStyles[size], base, forced)}
        {...props}
      />

      {helperText && (
        <p className="mt-1 min-h-5 text-label-tiny text-[rgb(var(--content-secondary))]">
          {helperText}
        </p>
      )}
    </div>
  );
}

export function InputCell(props) {
  // td가 text-center여도 내부를 항상 좌정렬
  return (
    <div className="max-w-sm w-full text-left">
      <Input {...props} />
    </div>
  );
}
