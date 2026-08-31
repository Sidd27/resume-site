import * as React from "react";
import { ExternalLink } from "lucide-react";
import { InnerCard, OuterCard } from "./Cards";
import { PROJECTS } from "@/data";
import { GITHUB_ICON } from "@/components/common/icons";
import { useNpmPackages } from "@/hooks/useNpmPackages";

const PackageSkeleton: React.FC = () => (
  <InnerCard className="p-5">
    <div className="animate-pulse space-y-2">
      <div className="h-4 w-1/3 rounded bg-muted" />
      <div className="h-3 w-1/4 rounded bg-muted" />
      <div className="h-3 w-full rounded bg-muted" />
    </div>
  </InnerCard>
);

const Projects: React.FC = () => {
  const { packages, loading, error } = useNpmPackages();

  return (
    <OuterCard className="space-y-3">
      {PROJECTS.map((project, i) => (
        <InnerCard key={i} className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold tracking-tight text-foreground">
              {project.name}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              className="shrink-0 text-muted-foreground transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
            </a>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <p className="mt-3 border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
            {project.techs.join(" · ")}
          </p>
        </InnerCard>
      ))}

      {loading && (
        <>
          <PackageSkeleton />
          <PackageSkeleton />
          <PackageSkeleton />
        </>
      )}
      {error && <p className="text-sm text-muted-foreground">{error}</p>}

      {!loading &&
        packages.map((pkg, i) => (
          <InnerCard key={i} className="p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <a
                href={pkg.repositoryUrl ?? pkg.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold tracking-tight text-foreground underline-offset-4 hover:underline"
              >
                <GITHUB_ICON width={14} height={14} className="shrink-0" />
                {pkg.name}
              </a>
              {pkg.monthlyDownloads > 0 && (
                <a
                  href={pkg.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metric underline-offset-4 hover:underline"
                >
                  {pkg.monthlyDownloads.toLocaleString()} downloads/mo
                </a>
              )}
            </div>

            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
              v{pkg.version}
              <span className="px-1.5 text-border">/</span>
              {pkg.createdDate}
              {pkg.createdDate !== pkg.date && ` — ${pkg.date}`}
            </p>

            {pkg.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>
            )}
            {pkg.keywords.length > 0 && (
              <p className="mt-3 border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
                {pkg.keywords.slice(0, 6).join(" · ")}
              </p>
            )}
          </InnerCard>
        ))}
    </OuterCard>
  );
};

export default Projects;
