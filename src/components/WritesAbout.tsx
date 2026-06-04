import * as React from "react";
import { OuterCard, InnerCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { PenLine } from "lucide-react";
import { WRITING_TOPICS } from "../constants";

const WritesAbout: React.FC = () => {
  return (
    <OuterCard>
      <CustomHeader>
        <PenLine size={13} />
        Writes about
      </CustomHeader>
      <InnerCard>
        <div className="flex flex-wrap gap-1.5">
          {WRITING_TOPICS.map((topic) => (
            <span
              key={topic}
              className="inline-block border border-cyan-300 text-cyan-700 dark:border-cyan-700 dark:text-cyan-400 rounded-full px-3 py-0.5 text-xs"
            >
              {topic}
            </span>
          ))}
        </div>
      </InnerCard>
    </OuterCard>
  );
};

export default WritesAbout;
