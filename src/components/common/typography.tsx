import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

interface CustomerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export const CustomHeader: FunctionComponent<CustomerHeaderProps> = ({
  className,
  icon,
  children,
  ...props
}) => {
  return (
    <h2
      className={cn(
        "text-md font-medium px-4 mt-2 flex space-x-2 items-center text-foreground",
        className
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </h2>
  );
};
