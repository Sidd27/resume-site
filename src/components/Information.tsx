import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { MapPin, Briefcase, Clock } from "lucide-react";
import Divider from "./common/divider";

const FACTS = [
  { icon: MapPin,    label: "Location",     value: "Bengaluru, Karnataka" },
  { icon: Briefcase, label: "Experience",   value: "13+ Years" },
  { icon: Clock,     label: "Available",    value: "Immediately" },
] as const;

const Information: React.FC = () => {
  return (
    <OuterCard>
      <CustomHeader>Details</CustomHeader>
      <InnerCard className="space-y-2.5">
        {FACTS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Icon size={12} className="text-cyan-500 shrink-0" />
              <span className="text-xs">{label}</span>
            </div>
            <span className="text-xs font-medium text-foreground">{value}</span>
          </div>
        ))}

        <Divider />

        <div className="flex gap-2 pt-0.5">
          <div className="flex items-center gap-1.5 flex-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Remote OK</span>
          </div>
          <div className="flex items-center gap-1.5 flex-1 rounded-md bg-slate-100 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600 px-2.5 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
            <span className="text-xs font-medium text-muted-foreground">No Relocation</span>
          </div>
        </div>
      </InnerCard>
    </OuterCard>
  );
};

export default Information;
