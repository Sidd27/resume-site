import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Mail, Phone, Square } from "lucide-react";
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
        <div className="text-muted-foreground">
          Staff Frontend Platform Engineer with 13+ years of experience
          designing and scaling frontend platforms, microfrontend architectures,
          and real-time distributed web systems across logistics, fintech, and
          ecommerce domains. Track record of owning frontend platform
          modernization, performance engineering, and multi-team developer
          infrastructure at scale. Recent work spans AI-assisted operational
          systems, retrieval-based debugging workflows, and
          infrastructure-aware frontend architectures built on React,
          TypeScript, Svelte, Node.js, and AWS.
        </div>
        <Divider />
        <div className="flex flex-col space-y-2">
          <a
            className="flex items-center text-foreground"
            href="mailto:pandeysiddharth27@gmail.com"
          >
            <Mail className="mr-2" size={16} />
            pandeysiddharth27@gmail.com
          </a>
          <div className="flex items-center">
            <Phone className="mr-2" size={16} />
            <a
              className="flex items-center text-foreground"
              href="tel:+918867341449"
            >
              8867341449
            </a>
            <span className="mx-2 text-muted-foreground">|</span>

            <a
              className="flex items-center text-foreground"
              href="tel:+919752012227"
            >
              9752012227
            </a>
          </div>
          <Divider />
          <div className="flex space-x-2">
            <a
              className="flex items-center text-foreground"
              href="https://www.npmjs.com/~sidd27"
              target="_blank"
            >
              <NPM_ICON className="mr-1" width={16} height={16} />
              NPM
            </a>
            <a
              className="flex items-center text-foreground"
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
