import React, { useId, useMemo, useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import {
  ChevronUpDownIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

/**
 * Light 전용 Select
 * - 토큰: border-[--border-primary], hover:[--input-border-hover], ring-[--focus-ring]
 * - state: "default" | "hover" | "focus" | "disabled" | "open" (쇼케이스 강제용)
 */
export default function Select({
  id,
  label,
  helperText,
  placeholder = "Select",
  items = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  size = "base", // xs | sm | base | l | xl
  state = "default", // 쇼케이스 강제 상태
  className,
}) {
  const innerId = useId();
  const selectId = id ?? innerId;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internalValue;

  const [open, setOpen] = useState(false);
  const forcedOpen = state === "open";
  const actuallyOpen = forcedOpen || open;

  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!forcedOpen) return;
    // 강제 open 상태일 때 포커스 링 보이도록
    btnRef.current?.focus();
  }, [forcedOpen]);

  // 외부 클릭 닫기 (강제 open 아닐 때만)
  useEffect(() => {
    if (!actuallyOpen || forcedOpen) return;
    function onDoc(e) {
      if (
        !btnRef.current?.contains(e.target) &&
        !menuRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [actuallyOpen, forcedOpen]);

  function handlePick(val) {
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
    if (!forcedOpen) setOpen(false);
  }

  const sizeStyles = {
    xs: "h-8 text-label-tiny px-2 rounded-md",
    sm: "h-9 text-label-small px-2.5 rounded-md",
    base: "h-10 text-label-small px-3 rounded-lg",
    l: "h-11 text-label-small px-3.5 rounded-lg",
    xl: "h-12 text-label-base px-4 rounded-xl",
  };

  const baseBtn =
    "w-full inline-flex items-center justify-between gap-2 " +
    "bg-background-primary text-content-primary " +
    "border border-[rgb(var(--border-primary))] outline-none " +
    "transition-colors disabled:opacity-60 disabled:cursor-not-allowed " +
    "hover:border-[rgb(var(--input-border-hover))] " +
    "focus-visible:ring-2 focus-visible:ring-[rgb(var(--focus-ring))] ring-offset-2 ring-offset-bg";

  const forced =
    state === "hover"
      ? "border-[rgb(var(--input-border-hover))]"
      : state === "focus" || state === "open"
        ? "ring-2 ring-[rgb(var(--focus-ring))] ring-offset-2 ring-offset-bg"
        : state === "disabled"
          ? "opacity-60 cursor-not-allowed"
          : "";

  const isDisabled = disabled || state === "disabled";

  const labelEl = label ? (
    <label
      htmlFor={selectId}
      className="mb-1 block text-label-small text-[rgb(var(--content-secondary))]"
    >
      {label}
    </label>
  ) : null;

  const helperEl = helperText ? (
    <p className="mt-1 min-h-5 text-label-tiny text-[rgb(var(--content-secondary))]">
      {helperText}
    </p>
  ) : null;

  const selectedLabel = useMemo(() => {
    const found = items.find((i) => i?.value === selected);
    return found?.label ?? "";
  }, [items, selected]);

  return (
    <div className={cn("w-full text-left", className)}>
      {labelEl}

      <button
        ref={btnRef}
        id={selectId}
        type="button"
        className={cn(sizeStyles[size], baseBtn, forced)}
        aria-haspopup="listbox"
        aria-expanded={actuallyOpen}
        aria-disabled={isDisabled}
        onClick={() => !isDisabled && setOpen((o) => !o)}
      >
        <span className={cn("truncate", selected ? "" : "text-[rgb(var(--content-secondary))]")}>
          {selected ? selectedLabel : placeholder}
        </span>
        <ChevronUpDownIcon className={cn("shrink-0", iconSize[size])} aria-hidden="true" />
      </button>

      {/* Dropdown */}
      {actuallyOpen && (
        <div
          ref={menuRef}
          className="relative z-10"
          aria-hidden="false"
        >
          <div
            role="listbox"
            tabIndex={-1}
            className="absolute mt-2 w-full rounded-xl border border-[rgb(var(--border-primary))] bg-background-secondary text-content-primary shadow-lg p-1"
          >
            {items.map((item, idx) => {
              if (item?.divider) {
                return <div key={`div-${idx}`} className="my-1 border-t border-[rgb(var(--border-secondary))]" />;
              }
              if (item?.isHeader) {
                return (
                  <div
                    key={`hdr-${idx}`}
                    className="px-3 py-2 text-label-small text-[rgb(var(--content-secondary))]"
                  >
                    {item.label}
                  </div>
                );
              }
              const active = item?.value === selected;
              return (
                <button
                  key={String(item.value)}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => handlePick(item.value)}
                  className={cn(
                    "w-full px-3 py-2 rounded-md text-left inline-flex items-center gap-2",
                    "hover:bg-btn-inverse-hover/5",
                    item.disabled && "opacity-50 cursor-not-allowed",
                    active && "font-medium"
                  )}
                  disabled={item.disabled}
                >
                  <span className="inline-flex items-center justify-center w-4 h-4">
                    {active && <CheckIcon className="size-4" aria-hidden="true" />}
                  </span>
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {helperEl}
    </div>
  );
}

const iconSize = {
  xs: "size-4",
  sm: "size-5",
  base: "size-5",
  l: "size-5",
  xl: "size-6",
};
