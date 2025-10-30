// src/components/Badge.jsx
import React from "react";

/**
 * Figma Code Connect mapping
 * - Keep this data attribute for traceability to the design source.
 * - IVTS DS: https://www.figma.com/design/...node-id=158-14521
 */
const FIGMA_NODE = "158-14521";

// Tiny classnames combiner (cn)
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

/**
 * Badge – token-first, variant/tone-driven
 *
 * Props
 * - size: "xs" | "sm" | "base" | "l" | "xl" (default: "base")
 * - variant: "solid" | "soft" | "outline" | "ghost"
 * - tone: e.g., "primary" | "zinc" | "blue" | "red" ...
 * - radius?: "md" | "lg" | "xl" | "2xl" (default: "lg")
 * - leadingIcon?: ReactNode
 * - trailingIcon?: ReactNode
 * - disabled?: boolean
 * - className?: string
 * - children?: ReactNode
 *
 * Accessibility
 * - role="status" (informational chip)
 * - aria-disabled when disabled
 * - keyboard focus visible w/ DS tokens
 */

const sizeStyles = {
  xs: "px-1.5 py-0.5 text-label-tiny",
  sm: "px-2 py-0.5 text-label-small",
  base: "px-2.5 py-0.5 text-label-small",
  l: "px-3 py-1 text-label-small",
  xl: "px-3.5 py-1 text-label-base",
};

const radiusStyles = {
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

/**
 * Variant x Tone -> token classes
 * NOTE:
 * - Use only semantic token classes:
 *   bg-background-*, text-content-*, border-border-*
 * - Replace/extend tone keys to match your DS (primary/zinc/blue/red/…)
 * - If your DS uses different token suffixes (e.g. -subtle, -inverse),
 *   adjust the strings below, not the component API.
 */
const toneMap = {
  primary: {
    solid:
      "bg-background-inverse-primary text-content-inverse-primary border-border-inverse-overlay",
    soft:
      "bg-background-primary-subtle text-content-primary border-border-primary",
    outline:
      "bg-background-primary text-content-primary border border-border-primary",
    ghost:
      "bg-background-primary text-content-primary border border-transparent",
  },
  zinc: {
    solid:
      "bg-background-inverse-zinc text-content-inverse-zinc border-border-inverse-overlay",
    soft:
      "bg-background-zinc-subtle text-content-zinc border-border-zinc",
    outline:
      "bg-background-zinc text-content-zinc border border-border-zinc",
    ghost:
      "bg-background-zinc text-content-zinc border border-transparent",
  },
  blue: {
    solid:
      "bg-background-inverse-blue text-content-inverse-blue border-border-inverse-overlay",
    soft:
      "bg-background-blue-subtle text-content-blue border-border-blue",
    outline:
      "bg-background-blue text-content-blue border border-border-blue",
    ghost:
      "bg-background-blue text-content-blue border border-transparent",
  },
  red: {
    solid:
      "bg-background-inverse-red text-content-inverse-red border-border-inverse-overlay",
    soft:
      "bg-background-red-subtle text-content-red border-border-red",
    outline:
      "bg-background-red text-content-red border border-border-red",
    ghost:
      "bg-background-red text-content-red border border-transparent",
  },
};

export function Badge({
  size = "base",
  variant = "soft",
  tone = "zinc",
  radius = "lg",
  leadingIcon,
  trailingIcon,
  disabled = false,
  className,
  children,
  ...props
}) {
  const variantTokens = toneMap[tone]?.[variant];

  return (
    <span
      data-figma-node={FIGMA_NODE}
      role="status"
      aria-disabled={disabled || undefined}
      className={cn(
        "inline-flex items-center gap-1 align-middle select-none",
        sizeStyles[size],
        radiusStyles[radius],
        // Focus ring tokens (no custom colors)
        "focus-visible:outline-none focus-visible:ring-2 ring-focus-ring ring-offset-2 ring-offset-bg",
        // Disabled state via utility only (opacity/cursor)
        disabled && "opacity-60 cursor-not-allowed",
        variantTokens,
        className
      )}
      tabIndex={0}
      {...props}
    >
      {leadingIcon ? (
        <span className="shrink-0 inline-flex">{leadingIcon}</span>
      ) : null}
      <span className="whitespace-nowrap">{children}</span>
      {trailingIcon ? (
        <span className="shrink-0 inline-flex">{trailingIcon}</span>
      ) : null}
    </span>
  );
}

// 임의 아이콘 예시 (lucide-react 등을 쓰면 그대로 넣으세요)
function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />;
}

const showcaseSizes = ["xs", "sm", "base", "l", "xl"];
const showcaseVariants = ["solid", "soft", "outline", "ghost"];
const showcaseTones = ["primary", "zinc", "blue", "red"];

export function BadgeShowcase() {
  return (
    <section className="space-y-6">
      {showcaseVariants.map((variant) => (
        <div key={variant} className="space-y-2">
          <h3 className="text-title-small">{variant}</h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {showcaseTones.map((tone) => (
              <div key={tone} className="p-3 border border-border-primary rounded-lg bg-background-primary">
                <div className="mb-2 text-label-small text-content-secondary">{tone}</div>
                <div className="flex flex-wrap gap-2">
                  {showcaseSizes.map((size) => (
                    <Badge
                      key={size}
                      size={size}
                      tone={tone}
                      variant={variant}
                      leadingIcon={<Dot />}
                      trailingIcon={<Dot />}
                    >
                      {tone}/{size}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Badge;
