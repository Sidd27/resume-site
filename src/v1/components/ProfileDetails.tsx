import * as React from "react";
import { ArrowDownToLine } from "lucide-react";
import { InnerCard, OuterCard } from "./Cards";
import { FACTS, PROFILE } from "@/data";

const ProfileDetails: React.FC = () => (
  <OuterCard>
    <InnerCard className="p-5">
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-md border border-border bg-white object-cover"
          src={PROFILE.portrait}
          alt={PROFILE.name}
          width={64}
          height={64}
          fetchPriority="high"
        />
        <div className="min-w-0">
          <h1 className="text-xl font-semibold leading-tight tracking-tight text-foreground">
            {PROFILE.name}
          </h1>
          <p className="mt-1.5 font-mono text-[11px] uppercase leading-4 tracking-[0.14em] text-muted-foreground">
            {PROFILE.title}
            <span className="block text-accent">{PROFILE.focus}</span>
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {PROFILE.summary}
      </p>

      <dl className="mt-5 space-y-1.5 border-t border-border pt-4 font-mono text-[11px]">
        {FACTS.map(({ label, value, status }) => (
          <div key={label} className="flex items-baseline gap-3">
            <dt className="w-20 shrink-0 uppercase tracking-[0.12em] text-muted-foreground">
              {label}
            </dt>
            <dd className="flex items-center gap-1.5 text-foreground/85">
              {status && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <a
        href={PROFILE.resumePdf}
        download={PROFILE.resumeFileName}
        className="mt-5 flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-90"
      >
        <ArrowDownToLine size={14} />
        Download résumé
      </a>
    </InnerCard>
  </OuterCard>
);

export default ProfileDetails;
