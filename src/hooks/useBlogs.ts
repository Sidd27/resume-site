import { useState, useEffect } from "react";

export type Blog = {
  title: string;
  link: string;
  displayDate: string;
  sortDate: number;
  description: string;
  source: "devto" | "medium";
  tags: string[];
  readingTime?: number;
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function fetchDevToBlogs(): Promise<Blog[]> {
  const res = await fetch(
    "https://dev.to/api/articles?username=siddharth_pandey_6ec0fc47&per_page=20"
  );
  if (!res.ok) throw new Error("Dev.to fetch failed");
  const data = await res.json();
  return data.map(
    (a: {
      title: string;
      url: string;
      published_at: string;
      readable_publish_date: string;
      description: string;
      tag_list: string[];
      reading_time_minutes: number;
    }) => ({
      title: a.title,
      link: a.url,
      displayDate: a.readable_publish_date,
      sortDate: new Date(a.published_at).getTime(),
      description: a.description,
      source: "devto" as const,
      tags: a.tag_list ?? [],
      readingTime: a.reading_time_minutes,
    })
  );
}

async function fetchMediumBlogs(): Promise<Blog[]> {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@siddharthpandey_77104&count=20"
  );
  if (!res.ok) throw new Error("Medium fetch failed");
  const data = await res.json();
  if (data.status !== "ok") throw new Error("Medium RSS error");
  return data.items.map(
    (item: {
      title: string;
      link: string;
      pubDate: string;
      description: string;
      categories: string[];
    }) => {
      const plain = stripHtml(item.description);
      return {
        title: item.title,
        link: item.link,
        displayDate: formatDate(item.pubDate),
        sortDate: new Date(item.pubDate).getTime(),
        description: plain.length > 180 ? plain.slice(0, 180) + "…" : plain,
        source: "medium" as const,
        tags: item.categories ?? [],
      };
    }
  );
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [devto, medium] = await Promise.allSettled([
          fetchDevToBlogs(),
          fetchMediumBlogs(),
        ]);

        const all: Blog[] = [];
        if (devto.status === "fulfilled") all.push(...devto.value);
        if (medium.status === "fulfilled") all.push(...medium.value);

        all.sort((a, b) => b.sortDate - a.sortDate);
        setBlogs(all);
      } catch {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return { blogs, loading, error };
}
