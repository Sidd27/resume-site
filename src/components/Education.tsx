import * as React from "react";
import { OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { GraduationCap, Square } from "lucide-react";
import DetailCard from "./common/detailCard";
import { BULLET_COLOR, EDUCATION_DATA } from "@/constants";

interface IEducationProps {}

const Education: React.FunctionComponent<IEducationProps> = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Education
      </CustomHeader>
      <div className="space-y-2">
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
