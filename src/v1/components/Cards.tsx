import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

/** Section wrapper: a labelled block in the document. */
export const OuterCard: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <section className={cn("space-y-2", className)} {...props} />;
};

/** A single flat panel. One border, one surface — no nesting. */
export const InnerCard: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-card p-4 text-sm leading-relaxed",
        className
      )}
      {...props}
    />
  );
};
