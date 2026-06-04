import * as React from "react";
import { OuterCard, InnerCard } from "./common/Cards";
import { CustomHeader } from "./common/typography";
import { Square, Sparkles, Monitor, Server, Cloud, Layers } from "lucide-react";
import { BULLET_COLOR } from "../constants";

const SKILL_CATEGORIES = [
  {
    label: "AI / LLM",
    icon: Sparkles,
    colorClass: "text-violet-500",
    skills: ["OpenAI SDK", "Anthropic SDK", "RAG", "MCP", "Prompt Eng.", "Agentic Workflows"],
  },
  {
    label: "Frontend",
    icon: Monitor,
    colorClass: "text-cyan-500",
    skills: ["React", "TypeScript", "Svelte", "Angular", "Next.js"],
  },
  {
    label: "Backend & DB",
    icon: Server,
    colorClass: "text-emerald-500",
    skills: ["Node.js", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Cloud / IaC",
    icon: Cloud,
    colorClass: "text-blue-500",
    skills: ["AWS Lambda", "CDK", "Terraform", "AppSync", "GitHub Actions"],
  },
  {
    label: "Architecture",
    icon: Layers,
    colorClass: "text-orange-500",
    skills: ["Microfrontends", "Module Federation", "Design Systems", "Monorepo"],
  },
];

const Skills: React.FC = () => {
  return (
    <OuterCard>
      <CustomHeader
        icon={<Square fill={BULLET_COLOR} color={BULLET_COLOR} size={10} />}
      >
        Skills
      </CustomHeader>
      <InnerCard className="space-y-3">
        {SKILL_CATEGORIES.map(({ label, icon: Icon, colorClass, skills }) => (
          <div key={label}>
            <div className={`flex items-center gap-1.5 text-xs font-semibold mb-1.5 ${colorClass}`}>
              <Icon size={12} />
              <span>{label}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-slate-200 text-slate-600 rounded px-2 py-0.5 text-xs dark:bg-slate-600 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </InnerCard>
    </OuterCard>
  );
};

export default Skills;
