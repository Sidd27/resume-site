import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

const Badge: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-block bg-slate-200 text-slate-600 rounded px-2 py-1 text-xs dark:bg-slate-600 dark:text-slate-300",
        className
      )}
      {...props}
    />
  );
};

export default Badge;
