import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import Badge from "./common/badge";

interface IProfileDetailsProps {}

const ProfileDetails: React.FunctionComponent<IProfileDetailsProps> = () => {
  return (
    <div className="rounded-lg bg-white flex flex-col dark:bg-slate-900">
      <div className="h-auto max-w-full relative">
        <img
          className="object-center object-cover rounded-lg"
          src="cover-image.jpeg"
          alt="cover"
        />
        <div className="px-4 pb-2 flex items-end absolute bg-gradient-to-t from-white h-full w-full top-0 left-0 dark:from-gray-900">
          <img
            className="border-2 border-white shadow object-center object-cover w-20 h-20 rounded-full align-middle"
            src="dp.jpeg"
            alt="profile"
          />
        </div>
      </div>
      <OuterCard>
        <div className="ml-4">
          <div className="text-md font-medium">Siddharth Pandey</div>
          <div className="text-sm">Staff Frontend Platform Engineer, India</div>
        </div>
        <InnerCard>
          <div className="text-muted-foreground">
            Staff Frontend Platform Engineer with 13+ years of experience
            designing and scaling frontend platforms, microfrontend
            architectures, and real-time distributed web systems across
            logistics, fintech, and ecommerce domains.
          </div>
          <div className="flex mt-4 flex-wrap gap-1">
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
