import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

interface CustomerHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CustomHeader: FunctionComponent<CustomerHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2
      className={cn(
        "text-md font-medium px-4 mt-2 flex items-center gap-2 text-foreground border-l-2 border-cyan-500/60 ml-2",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
