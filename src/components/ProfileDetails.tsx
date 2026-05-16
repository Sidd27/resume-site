import * as React from "react";
import { Download } from "lucide-react";
import { InnerCard, OuterCard } from "./common/Cards";
import Badge from "./common/badge";

interface IProfileDetailsProps {}

const ProfileDetails: React.FunctionComponent<IProfileDetailsProps> = () => {
  return (
    <div className="rounded-lg bg-white flex flex-col dark:bg-slate-900">
      <OuterCard>
        <div className="flex items-center gap-4 ml-1">
          <img
            className="border-2 border-white shadow object-center object-cover w-16 h-16 rounded-full"
            src="dp.webp"
            alt="Siddharth Pandey"
            width={64}
            height={64}
            fetchPriority="high"
          />
          <div>
            <div className="text-md font-medium">Siddharth Pandey</div>
            <div className="text-sm text-muted-foreground">Staff Frontend Platform Engineer · India</div>
          </div>
        </div>
        <InnerCard>
          <div className="text-muted-foreground text-sm">
            Building frontend platforms at scale — microfrontends, performance
            engineering, and real-time systems across logistics, fintech, and
            ecommerce.
          </div>
          <a
            href="/siddharth-pandey-resume.pdf"
            download="Siddharth-Pandey-Resume.pdf"
            className="mt-3 flex items-center justify-center gap-2 w-full rounded-md bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-medium py-1.5 transition-colors"
          >
            <Download size={14} />
            Download Resume
          </a>
          <div className="flex mt-3 flex-wrap gap-1">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Svelte</Badge>
            <Badge>Angular</Badge>
            <Badge>Node.js</Badge>
            <Badge>GraphQL</Badge>
            <Badge>WebSockets</Badge>
            <Badge>AWS</Badge>
            <Badge>Microfrontends</Badge>
            <Badge>Tailwind</Badge>
            <Badge>MongoDB</Badge>
            <Badge>PostgreSQL</Badge>
          </div>
        </InnerCard>
      </OuterCard>
    </div>
  );
};

export default ProfileDetails;
