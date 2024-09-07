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
      <InnerCard className="divide-y dark:divide-gray-600">
        <div className="flex justify-between pb-2">
          <span className="text-muted-foreground">Location</span>
          <span className="text-foreground">Bengaluru, Karnataka</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Experience</span>
          <span className="text-foreground"> {">"} 11 Years</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Availability</span>
          <span className="text-foreground">in 1 Month</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Remote</span>
          <span className="text-foreground">Yes</span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-muted-foreground">Relocation</span>
          <span className="text-foreground">No</span>
        </div>
      </InnerCard>
    </OuterCard>
  );
};

export default Information;
