import * as React from "react";
import { ArrowDown, Mail } from "lucide-react";
import { SOCIAL_ICONS } from "./common/icons";
import { FACTS, LINK_HOSTS, LINKS, PROFILE } from "@/data";

const Masthead: React.FC = () => (
  <header className="pt-10 md:pt-16">
    <div className="flex items-start justify-between gap-8">
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          {PROFILE.title}
        </p>
        <h1 className="mt-3 font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.03em] text-foreground md:text-7xl">
          {PROFILE.name.split(" ").map((word) => (
            <React.Fragment key={word}>
              {word}
              <br />
            </React.Fragment>
          ))}
        </h1>
      </div>
      <img
        src={PROFILE.portrait}
        alt={PROFILE.name}
        width={112}
        height={112}
        fetchPriority="high"
        className="hidden h-28 w-28 shrink-0 rounded border border-border bg-white object-cover grayscale sm:block"
      />
    </div>

    <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.65] text-foreground/90">
      {PROFILE.summary}
    </p>

    <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-5 md:grid-cols-4">
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
      <a
        href={PROFILE.resumePdf}
        download={PROFILE.resumeFileName}
        className="flex items-center gap-2 rounded bg-primary px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
      >
        <ArrowDown size={13} />
        Download résumé
      </a>
      <a
        href={`mailto:${PROFILE.email}`}
        className="flex items-center gap-2 rounded border border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <Mail size={13} />
        Email
      </a>
      <div className="flex flex-wrap gap-2">
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
              className="flex h-[38px] w-[38px] items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {Icon && <Icon width={14} height={14} />}
            </a>
          );
        })}
      </div>
    </div>

    <p className="mt-6 hidden font-mono text-[11px] leading-5 print:block">
      {[PROFILE.email, PROFILE.site, ...LINK_HOSTS].join(" · ")}
    </p>
  </header>
);

export default Masthead;
