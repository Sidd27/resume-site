import * as React from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data";
import { useNpmPackages } from "@/hooks/useNpmPackages";

const RowSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-2 py-6">
    <div className="h-4 w-1/3 rounded bg-muted" />
    <div className="h-3 w-2/3 rounded bg-muted" />
  </div>
);

const Projects: React.FC = () => {
  const { packages, loading, error } = useNpmPackages();

  return (
    <div className="divide-y divide-border border-t border-border">
      {PROJECTS.map((project) => (
        <article
          key={project.name}
          className="grid gap-x-8 gap-y-3 py-8 md:grid-cols-[9.5rem_1fr]"
        >
          <p className="font-mono text-[11px] text-muted-foreground">Project</p>
          <div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-display text-lg font-semibold tracking-[-0.01em] text-foreground"
            >
              <span className="group-hover:underline">{project.name}</span>
              <ExternalLink size={13} className="text-muted-foreground" />
            </a>
            <p className="mt-1 hidden break-all font-mono text-[9px] text-muted-foreground print:block">
              {project.url}
            </p>
            <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.65] text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              {project.techs.join(" · ")}
            </p>
          </div>
        </article>
      ))}

      {loading && (
        <>
          <RowSkeleton />
          <RowSkeleton />
          <RowSkeleton />
        </>
      )}
      {error && <p className="py-6 text-sm text-muted-foreground">{error}</p>}

      {!loading &&
        packages.map((pkg) => (
          <article
            key={pkg.name}
            className="grid gap-x-8 gap-y-3 py-8 md:grid-cols-[9.5rem_1fr]"
          >
            <div className="flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] leading-5 md:block">
              {pkg.monthlyDownloads > 0 ? (
                <a
                  href={pkg.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metric text-[11px] underline-offset-4 hover:underline"
                >
                  {pkg.monthlyDownloads.toLocaleString()} /mo
                </a>
              ) : (
                <span className="text-muted-foreground">npm</span>
              )}
              <span className="text-muted-foreground md:mt-1 md:block">
                v{pkg.version}
              </span>
            </div>

            <div className="min-w-0">
              <a
                href={pkg.repositoryUrl ?? pkg.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-display text-lg font-semibold tracking-[-0.01em] text-foreground"
              >
                <span className="group-hover:underline">{pkg.name}</span>
                <ExternalLink size={13} className="text-muted-foreground" />
              </a>
              <p className="mt-1 hidden break-all font-mono text-[9px] text-muted-foreground print:block">
                {pkg.repositoryUrl ?? pkg.npmUrl}
              </p>
              {pkg.description && (
                <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.65] text-muted-foreground">
                  {pkg.description}
                </p>
              )}
              <p className="mt-3 font-mono text-[11px] leading-5 text-muted-foreground">
                {pkg.keywords.slice(0, 6).join(" · ")}
                {pkg.keywords.length > 0 && " · "}
                {pkg.createdDate}
              </p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default Projects;
