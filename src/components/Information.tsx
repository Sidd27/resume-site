import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Square } from "lucide-react";
import { BULLET_COLOR } from "../constants";

interface IInformationProps {}

const Information: React.FunctionComponent<IInformationProps> = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Information
      </CustomHeader>
      <InnerCard className="divide-y">
        <div className="flex justify-between pb-2">
          <span>Location</span>
          <span className="text-black">Bengaluru, Karnataka</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Experience</span>
          <span className="text-black"> {">"} 11 Years</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Availability</span>
          <span className="text-black">in 1 Month</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Remote</span>
          <span className="text-black">Yes</span>
        </div>
        <div className="flex justify-between pt-2">
          <span>Relocation</span>
          <span className="text-black">No</span>
        </div>
      </InnerCard>
    </OuterCard>
  );
};

export default Information;
