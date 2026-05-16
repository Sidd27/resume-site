import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

type Theme = "system" | "light" | "dark";

const CYCLE: Theme[] = ["system", "light", "dark"];

const ICONS: Record<Theme, React.ReactNode> = {
  system: <Monitor size={15} />,
  light: <Sun size={15} />,
  dark: <Moon size={15} />,
};

const LABELS: Record<Theme, string> = {
  system: "System theme",
  light: "Light mode",
  dark: "Dark mode",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function next() {
    const idx = CYCLE.indexOf(theme as Theme);
    setTheme(CYCLE[(idx + 1) % CYCLE.length]);
  }

  return (
    <button
      onClick={next}
      title={LABELS[theme as Theme]}
      className="fixed top-4 right-4 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-md hover:text-foreground hover:border-foreground/30 transition-all"
    >
      {ICONS[theme as Theme]}
    </button>
  );
}
