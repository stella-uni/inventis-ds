import React from "react";

/* tiny cn */
const cn = (...a) => a.filter(Boolean).join(" ");

const styles = `/* (생략) 기존 mask 아이콘 CSS 그대로 */ 
.cbx{position:relative}
.cbx::before{content:"";position:absolute;inset:0;margin:auto;width:14px;height:14px;opacity:0;transition:opacity .15s;background:currentColor;-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;mask-position:center;mask-repeat:no-repeat;mask-size:contain}
.cbx--check::before{ -webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'><path fill-rule='evenodd' d='M16.704 5.29a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.793-6.793a1 1 0 011.414 0z' clip-rule='evenodd'/></svg>"); mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'><path fill-rule='evenodd' d='M16.704 5.29a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.793-6.793a1 1 0 011.414 0z' clip-rule='evenodd'/></svg>") }
.cbx--minus::before{ -webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'><path d='M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z'/></svg>"); mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'><path d='M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z'/></svg>") }
.peer:checked + .cbx::before{opacity:1}
`;

export function Checkbox({
  id, name, label, description,
  checked, defaultChecked, onChange,
  indeterminate = false, disabled = false, className,
}) {
  const inputRef = React.useRef(null);
  React.useEffect(() => { if (inputRef.current) inputRef.current.indeterminate = indeterminate; }, [indeterminate]);

  const wrapper = cn("flex items-start gap-3 select-none", disabled && "opacity-60 cursor-not-allowed", className);

  const labelCls = "text-[15px] font-semibold leading-5 text-content-primary text-zinc-900 dark:text-zinc-100";
  const descCls = "mt-0.5 text-sm leading-5 text-content-secondary text-zinc-500 dark:text-zinc-400";

  const baseBox =
    "inline-flex shrink-0 w-5 h-5 rounded-md border transition-colors " +
    "bg-background-primary border-border-tertiary " +
    "hover:border-input-border-hover " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring " +
    "ring-offset-2 ring-offset-bg";

  const stateBox =
    "peer-checked:bg-background-inverse-primary " +
    "peer-checked:border-background-inverse-primary " +
    "peer-checked:text-core-white";

  const beforeClass = indeterminate ? "cbx cbx--minus" : "cbx cbx--check";
  const disabledBox = disabled ? "bg-background-secondary border-border-tertiary" : "";

  return (
    <label className={wrapper}>
      <style>{styles}</style>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={indeterminate ? "mixed" : checked}
      />
      <span className={cn(beforeClass, baseBox, stateBox, disabledBox)} aria-hidden="true" />
      {(label || description) && (
        <span>
          {label && <div className={labelCls}>{label}</div>}
          {description && <div className={descCls}>{description}</div>}
        </span>
      )}
    </label>
  );
}

/* ─ Showcase: 한 화면 + ThemeToggle로 전환 ─ */
import ThemeToggle from "./ThemeToggle";

export default function CheckboxShowcase() {
  const t = "Show on Events Page";
  const d = "Make this event visible on your profile.";

  return (
    <main className="p-8">
      <section className="relative mx-auto max-w-3xl rounded-2xl border bg-background-primary border-border-tertiary p-6">
        <span className="inline-block px-2 py-1 rounded-md border text-sm mb-6">Checkbox</span>

        {/* Theme switch (우상단) */}
        <ThemeToggle className="absolute top-4 right-4" />

        <div className="space-y-8">
          <div className="space-y-5">
            <Checkbox label={t} description={d} />
            <Checkbox defaultChecked label={t} description={d} />
          </div>

          <div className="space-y-5">
            <Checkbox label={t} />
            <Checkbox defaultChecked label={t} />
          </div>

          <div className="flex items-center gap-6">
            <Checkbox aria-label="Empty" />
            <Checkbox defaultChecked aria-label="Checked" />
          </div>

          <div className="space-y-3">
            <Checkbox label="Default" />
            <Checkbox label="Hover" />
            <Checkbox defaultChecked label="Selected" />
            <Checkbox label="Intermediate" indeterminate />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Disabled" disabled defaultChecked />
          </div>
        </div>
      </section>
    </main>
  );
}
