import * as React from "react";
import { EDUCATION } from "@/data";

const Education: React.FC = () => (
  <div className="divide-y divide-border border-t border-border">
    {EDUCATION.map((edu) => (
      <article
        key={edu.school}
        className="grid gap-x-8 gap-y-3 py-8 md:grid-cols-[9.5rem_1fr]"
      >
        <p className="flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] leading-5 md:block">
          <span className="text-foreground">{edu.period}</span>
          <span className="text-border md:hidden">·</span>
          <span className="text-muted-foreground md:mt-1 md:block">
            {edu.location}
          </span>
        </p>
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-foreground">
            {edu.school}
          </h3>
          <p className="mt-2 font-display text-sm font-medium text-foreground/90">
            {edu.title}
          </p>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.65] text-muted-foreground">
            {edu.detail}
          </p>
        </div>
      </article>
    ))}
  </div>
);

export default Education;
