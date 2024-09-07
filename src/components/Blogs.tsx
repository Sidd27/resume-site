import * as React from "react";
import { InnerCard, OuterCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Square } from "lucide-react";
import { BLOGS_DATA, BULLET_COLOR } from "@/constants";

interface IBlogsProps {}

const Blogs: React.FunctionComponent<IBlogsProps> = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Blogs
      </CustomHeader>
      <div className="space-y-2">
        {BLOGS_DATA.map((blog, index) => (
          <InnerCard key={index}>
            <div className="text-xs text-muted-foreground">{blog.date}</div>
            <div className="hover:underline text-foreground font-semibold mt-1 mb-2 cursor-pointer">
              <a href={blog.link} target="_blank">
                {blog.title}
              </a>
            </div>
            <div className="text-muted-foreground">{blog.detail}</div>
            <a
              href={blog.link}
              target="_blank"
              className="block hover:underline text-foreground font-semibold mt-4 cursor-pointer"
            >
              Read More
            </a>
          </InnerCard>
        ))}
      </div>
    </OuterCard>
  );
};

export default Blogs;
