// src/App.jsx
import React from "react";
import { ShowcaseButton as Button } from "./components/Button";
import ThemeToggle from "./components/ThemeToggle";
import Input, { InputCell } from "./components/Input";
import Select from "./components/Select";
import { BadgeShowcase } from "./components/Badge";
import ShowcaseAvatar from "./components/Avatar";
import CheckboxShowcase from "./components/Checkbox";



const sizes = ["xs", "sm", "base", "l", "xl"];
const sections = [
  { title: "Default", variant: "default" },
  { title: "Outline", variant: "outline" },
  { title: "Plain", variant: "plain" },
];
const states = ["default", "hover", "focus", "disabled"];

const inputRows = ["Default", "Hover", "Focus", "Filled", "Disabled"];
const toState = {
  Default: "default",
  Hover: "hover",
  Focus: "focus",
  Filled: "filled",
  Disabled: "disabled",
};

export default function App() {
  return (
    <main className="min-h-dvh w-full bg-background-primary text-content-primary p-8">
      {/* 우상단 다크모드 토글 */}
      <div className="flex items-center justify-end mb-6">
        <ThemeToggle />
      </div>

      {/* 텍스트 버튼 쇼케이스 */}
      {sections.map((sec) => (
        <section key={sec.title} className="mb-10">
          <h2 className="mb-3 text-label-base font-semibold text-content-secondary">
            {sec.title} – Text Button
          </h2>

          <div className="rounded-2xl border border-border-primary bg-background-primary p-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[180px] text-right pr-4 py-3 text-paragraph-small text-content-secondary font-medium"
                  >
                    State \ Size
                  </th>
                  {sizes.map((s) => (
                    <th
                      key={s}
                      scope="col"
                      className="text-center py-3 text-paragraph-small text-content-secondary font-medium"
                    >
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {states.map((st) => (
                  <tr key={`${sec.title}-${st}`}>
                    <th
                      scope="row"
                      className="text-right pr-4 py-2 text-paragraph-small text-content-secondary capitalize font-normal"
                    >
                      {st}
                    </th>
                    {sizes.map((sz) => (
                      <td
                        key={`${sec.title}-${st}-${sz}`}
                        className="py-2 text-center"
                      >
                        <Button variant={sec.variant} size={sz} state={st}>
                          Button text
                        </Button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Icon-only 버튼 쇼케이스 */}
      {sections.map((sec) => (
        <section key={`icononly-${sec.title}`} className="mb-10">
          <h2 className="mb-3 text-label-base font-semibold text-content-secondary">
            {sec.title} – Icon-only
          </h2>

          <div className="rounded-2xl border border-border-primary bg-background-primary p-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[180px] text-right pr-4 py-3 text-paragraph-small text-content-secondary font-medium"
                  >
                    State \ Size
                  </th>
                  {sizes.map((s) => (
                    <th
                      key={s}
                      scope="col"
                      className="text-center py-3 text-paragraph-small text-content-secondary font-medium"
                    >
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {states.map((st) => (
                  <tr key={`icononly-${sec.title}-${st}`}>
                    <th
                      scope="row"
                      className="text-right pr-4 py-2 text-paragraph-small text-content-secondary capitalize font-normal"
                    >
                      {st}
                    </th>
                    {sizes.map((sz) => (
                      <td
                        key={`icononly-${sec.title}-${st}-${sz}`}
                        className="py-2 text-center"
                      >
                        <Button
                          variant={sec.variant}
                          size={sz}
                          state={st}
                          iconOnly
                          icon="plus"
                          aria-label="Add item"
                          title="Add item"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Input 쇼케이스 */}
      <section className="mb-12">
        <h2 className="mb-3 text-label-base font-semibold text-content-secondary">
          Input – Light (Error = False)
        </h2>

        <div className="rounded-2xl border border-border-primary bg-background-primary p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[160px] text-right pr-4 py-3 text-paragraph-small text-content-secondary font-medium">
                  {/* 빈 헤더(행 제목) */}
                </th>
                <th className="text-center py-3 text-paragraph-small text-content-secondary font-medium">
                  No Label
                </th>
                <th className="text-center py-3 text-paragraph-small text-content-secondary font-medium">
                  Label = True
                </th>
                <th className="text-center py-3 text-paragraph-small text-content-secondary font-medium">
                  Label = True, Helper Text = True
                </th>
              </tr>
            </thead>
            <tbody>
              {inputRows.map((row) => (
                <tr key={row}>
                  <th className="text-right pr-4 py-3 text-paragraph-small text-content-secondary font-medium">
                    {row}
                  </th>

                  {/* No Label */}
                  <td className="py-2 text-center">
                    <InputCell
                      size="base"
                      state={toState[row]}
                      placeholder="Jane Doe"
                    />
                  </td>

                  {/* Label = True */}
                  <td className="py-2 text-center">
                    <InputCell
                      size="base"
                      state={toState[row]}
                      label="About"
                      placeholder="Jane Doe"
                    />
                  </td>

                  {/* Label = True, Helper Text = True */}
                  <td className="py-2 text-center">
                    <InputCell
                      size="base"
                      state={toState[row]}
                      label="About"
                      helperText="Helper text"
                      placeholder="Jane Doe"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Select 쇼케이스 */}
      <section className="mb-12">
        <h2 className="mb-3 text-label-base font-semibold text-content-secondary">
          Select – Light
        </h2>

        <div className="rounded-2xl border border-border-primary bg-background-primary p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[160px] text-right pr-4 py-3 text-paragraph-small text-content-secondary font-medium"></th>
                <th className="text-center py-3 text-paragraph-small text-content-secondary font-medium">
                  No Label
                </th>
                <th className="text-center py-3 text-paragraph-small text-content-secondary font-medium">
                  Label = True
                </th>
                <th className="text-center py-3 text-paragraph-small text-content-secondary font-medium">
                  Label = True, Helper Text = True
                </th>
              </tr>
            </thead>
            <tbody>
              {["default", "hover", "focus", "disabled", "open"].map((st) => (
                <tr key={`select-${st}`}>
                  <th className="text-right pr-4 py-3 text-paragraph-small text-content-secondary font-medium capitalize">
                    {st}
                  </th>

                  {/* No Label */}
                  <td className="py-2 text-center">
                    <div className="max-w-sm mx-auto">
                      <Select
                        size="base"
                        state={st}
                        placeholder="Select"
                        items={[
                          { isHeader: true, label: "Header …" },
                          { value: "one", label: "Item One" },
                          { value: "two", label: "Item Two" },
                          { value: "three", label: "Item Three" },
                          { value: "four", label: "Item Four" },
                          { value: "five", label: "Item Five" },
                          { value: "six", label: "Item Six" },
                        ]}
                        defaultValue={st === "disabled" ? undefined : "three"}
                        disabled={st === "disabled"}
                      />
                    </div>
                  </td>

                  {/* Label */}
                  <td className="py-2 text-center">
                    <div className="max-w-sm mx-auto">
                      <Select
                        size="base"
                        state={st}
                        label="Select"
                        placeholder="Select"
                        items={[
                          { isHeader: true, label: "Header …" },
                          { value: "one", label: "Item One" },
                          { value: "two", label: "Item Two" },
                          { value: "three", label: "Item Three" },
                          { value: "four", label: "Item Four" },
                          { value: "five", label: "Item Five" },
                          { value: "six", label: "Item Six" },
                        ]}
                        defaultValue={st === "disabled" ? undefined : "three"}
                        disabled={st === "disabled"}
                      />
                    </div>
                  </td>

                  {/* Label + Helper */}
                  <td className="py-2 text-center">
                    <div className="max-w-sm mx-auto">
                      <Select
                        size="base"
                        state={st}
                        label="Select"
                        helperText="Helper text"
                        placeholder="Select"
                        items={[
                          { isHeader: true, label: "Header …" },
                          { value: "one", label: "Item One" },
                          { value: "two", label: "Item Two" },
                          { value: "three", label: "Item Three" },
                          { value: "four", label: "Item Four" },
                          { value: "five", label: "Item Five" },
                          { value: "six", label: "Item Six" },
                        ]}
                        defaultValue={st === "disabled" ? undefined : "three"}
                        disabled={st === "disabled"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Badge 쇼케이스 */}
      <div className="max-w-4xl w-full px-6 py-10">
        <h1 className="text-heading-small mb-6 text-content-secondary">
          Badge
        </h1>
        <BadgeShowcase />
      </div>

      {/* Avatar 쇼케이스 */}
      <div className="max-w-4xl w-full px-6 py-10">
        <h1 className="text-heading-small mb-6 text-content-secondary">
          Avatar
        </h1>
        <ShowcaseAvatar />
      </div>

      {/* Checkbox 쇼케이스 */}
      <div className="max-w-4xl w-full px-6 py-10">
        <h1 className="text-heading-small mb-6 text-content-secondary">
          Checkbox
        </h1>
        <CheckboxShowcase />
      </div>
    </main>
  );
}
