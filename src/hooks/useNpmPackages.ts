import { useState, useEffect } from "react";
import { formatDate } from "@/lib/utils";

export type NpmPackage = {
  name: string;
  description: string;
  version: string;
  date: string;
  createdDate: string;
  sortDate: number;
  monthlyDownloads: number;
  keywords: string[];
  npmUrl: string;
  repositoryUrl?: string;
};

const NPM_USERNAME = "sidd27";
const FETCH_TIMEOUT_MS = 8000;

function safeFetch(url: string): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
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
        const searchRes = await safeFetch(
          `https://registry.npmjs.org/-/v1/search?text=maintainer:${NPM_USERNAME}&size=50`
        );
        if (!searchRes.ok) throw new Error("npm fetch failed");
        const searchData = await searchRes.json();

        const rawPkgs = (
          searchData.objects as Array<{
            package: {
              name: string;
              description?: string;
              version: string;
              date: string;
              keywords?: string[];
              links: { npm: string; repository?: string };
            };
          }>
        ).map(({ package: pkg }) => ({
          name: pkg.name,
          description: pkg.description ?? "",
          version: pkg.version,
          date: formatDate(pkg.date),
          createdDate: "",
          sortDate: new Date(pkg.date).getTime(),
          monthlyDownloads: 0,
          keywords: pkg.keywords ?? [],
          npmUrl: pkg.links.npm,
          repositoryUrl: parseRepoUrl(pkg.links.repository),
        }));

        const names = rawPkgs.map((p) => p.name);

        // Parallel: bulk downloads API + per-package registry fetch for created date
        const [downloadsRes, ...registryResponses] = await Promise.all([
          safeFetch(`https://api.npmjs.org/downloads/point/last-month/${names.join(",")}`),
          ...names.map((n) => safeFetch(`https://registry.npmjs.org/${encodeURIComponent(n)}`)),
        ]);

        const downloadsJson = downloadsRes.ok ? await downloadsRes.json() : {};
        const registryJsons = await Promise.all(
          registryResponses.map((r) =>
            r.ok ? r.json().catch(() => null) : Promise.resolve(null)
          )
        );

        // Downloads API returns flat object for 1 package, keyed by name for multiple
        const downloadsMap: Record<string, number> = {};
        if (names.length === 1) {
          downloadsMap[names[0]] = (downloadsJson as { downloads?: number }).downloads ?? 0;
        } else {
          for (const [name, data] of Object.entries(
            downloadsJson as Record<string, { downloads?: number }>
          )) {
            downloadsMap[name] = data?.downloads ?? 0;
          }
        }

        const pkgs: NpmPackage[] = rawPkgs.map((pkg, i) => {
          const registry = registryJsons[i] as { time?: Record<string, string> } | null;
          const created = registry?.time?.created;
          return {
            ...pkg,
            createdDate: created ? formatDate(created) : pkg.date,
            monthlyDownloads: downloadsMap[pkg.name] ?? 0,
          };
        });

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
