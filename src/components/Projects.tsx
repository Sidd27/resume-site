import * as React from "react";
import { OuterCard, InnerCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Square, ExternalLink, Calendar } from "lucide-react";
import { BULLET_COLOR, PROJECTS_DATA } from "@/constants";
import Badge from "./common/badge";
import { GITHUB_ICON, NPM_ICON } from "./common/icons";
import { useNpmPackages } from "@/hooks/useNpmPackages";

const PackageSkeleton: React.FC = () => (
  <InnerCard>
    <div className="animate-pulse space-y-2">
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
    </div>
  </InnerCard>
);

const Projects: React.FC = () => {
  const { packages, loading, error } = useNpmPackages();

  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Projects &amp; Packages
      </CustomHeader>

      <div className="space-y-2">
        {/* Manual non-npm projects */}
        {PROJECTS_DATA.map((project, i) => (
          <InnerCard key={i}>
            <div className="flex items-start justify-between gap-2">
              <span className="text-foreground font-semibold">{project.name}</span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.techs.map((t, j) => <Badge key={j}>{t}</Badge>)}
            </div>
          </InnerCard>
        ))}

        {/* npm packages */}
        {loading && (
          <>
            <PackageSkeleton />
            <PackageSkeleton />
            <PackageSkeleton />
          </>
        )}
        {error && (
          <div className="text-sm text-muted-foreground px-2">{error}</div>
        )}
        {!loading && packages.map((pkg, i) => (
          <InnerCard key={i}>
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={pkg.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <NPM_ICON width={16} height={16} className="shrink-0" />
                    <span className="text-foreground font-semibold">{pkg.name}</span>
                  </a>
                  <span className="text-xs text-muted-foreground font-mono">v{pkg.version}</span>
                  {pkg.repositoryUrl && (
                    <a
                      href={pkg.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="Repository"
                    >
                      <GITHUB_ICON width={13} height={13} />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                  <Calendar size={11} />
                  <span>{pkg.date}</span>
                </div>
              </div>
            </div>
            {pkg.description && (
              <p className="mt-2 text-muted-foreground text-sm">{pkg.description}</p>
            )}
            {pkg.keywords.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {pkg.keywords.slice(0, 6).map((k) => (
                  <Badge key={k}>{k}</Badge>
                ))}
              </div>
            )}
          </InnerCard>
        ))}
      </div>
    </OuterCard>
  );
};

export default Projects;
