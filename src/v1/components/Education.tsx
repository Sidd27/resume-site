import * as React from "react";
import { OuterCard } from "./Cards";
import DetailCard from "./detailCard";
import { EDUCATION } from "@/data";

const Education: React.FC = () => (
  <OuterCard className="space-y-3">
    {EDUCATION.map((edu) => (
      <DetailCard
        key={edu.school}
        image={edu.image}
        title={edu.title}
        description={edu.detail}
        company={edu.school}
        location={edu.location}
        dateRange={edu.period}
      />
    ))}
  </OuterCard>
);

export default Education;
