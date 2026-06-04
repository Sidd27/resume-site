import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Mail } from "lucide-react";
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
      <CustomHeader>Connect</CustomHeader>
      <InnerCard>
        <a
          href="mailto:pandeysiddharth27@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail size={14} className="shrink-0" />
          pandeysiddharth27@gmail.com
        </a>
        <Divider className="my-3" />

        <div className="flex gap-2">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="flex-1 flex items-center justify-center h-9 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted/40 transition-all"
            >
              {icon}
            </a>
          ))}
        </div>
      </InnerCard>
    </OuterCard>
  );
};

export default About;
