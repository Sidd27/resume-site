import { useState, useEffect } from "react";
import { formatDate } from "@/lib/utils";

export type NpmPackage = {
  name: string;
  description: string;
  version: string;
  date: string;
  sortDate: number;
  keywords: string[];
  npmUrl: string;
  repositoryUrl?: string;
  homepageUrl?: string;
};

const NPM_USERNAME = "sidd27";
const FETCH_TIMEOUT_MS = 8000;

function safeFetch(url: string): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  return fetch(url, { signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

function parseRepoUrl(repository: unknown): string | undefined {
  if (!repository) return undefined;
  if (typeof repository === "string") {
    const cleaned = repository.replace(/^git\+/, "").replace(/\.git$/, "");
    return cleaned.startsWith("http") ? cleaned : undefined;
  }
  if (typeof repository === "object" && repository !== null) {
    const url = (repository as { url?: string }).url ?? "";
    const cleaned = url.replace(/^git\+/, "").replace(/\.git$/, "");
    return cleaned.startsWith("http") ? cleaned : undefined;
  }
  return undefined;
}


export function useNpmPackages() {
  const [packages, setPackages] = useState<NpmPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const res = await safeFetch(
          `https://registry.npmjs.org/-/v1/search?text=maintainer:${NPM_USERNAME}&size=50`
        );
        if (!res.ok) throw new Error("npm fetch failed");
        const data = await res.json();

        const pkgs: NpmPackage[] = (
          data.objects as Array<{
            package: {
              name: string;
              description?: string;
              version: string;
              date: string;
              keywords?: string[];
              links: {
                npm: string;
                homepage?: string;
                repository?: string;
              };
            };
          }>
        ).map(({ package: pkg }) => ({
          name: pkg.name,
          description: pkg.description ?? "",
          version: pkg.version,
          date: formatDate(pkg.date),
          sortDate: new Date(pkg.date).getTime(),
          keywords: pkg.keywords ?? [],
          npmUrl: pkg.links.npm,
          repositoryUrl: parseRepoUrl(pkg.links.repository),
          homepageUrl: pkg.links.homepage,
        }));

        pkgs.sort((a, b) => b.sortDate - a.sortDate);
        setPackages(pkgs);
      } catch {
        setError("Failed to load npm packages");
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, []);

  return { packages, loading, error };
}
