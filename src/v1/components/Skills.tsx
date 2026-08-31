import * as React from "react";
import { InnerCard, OuterCard } from "./Cards";
import { CustomHeader } from "./typography";
import { SKILLS } from "@/data";

const Skills: React.FC = () => (
  <OuterCard>
    <CustomHeader>Skills</CustomHeader>
    <InnerCard className="divide-y divide-border p-0">
      {SKILLS.map(({ label, skills }) => (
        <div key={label} className="px-5 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            {label}
          </p>
          <p className="mt-1 text-[13px] leading-5 text-foreground/85">
            {skills.join(" · ")}
          </p>
        </div>
      ))}
    </InnerCard>
  </OuterCard>
);

export default Skills;
