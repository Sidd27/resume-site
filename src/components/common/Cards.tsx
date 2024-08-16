import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

export const OuterCard: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("p-1.5 bg-white rounded-lg", className)} {...props} />
  );
};

export const InnerCard: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mt-4 bg-gray-50 rounded-md p-4 text-gray-600 text-sm leading-6",
        className
      )}
      {...props}
    />
  );
};
