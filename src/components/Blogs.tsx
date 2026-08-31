import * as React from "react";
import { useState } from "react";
import { WRITING_TOPICS } from "@/data";
import { useBlogs } from "@/hooks/useBlogs";

const PAGE_SIZE = 6;

const Blogs: React.FC = () => {
  const { blogs, loading, error } = useBlogs();
  const [visible, setVisible] = useState(PAGE_SIZE);

  return (
    <div>
      <p className="mb-6 max-w-[62ch] font-mono text-[11px] leading-5 text-muted-foreground">
        <span className="uppercase tracking-[0.14em] text-foreground">
          Topics
        </span>
        <span className="px-2 text-border">/</span>
        {WRITING_TOPICS.join(" · ")}
      </p>

      <div className="divide-y divide-border border-t border-border">
        {loading &&
          [0, 1, 2].map((i) => (
            <div key={i} className="animate-pulse space-y-2 py-6">
              <div className="h-4 w-2/3 rounded bg-muted" />
              <div className="h-3 w-1/3 rounded bg-muted" />
            </div>
          ))}
        {error && <p className="py-6 text-sm text-muted-foreground">{error}</p>}

        {!loading &&
          blogs.slice(0, visible).map((blog, index) => (
            <article key={index} className="py-6">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-x-8 gap-y-2 md:grid-cols-[9.5rem_1fr]"
              >
                <p className="flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] leading-5 text-muted-foreground md:block">
                  <span>{blog.displayDate}</span>
                  <span className="text-border md:hidden">·</span>
                  <span className="md:mt-1 md:block">
                    {blog.source === "devto" ? "Dev.to" : "Medium"}
                    {blog.readingTime && ` · ${blog.readingTime} min`}
                  </span>
                </p>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold leading-snug tracking-[-0.01em] text-foreground underline-offset-4 group-hover:underline">
                    {blog.title}
                  </h3>
                  <p className="mt-1 hidden break-all font-mono text-[9px] text-muted-foreground print:block">
                    {blog.link}
                  </p>
                  <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.6] text-muted-foreground print:hidden">
                    {blog.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
      </div>

      {!loading && blogs.length > PAGE_SIZE && (
        <button
          onClick={() =>
            setVisible((v) => (v >= blogs.length ? PAGE_SIZE : blogs.length))
          }
          className="mt-6 rounded border border-border px-4 py-2 print:hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          {visible >= blogs.length
            ? "Show less"
            : `Show ${blogs.length - visible} more`}
        </button>
      )}
    </div>
  );
};

export default Blogs;
