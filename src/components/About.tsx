import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Mail, Square } from "lucide-react";
import { BULLET_COLOR } from "../constants";
import Divider from "./common/divider";
import { GITHUB_ICON, NPM_ICON } from "./common/icons";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        About me
      </CustomHeader>
      <InnerCard>
        <div className="text-muted-foreground text-sm">
          Track record of owning frontend platform modernization, performance
          engineering, and multi-team developer infrastructure at scale. Recent
          work spans AI-assisted operational systems, retrieval-based debugging
          workflows, and infrastructure-aware frontend architectures built on
          React, TypeScript, Svelte, Node.js, and AWS.
        </div>
        <Divider />
        <div className="flex flex-col space-y-2">
          <a
            className="flex items-center text-foreground text-sm"
            href="mailto:pandeysiddharth27@gmail.com"
          >
            <Mail className="mr-2" size={16} />
            pandeysiddharth27@gmail.com
          </a>
          <Divider />
          <div className="flex space-x-2">
            <a
              className="flex items-center text-foreground text-sm"
              href="https://www.npmjs.com/~sidd27"
              target="_blank"
            >
              <NPM_ICON className="mr-1" width={16} height={16} />
              NPM
            </a>
            <a
              className="flex items-center text-foreground text-sm"
              href="https://github.com/Sidd27"
              target="_blank"
            >
              <GITHUB_ICON className="mr-1" width={16} height={16} />
              GitHub
            </a>
          </div>
        </div>
      </InnerCard>
    </OuterCard>
  );
};

export default About;
