import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import Badge from "./common/badge";

interface IProfileDetailsProps {}

const ProfileDetails: React.FunctionComponent<IProfileDetailsProps> = () => {
  return (
    <div className="rounded-lg bg-white flex flex-col">
      <div className="h-auto max-w-full relative">
        <img
          className="object-center object-cover rounded-lg"
          src="cover-image.jpeg"
          alt="cover"
        />
        <div className="px-4 pb-2 flex items-end absolute bg-gradient-to-t from-white h-full w-full top-0 left-0">
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
          <div className="text-sm">Javascript Developer, India</div>
        </div>
        <InnerCard>
          Javascript developer with 11+ years of experience in building
          web/hybrid apps. Skilled in React, Angular, Svelte, Node.js, MongoDB
          and SQL.
          <div className="flex mt-4 flex-wrap gap-1">
            <Badge>Javascript</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>ExpressJS</Badge>
            <Badge>Angular</Badge>
            <Badge>MongoDB</Badge>
            <Badge>SQL</Badge>
            <Badge>Git</Badge>
          </div>
        </InnerCard>
      </OuterCard>
    </div>
  );
};

export default ProfileDetails;
