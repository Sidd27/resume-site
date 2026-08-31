import * as React from "react";
import { useState } from "react";
import { InnerCard, OuterCard } from "./Cards";
import { WRITING_TOPICS } from "@/data";
import { useBlogs } from "@/hooks/useBlogs";

const PAGE_SIZE = 5;

const BlogSkeleton: React.FC = () => (
  <InnerCard className="p-5">
    <div className="animate-pulse space-y-2">
      <div className="h-3 w-1/4 rounded bg-muted" />
      <div className="h-4 w-3/4 rounded bg-muted" />
      <div className="h-3 w-full rounded bg-muted" />
    </div>
  </InnerCard>
);

const Blogs: React.FC = () => {
  const { blogs, loading, error } = useBlogs();
  const [visible, setVisible] = useState(PAGE_SIZE);

  return (
    <OuterCard className="space-y-3">
      <p className="font-mono text-[11px] leading-5 text-muted-foreground">
        <span className="uppercase tracking-[0.12em]">Writes about</span>
        <span className="px-2 text-border">/</span>
        {WRITING_TOPICS.join(" · ")}
      </p>

      {loading && (
        <>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </>
      )}
      {error && <p className="text-sm text-muted-foreground">{error}</p>}

      {!loading &&
        blogs.slice(0, visible).map((blog, index) => (
          <InnerCard key={index} className="p-5">
            <p className="font-mono text-[11px] text-muted-foreground">
              <span className="text-foreground/80">
                {blog.source === "devto" ? "Dev.to" : "Medium"}
              </span>
              <span className="px-1.5 text-border">/</span>
              {blog.displayDate}
              {blog.readingTime && ` · ${blog.readingTime} min read`}
            </p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-semibold tracking-tight text-foreground underline-offset-4 hover:underline"
            >
              {blog.title}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {blog.description}
            </p>
            {blog.tags.length > 0 && (
              <p className="mt-3 border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
                {blog.tags
                  .slice(0, 4)
                  .map((tag) => `#${tag}`)
                  .join(" ")}
              </p>
            )}
          </InnerCard>
        ))}

      {!loading && blogs.length > PAGE_SIZE && (
        <button
          onClick={() =>
            setVisible((v) => (v >= blogs.length ? PAGE_SIZE : blogs.length))
          }
          className="w-full rounded-md border border-border py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          {visible >= blogs.length
            ? "Show less"
            : `Show ${blogs.length - visible} more`}
        </button>
      )}
    </OuterCard>
  );
};

export default Blogs;
