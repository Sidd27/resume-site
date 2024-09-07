import * as React from "react";
import { OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { BriefcaseBusiness, Square } from "lucide-react";
import { BULLET_COLOR, EXPERINCES_DATA } from "@/constants";
import DetailCard from "./common/detailCard";

interface IExpereinceProps {}

const Expereince: React.FunctionComponent<IExpereinceProps> = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Expereince
      </CustomHeader>
      <div className="space-y-2">
        {EXPERINCES_DATA.map((expreince, index) => (
          <DetailCard
            key={index}
            image={expreince.image}
            title={expreince.title}
            description={expreince.detail}
            company={expreince.company}
            location={expreince.location}
            dateRange={expreince.period}
            badge={expreince.type}
            technologies={expreince.techs}
            primaryIcon={<BriefcaseBusiness size="14" />}
          />
        ))}
      </div>
    </OuterCard>
  );
};

export default Expereince;
