import { useEffect } from "react";
import Blogs from "./components/Blogs";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Masthead from "./components/Masthead";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./theme-provider";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTIONS = [
  { id: "experience", index: "01", title: "Experience" },
  { id: "skills", index: "02", title: "Capabilities" },
  { id: "projects", index: "03", title: "Open source" },
  { id: "writing", index: "04", title: "Writing" },
  { id: "education", index: "05", title: "Education" },
] as const;

const SECTION_IDS = SECTIONS.map((section) => section.id);

function App() {
  const active = useActiveSection(SECTION_IDS);

  // Old tab links used #blog; keep them landing somewhere real.
  useEffect(() => {
    if (window.location.hash === "#blog") window.location.hash = "#writing";
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <nav className="sticky top-0 print:hidden z-20 border-b border-border bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center gap-4 px-5 py-3 md:px-8">
            <a
              href="#top"
              className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground"
            >
              S. Pandey
            </a>
            <div className="flex flex-1 gap-4 overflow-x-auto">
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-foreground ${
                    active === section.id
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div id="top" className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
          <Masthead />

          <Section {...SECTIONS[0]}>
            <Experience />
          </Section>
          <Section {...SECTIONS[1]}>
            <Skills />
          </Section>
          <Section {...SECTIONS[2]}>
            <Projects />
          </Section>
          <Section {...SECTIONS[3]}>
            <Blogs />
          </Section>
          <Section {...SECTIONS[4]}>
            <Education />
          </Section>

          <footer className="mt-20 border-t border-border pt-6 font-mono text-[11px] leading-5 text-muted-foreground">
            <p>
              Built with React, TypeScript, and Tailwind. Source on{" "}
              <a
                href="https://github.com/Sidd27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-accent"
              >
                GitHub
              </a>
              .
            </p>
            <p className="mt-1">
              pandeysiddharth27@gmail.com · Bengaluru, India
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
