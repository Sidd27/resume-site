import * as React from "react";
import { OuterCard } from "./common/Cards";
import { GraduationCap } from "lucide-react";
import DetailCard from "./common/detailCard";
import { EDUCATION_DATA } from "@/constants";

const Education: React.FC = () => {
  return (
    <OuterCard>
      <div className="space-y-2 pt-1">
        {EDUCATION_DATA.map((edu, index) => (
          <DetailCard
            key={index}
            image={edu.image}
            title={edu.title}
            description={edu.detail}
            company={edu.school}
            location={edu.location}
            dateRange={edu.period}
            primaryIcon={<GraduationCap size="14" />}
          />
        ))}
      </div>
    </OuterCard>
  );
};

export default Education;
