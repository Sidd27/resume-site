import * as React from "react";
import { EXPERIENCE } from "@/data";
import { splitMetrics } from "@/lib/utils";

/** Sets measured outcomes ("~23 → ~75") apart so they survive a 10-second scan. */
const Measured: React.FC<{ text: string }> = ({ text }) => (
  <>
    {splitMetrics(text).map((part, i) =>
      part.metric ? (
        <span key={i} className="metric">
          {part.text}
        </span>
      ) : (
        <React.Fragment key={i}>{part.text}</React.Fragment>
      )
    )}
  </>
);

const Experience: React.FC = () => (
  <div className="divide-y divide-border border-t border-border">
    {EXPERIENCE.map((role) => (
      <article
        key={role.company}
        className="grid gap-x-8 gap-y-4 py-8 md:grid-cols-[9.5rem_1fr] md:py-10"
      >
        <div className="md:sticky md:top-24 md:h-fit">
          <p className="font-mono text-[11px] leading-5 text-foreground">
            {role.period}
          </p>
          <p className="mt-1 font-mono text-[11px] leading-5 text-muted-foreground">
            {role.location}
            <span className="block">{role.type}</span>
          </p>
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <img
              src={role.image}
              alt=""
              width={22}
              height={22}
              loading="lazy"
              className="h-[22px] w-[22px] shrink-0 object-contain"
            />
            <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-foreground">
              {role.company}
            </h3>
          </div>
          <p className="mt-2 font-display text-sm font-medium text-foreground/90">
            {role.title}
          </p>
          <p className="mt-1 text-sm italic text-muted-foreground">
            {role.domain}
          </p>

          <ul className="ledger mt-5 space-y-3 text-[15px] leading-[1.65] text-foreground/85">
            {role.bullets.map((bullet, i) => (
              <li key={i}>
                <Measured text={bullet} />
              </li>
            ))}
          </ul>

          <p className="mt-5 font-mono text-[11px] leading-5 text-muted-foreground">
            {role.techs.join(" · ")}
          </p>
        </div>
      </article>
    ))}
  </div>
);

export default Experience;
