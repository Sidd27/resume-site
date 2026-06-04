import * as React from "react";
import { OuterCard } from "./common/Cards";
import { BriefcaseBusiness } from "lucide-react";
import { EXPERINCES_DATA } from "@/constants";
import DetailCard from "./common/detailCard";

const Expereince: React.FC = () => {
  return (
    <OuterCard>
      <div className="space-y-2 pt-1">
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
