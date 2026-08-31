import * as React from "react";
import { Mail } from "lucide-react";
import { InnerCard, OuterCard } from "./Cards";
import { CustomHeader } from "./typography";
import { SOCIAL_ICONS } from "@/components/common/icons";
import { LINKS, PROFILE } from "@/data";

const About: React.FunctionComponent = () => (
  <OuterCard>
    <CustomHeader>Contact</CustomHeader>
    <InnerCard className="p-5">
      <a
        href={`mailto:${PROFILE.email}`}
        className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
      >
        <Mail size={14} className="shrink-0" />
        {PROFILE.email}
      </a>

      <div className="mt-4 flex gap-1.5 border-t border-border pt-4">
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
              className="flex h-9 flex-1 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {Icon && <Icon width={15} height={15} />}
            </a>
          );
        })}
      </div>
    </InnerCard>
  </OuterCard>
);

export default About;
