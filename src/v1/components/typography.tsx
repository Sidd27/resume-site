import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

/** Section label: mono, spaced, quiet — a field name, not a headline. */
export const CustomHeader: FunctionComponent<
  HTMLAttributes<HTMLHeadingElement>
> = ({ className, children, ...props }) => {
  return (
    <h2
      className={cn(
        "flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className
      )}
      {...props}
    >
      <span className="h-px w-3 bg-accent" aria-hidden="true" />
      {children}
    </h2>
  );
};
