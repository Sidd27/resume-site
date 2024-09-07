import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

export const OuterCard: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("p-1.5 bg-white rounded-lg dark:bg-slate-900", className)}
      {...props}
    />
  );
};

export const InnerCard: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mt-4 bg-gray-50 rounded-md p-4 text-sm leading-6 dark:bg-slate-800 ",
        className
      )}
      {...props}
    />
  );
};
