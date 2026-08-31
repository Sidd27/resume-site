import * as React from "react";
import { OuterCard } from "./Cards";
import { EXPERIENCE } from "@/data";
import DetailCard from "./detailCard";

const Experience: React.FC = () => (
  <OuterCard className="space-y-3">
    {EXPERIENCE.map((experience) => (
      <DetailCard
        key={experience.company}
        image={experience.image}
        title={experience.title}
        company={experience.company}
        location={experience.location}
        domain={experience.domain}
        bullets={experience.bullets}
        dateRange={experience.period}
        badge={experience.type}
        technologies={experience.techs}
      />
    ))}
  </OuterCard>
);

export default Experience;
