import React from "react";
import { ShowcaseButton as Button } from "./components/ui/Button";

const sizes = ["xs", "sm", "base", "l", "xl"];
const sections = [
  { title: "Default", variant: "default" },
  { title: "Outline", variant: "outline" },
  { title: "Plain", variant: "plain" },
];
const states = ["default", "hover", "focus", "disabled"];

export default function App() {
  return (
    <main className="min-h-dvh w-full bg-background-primary text-content-primary p-8">
      {sections.map((sec) => (
        <section key={sec.title} className="mb-10">
          <h2 className="mb-3 text-label-base font-semibold text-content-secondary">
            {sec.title}
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
    </main>
  );
}
