import * as React from "react";

interface TabsProps<T extends string> {
  tabs: readonly { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
}

/** ponytail: four buttons and a conditional render — no tabs library. */
export function Tabs<T extends string>({
  tabs,
  active,
  onChange,
}: TabsProps<T>) {
  return (
    <div
      role="tablist"
      className="flex items-stretch gap-5 overflow-x-auto border-b border-border md:gap-6"
    >
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          role="tab"
          id={`tab-${id}`}
          aria-selected={active === id}
          aria-controls={`panel-${id}`}
          onClick={() => onChange(id)}
          className={`-mb-px cursor-pointer whitespace-nowrap border-b-2 px-0.5 pb-2.5 pt-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
            active === id
              ? "border-accent text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export const TabPanel: React.FC<{
  id: string;
  active: boolean;
  children: React.ReactNode;
}> = ({ id, active, children }) =>
  active ? (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      className="mt-4"
    >
      {children}
    </div>
  ) : null;
