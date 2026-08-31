import { useState, useEffect } from "react";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProfileDetails from "./components/ProfileDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { TabPanel, Tabs } from "./components/Tabs";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/theme-provider";

const TABS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Open source" },
  { id: "education", label: "Education" },
  { id: "blog", label: "Writing" },
] as const;

type Tab = (typeof TABS)[number]["id"];

function getTabFromHash(): Tab {
  const hash = window.location.hash.replace("#", "") as Tab;
  return TABS.some((tab) => tab.id === hash) ? hash : "experience";
}

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(getTabFromHash);

  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function handleTabChange(value: Tab) {
    window.location.hash = value;
    setActiveTab(value);
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <header className="border-b border-border">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Siddharth Pandey
              <span className="px-2 text-border">/</span>
              Résumé
              <span className="px-2 text-border">/</span>
              <span className="text-accent">v1</span>
            </span>
            <ThemeToggle />
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-6 md:flex md:gap-8 md:px-6 md:py-10">
          <aside className="flex flex-col gap-6 md:sticky md:top-8 md:h-fit md:w-80 md:shrink-0">
            <ProfileDetails />
            <Skills />
            <About />
          </aside>

          <div className="mt-8 w-full min-w-0 md:mt-0">
            <Tabs tabs={TABS} active={activeTab} onChange={handleTabChange} />
            <TabPanel id="experience" active={activeTab === "experience"}>
              <Experience />
            </TabPanel>
            <TabPanel id="projects" active={activeTab === "projects"}>
              <Projects />
            </TabPanel>
            <TabPanel id="education" active={activeTab === "education"}>
              <Education />
            </TabPanel>
            <TabPanel id="blog" active={activeTab === "blog"}>
              <Blogs />
            </TabPanel>
          </div>
        </main>

        <footer className="border-t border-border">
          <p className="mx-auto max-w-5xl px-4 py-5 font-mono text-[11px] text-muted-foreground md:px-6">
            Archived first design.{" "}
            <a
              href="/"
              className="text-foreground underline underline-offset-2 hover:text-accent"
            >
              Current version →
            </a>
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
