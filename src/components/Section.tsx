import * as React from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}

/** A numbered section of the document. The number is the reading order. */
const Section: React.FC<SectionProps> = ({ id, index, title, children }) => (
  <section id={id} className="scroll-mt-24 pt-14 md:pt-20">
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
    <div className="mt-8">{children}</div>
  </section>
);

export default Section;
