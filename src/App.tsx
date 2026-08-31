import { useEffect } from "react";
import { ArrowDown, Mail } from "lucide-react";
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
import { PROFILE } from "@/data";

const SECTIONS = [
  { id: "experience", index: "01", title: "Experience" },
  { id: "skills", index: "02", title: "Skills" },
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
        <nav className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur print:hidden">
          <div className="mx-auto flex max-w-3xl items-center gap-4 px-5 py-1.5 md:px-8 md:py-3">
            <a
              href="#top"
              className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground md:inline"
            >
              S. Pandey
            </a>
            {/* The links overflow a phone screen, so cue the scroll with a fade. */}
            <div className="relative min-w-0 flex-1 after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-10 after:bg-gradient-to-l after:from-background md:after:hidden">
              <div className="flex gap-4 overflow-x-auto">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`whitespace-nowrap py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-foreground md:py-0 ${
                      active === section.id
                        ? "text-accent"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div id="top" className="mx-auto max-w-3xl px-5 pb-28 md:px-8 md:pb-20">
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

          <footer className="mt-16 border-t border-border pt-6 font-mono text-[11px] leading-5 text-muted-foreground md:mt-20">
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
            <p className="mt-1">{PROFILE.email} · Bengaluru, India</p>
          </footer>
        </div>

        {/* Thumb zone: the two actions that matter stay one tap away on a phone. */}
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur md:hidden print:hidden">
          <div className="flex gap-2 px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
            <a
              href={PROFILE.resumePdf}
              download={PROFILE.resumeFileName}
              className="flex flex-1 items-center justify-center gap-2 rounded bg-primary py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-primary-foreground"
            >
              <ArrowDown size={13} />
              Résumé
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex flex-1 items-center justify-center gap-2 rounded border border-border py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground"
            >
              <Mail size={13} />
              Email
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
