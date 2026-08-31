import * as React from "react";
import { InnerCard } from "./Cards";
import { splitMetrics } from "@/lib/utils";

interface IDetailCardProps {
  image?: string;
  title?: string;
  company?: string;
  location?: string;
  domain?: string;
  description?: string;
  bullets?: string[];
  dateRange?: string;
  badge?: string;
  technologies?: string[];
}

/** Sets measured outcomes ("~23 → ~75") in mono so they survive a 10-second scan. */
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

const DetailCard: React.FunctionComponent<IDetailCardProps> = ({
  image,
  title,
  company,
  location,
  domain,
  description,
  bullets,
  dateRange,
  badge,
  technologies,
}) => {
  const meta = [company, location, badge].filter(Boolean);

  return (
    <InnerCard className="p-5">
      {/* this page is served from /v1/, so asset paths must be absolute */}
      <div className="flex items-start gap-4">
        <img
          src={`/${image}`}
          alt={company ?? ""}
          width={36}
          height={36}
          loading="lazy"
          className="mt-0.5 h-9 w-9 shrink-0 rounded border border-border bg-white object-contain p-1"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {dateRange}
            </span>
          </div>

          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {meta.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="px-1.5 text-border">/</span>}
                <span className={i === 0 ? "text-foreground/80" : undefined}>
                  {item}
                </span>
              </React.Fragment>
            ))}
          </p>

          {domain && (
            <p className="mt-2 text-xs text-muted-foreground">{domain}</p>
          )}
        </div>
      </div>

      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          <Measured text={description} />
        </p>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="entry-list mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {bullets.map((bullet, i) => (
            <li key={i}>
              <Measured text={bullet} />
            </li>
          ))}
        </ul>
      )}

      {technologies && technologies.length > 0 && (
        <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] leading-5 text-muted-foreground">
          {technologies.join(" · ")}
        </p>
      )}
    </InnerCard>
  );
};

export default DetailCard;
