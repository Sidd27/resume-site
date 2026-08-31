import * as React from "react";
import { useState } from "react";
import { EXPERIENCE, type Role } from "@/data";
import { splitMetrics } from "@/lib/utils";

/** How many bullets a phone shows before asking. Desktop shows all of them. */
const MOBILE_BULLETS = 3;

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

const RoleEntry: React.FC<{ role: Role }> = ({ role }) => {
  const [expanded, setExpanded] = useState(false);
  const hidden = role.bullets.length - MOBILE_BULLETS;

  return (
    <article className="grid gap-x-8 gap-y-3 py-7 md:grid-cols-[9.5rem_1fr] md:gap-y-4 md:py-10">
      <div className="md:sticky md:top-24 md:h-fit">
        <p className="flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] leading-5 md:block">
          <span className="text-foreground">{role.period}</span>
          <span className="text-border md:hidden">·</span>
          <span className="text-muted-foreground md:mt-1 md:block">
            {role.location}
          </span>
          <span className="text-border md:hidden">·</span>
          <span className="text-muted-foreground md:block">{role.type}</span>
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

        <ul className="ledger mt-4 space-y-3 text-[15px] leading-[1.6] text-foreground/85 md:mt-5 md:leading-[1.65]">
          {role.bullets.map((bullet, i) => (
            <li
              key={i}
              className={
                !expanded && i >= MOBILE_BULLETS ? "hidden md:list-item" : ""
              }
            >
              <Measured text={bullet} />
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:hidden print:hidden"
          >
            {expanded ? "Show less" : `Show ${hidden} more`}
          </button>
        )}

        <p className="mt-4 font-mono text-[11px] leading-5 text-muted-foreground md:mt-5">
          {role.techs.join(" · ")}
        </p>
      </div>
    </article>
  );
};

const Experience: React.FC = () => (
  <div className="divide-y divide-border border-t border-border">
    {EXPERIENCE.map((role) => (
      <RoleEntry key={role.company} role={role} />
    ))}
  </div>
);

export default Experience;
