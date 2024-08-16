import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

const Badge: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-block bg-zinc-200 text-zinc-600 rounded px-2 py-1 text-xs",
        className
      )}
      {...props}
    />
  );
};

export default Badge;
