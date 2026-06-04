import * as React from "react";
import { Download } from "lucide-react";
import { InnerCard, OuterCard } from "./common/Cards";
import Divider from "./common/divider";
const ProfileDetails: React.FC = () => {
  return (
    <div className="rounded-lg bg-white flex flex-col dark:bg-slate-900">
      <OuterCard>
        <div className="flex items-center gap-4 ml-1">
          <img
            className="border-2 border-white shadow object-center object-cover w-16 h-16 rounded-full"
            src="dp.webp"
            alt="Siddharth Pandey"
            width={64}
            height={64}
            fetchPriority="high"
          />
          <div>
            <div className="text-md font-medium">Siddharth Pandey</div>
            <div className="text-sm text-muted-foreground mt-0.5">Lead Full-Stack Engineer</div>
            <div className="text-sm text-muted-foreground">Applied AI Systems</div>
          </div>
        </div>
        <InnerCard>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Full-Stack Software Engineer with 13+ years building and leading production systems across logistics, fintech, and e-commerce — from React and Node.js to cloud infrastructure and AI-powered workflows. Shipped RAG-based investigation pipelines, published MCP-based tooling, and automated deployments with Terraform and AWS CDK. Engineering lead who grows teams through hiring, mentoring, and establishing platform standards.
          </p>
          <Divider className="my-3" />
          <a
            href="/siddharth-pandey-resume.pdf"
            download="Siddharth-Pandey-Resume.pdf"
            className="flex items-center justify-center gap-2 w-full rounded-md bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-medium py-1.5 transition-colors"
          >
            <Download size={14} />
            Download Resume
          </a>
        </InnerCard>
      </OuterCard>
    </div>
  );
};

export default ProfileDetails;
