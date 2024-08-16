import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Square } from "lucide-react";
import { BULLET_COLOR } from "@/constants";

interface IExpereinceProps {}

const Expereince: React.FunctionComponent<IExpereinceProps> = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Expereince
      </CustomHeader>
      <InnerCard></InnerCard>
    </OuterCard>
  );
};

export default Expereince;
