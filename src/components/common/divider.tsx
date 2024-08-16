import { cn } from "@/lib/utils";
import * as React from "react";

interface IDividerProps extends React.HTMLAttributes<HTMLHRElement> {}

const Divider: React.FunctionComponent<IDividerProps> = ({
  className,
  ...props
}) => {
  return <hr className={cn("my-4 h-0 border-t-1", className)} {...props} />;
};

export default Divider;
