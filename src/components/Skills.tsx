import * as React from "react";
import { SKILLS } from "@/data";

const Skills: React.FC = () => (
  <dl className="divide-y divide-border border-t border-border">
    {SKILLS.map(({ label, skills }) => (
      <div
        key={label}
        className="grid gap-x-8 gap-y-1 py-4 md:grid-cols-[9.5rem_1fr]"
      >
        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </dt>
        <dd className="font-display text-sm text-foreground/90">
          {skills.join(" · ")}
        </dd>
      </div>
    ))}
  </dl>
);

export default Skills;
