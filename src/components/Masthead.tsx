import * as React from "react";
import { useState } from "react";
import { SOCIAL_ICONS } from "./common/icons";
import { FACTS, LINK_HOSTS, LINKS, PROFILE } from "@/data";

/**
 * Phone first: portrait, name, one-line claim, then the facts. The full
 * summary is an expansion on small screens and plain prose from md up.
 */
const Masthead: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="pt-6 md:pt-16">
      <div className="flex items-center gap-4 md:items-start md:justify-between md:gap-8">
        <img
          src={PROFILE.portrait}
          alt={PROFILE.name}
          width={112}
          height={112}
          fetchPriority="high"
          className="h-16 w-16 shrink-0 rounded border border-border bg-white object-cover grayscale md:order-2 md:h-28 md:w-28"
        />
        <div className="min-w-0 md:order-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent md:text-[11px] md:tracking-[0.2em]">
            {PROFILE.title}
          </p>
          <h1 className="mt-1.5 font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground md:mt-3 md:text-7xl md:leading-[0.95]">
            <span className="md:block">Siddharth </span>
            <span className="md:block">Pandey</span>
          </h1>
        </div>
      </div>

      <p className="mt-5 font-display text-[17px] font-medium leading-snug tracking-[-0.01em] text-foreground md:mt-8 md:text-xl">
        {PROFILE.headline}
      </p>

      <p
        className={`mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-muted-foreground md:mt-4 md:text-[17px] md:leading-[1.65] ${
          expanded ? "" : "line-clamp-3 md:line-clamp-none"
        }`}
      >
        {PROFILE.summary}
      </p>
      <button
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:hidden print:hidden"
      >
        {expanded ? "Less" : "Read more"}
      </button>

      <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-5 md:mt-10 md:grid-cols-4">
        {FACTS.map(({ label, value, status }) => (
          <div key={label}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {label}
            </dt>
            <dd className="mt-1.5 font-display text-sm font-medium text-foreground">
              {status ? (
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {value}
                </span>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap items-center gap-2 print:hidden">
        {/* On phones these two live in the thumb bar instead. */}
        <a
          href={PROFILE.resumePdf}
          download={PROFILE.resumeFileName}
          className="hidden items-center gap-2 rounded bg-primary px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90 md:flex"
        >
          Download résumé
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="hidden items-center gap-2 rounded border border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent md:flex"
        >
          Email
        </a>
        {LINKS.map(({ id, label, href }) => {
          const Icon = SOCIAL_ICONS[id];
          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent md:h-[38px] md:w-[38px]"
            >
              {Icon && <Icon width={14} height={14} />}
            </a>
          );
        })}
      </div>

      <p className="mt-6 hidden font-mono text-[11px] leading-5 print:block">
        {[PROFILE.email, PROFILE.site, ...LINK_HOSTS].join(" · ")}
      </p>
    </header>
  );
};

export default Masthead;
