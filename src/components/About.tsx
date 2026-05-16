import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Mail, Square } from "lucide-react";
import { BULLET_COLOR } from "../constants";
import Divider from "./common/divider";
import { DEVTO_ICON, GITHUB_ICON, LINKEDIN_ICON, MEDIUM_ICON, NPM_ICON } from "./common/icons";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddharthpandey27",
    icon: <LINKEDIN_ICON width={15} height={15} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Sidd27",
    icon: <GITHUB_ICON width={15} height={15} />,
  },
  {
    label: "NPM",
    href: "https://www.npmjs.com/~sidd27",
    icon: <NPM_ICON width={15} height={15} />,
  },
  {
    label: "Dev.to",
    href: "https://dev.to/siddharth_pandey_27",
    icon: <DEVTO_ICON width={15} height={15} />,
  },
  {
    label: "Medium",
    href: "https://medium.com/@siddharthpandey_77104",
    icon: <MEDIUM_ICON width={15} height={15} />,
  },
];

const About: React.FunctionComponent = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        About me
      </CustomHeader>
      <InnerCard>
        <p className="text-muted-foreground text-sm">
          Track record of owning frontend platform modernization, performance
          engineering, and multi-team developer infrastructure at scale. Recent
          work spans AI-assisted operational systems, retrieval-based debugging
          workflows, and infrastructure-aware frontend architectures built on
          React, TypeScript, Svelte, Node.js, and AWS.
        </p>

        <Divider className="my-3" />
        <a
          href="mailto:pandeysiddharth27@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail size={14} className="shrink-0" />
          pandeysiddharth27@gmail.com
        </a>
        <Divider className="my-3" />

        <div className="grid grid-cols-2 gap-2">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted/40 transition-all"
            >
              <span className="shrink-0">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </InnerCard>
    </OuterCard>
  );
};

export default About;
