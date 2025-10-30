// src/components/ui/Radio.jsx
import React, { forwardRef } from "react";
import ThemeToggle from "./ThemeToggle";

const cn = (...xs) => xs.filter(Boolean).join(" ");

export const Radio = forwardRef(function Radio(
  {
    id,
    name,
    value,
    checked = false,
    defaultChecked,
    disabled = false,
    label,
    description,
    className,
    onChange,
    ...props
  },
  ref
) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className={cn("flex items-start gap-3 cursor-pointer", disabled && "cursor-not-allowed opacity-70")}
      >
        <input
          ref={ref}
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          className="sr-only peer"
          {...props}
        />

        <span
          aria-hidden="true"
          className={cn(
            "relative shrink-0 rounded-full",
            // 크기
            "w-5 h-5",
            // 기본: 배경/테두리
            "bg-background-primary border border-border-primary",

            // ── 중앙 점 (기본 숨김, 흰색)
            "after:content-[''] after:absolute after:block after:rounded-full",
            "after:inset-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
            "after:w-2.5 after:h-2.5 after:bg-core-white after:opacity-0",

            // ✅ 라이트 체크: 바깥 검정 채움 + 흰 점 표시 + 테두리 진하게
            "peer-checked:bg-content-primary peer-checked:after:opacity-100 peer-checked:border-content-primary",

            // ✅ 다크 체크: 바깥은 채우지 않고 배경 유지, 흰 점만 보이게
            "dark:peer-checked:bg-background-primary",
            "dark:peer-checked:after:opacity-100",
            "dark:peer-checked:border-content-secondary",
            "dark:peer-checked:ring-2 dark:peer-checked:ring-core-white/20 dark:peer-checked:ring-offset-0",

            // 포커스
            "peer-focus-visible:outline-none peer-focus-visible:ring-2",
            "peer-focus-visible:ring-focus-ring peer-focus-visible:ring-offset-2 ring-offset-bg",
            className
          )}
        />

        {(label || description) && (
          <span className="flex flex-col">
            {label && (
              <span
                className={cn(
                  "font-medium text-content-primary",
                  "text-paragraph-base",
                  disabled && "text-content-tertiary"
                )}
              >
                {label}
              </span>
            )}
            {description && (
              <span className="text-paragraph-small text-content-secondary">
                {description}
              </span>
            )}
          </span>
        )}
      </label>
    </div>
  );
});
Radio.displayName = "Radio";

export function RadioGroup({
  children,
  name,
  value,
  onChange,
  disabled = false,
  direction = "vertical",
  className,
  ...props
}) {
  const dirCls = direction === "horizontal" ? "flex flex-wrap items-start gap-4" : "space-y-4";

  return (
    <div className={cn(dirCls, className)} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const isRadio =
          child.type === Radio ||
          child.type?.displayName === "Radio" ||
          child.type?.name === "Radio";

        if (!isRadio) return child;

        return React.cloneElement(child, {
          name,
          checked: child.props.value === value,
          onChange: (e) => onChange?.(e.target.value),
          disabled: disabled || child.props.disabled,
        });
      })}
    </div>
  );
}

export function RadioShowcase() {
  const [val1, setVal1] = React.useState("b");
  const [val2, setVal2] = React.useState("b");

  return (
    <main className="p-8">
      <section className="relative mx-auto max-w-2xl rounded-2xl border border-border-primary bg-background-primary p-6">
        <span className="inline-block px-2 py-1 mb-4 rounded-md border text-paragraph-small">Light</span>
        <ThemeToggle className="absolute top-4 right-4" />

        <RadioGroup name="g1" value={val1} onChange={setVal1}>
          <Radio
            id="r1a"
            value="a"
            label="Allow tickets to be resold"
            description="Customers can resell or transfer their tickets if they can’t make it to the event."
          />
          <Radio
            id="r1b"
            value="b"
            label="Allow tickets to be resold"
            description="Customers can resell or transfer their tickets if they can’t make it to the event."
          />
        </RadioGroup>

        <div className="mt-8">
          <RadioGroup name="g2" value={val2} onChange={setVal2}>
            <Radio id="r2a" value="a" label="Allow tickets to be resold" />
            <Radio id="r2b" value="b" label="Allow tickets to be resold" />
          </RadioGroup>
        </div>

        <div className="mt-8">
          <RadioGroup name="g3" value={val2} onChange={setVal2}>
            <Radio id="r3a" value="a" />
            <Radio id="r3b" value="b" />
          </RadioGroup>
        </div>
      </section>
    </main>
  );
}

export default Radio;
