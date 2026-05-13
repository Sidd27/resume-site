import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Square } from "lucide-react";
import { BULLET_COLOR } from "@/constants";
import { useBlogs } from "@/hooks/useBlogs";

interface IBlogsProps {}

const SourceBadge: React.FC<{ source: "devto" | "medium" }> = ({ source }) => (
  <span
    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
      source === "devto"
        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
        : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
    }`}
  >
    {source === "devto" ? "Dev.to" : "Medium"}
  </span>
);

const BlogSkeleton: React.FC = () => (
  <InnerCard>
    <div className="animate-pulse space-y-2">
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
    </div>
  </InnerCard>
);

const Blogs: React.FunctionComponent<IBlogsProps> = () => {
  const { blogs, loading, error } = useBlogs();

  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Blogs
      </CustomHeader>
      <div className="space-y-2">
        {loading && (
          <>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </>
        )}
        {error && (
          <div className="text-sm text-muted-foreground px-2">{error}</div>
        )}
        {!loading &&
          blogs.map((blog, index) => (
            <InnerCard key={index}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">
                  {blog.displayDate}
                  {blog.readingTime && ` · ${blog.readingTime} min read`}
                </span>
                <SourceBadge source={blog.source} />
              </div>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-foreground font-semibold text-sm block mb-2"
              >
                {blog.title}
              </a>
              <div className="text-muted-foreground text-sm">
                {blog.description}
              </div>
              {blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {blog.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline text-foreground font-semibold text-sm mt-3"
              >
                Read More →
              </a>
            </InnerCard>
          ))}
      </div>
    </OuterCard>
  );
};

export default Blogs;
