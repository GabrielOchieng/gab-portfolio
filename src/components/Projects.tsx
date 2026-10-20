import brandmonitor from "../../public/brandmonitor.png";
import codevistam from "../../public/codevistam.png";
import cipherhunt from "../../public/cipherhunt.png";
import marketvalidator from "../../public/marketvalidator.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectsData = [
    {
      title: "Codevista: AI Code Companion",
      category: "Developer Tooling",
      backgroundImg: codevistam,
      projectUrl: "https://codevista-client.vercel.app",
      projectCode: "https://github.com/GabrielOchieng/codevista",
      tech: "Llama 3.3 70B (Groq), Next.js 16, React 19, Tailwind v4, Framer Motion",
      description:
        "A lightning-fast code analysis tool powered by Groq's high-speed inference engine and Llama 3.3 70B. It provides instantaneous, human-like explanations and 'Learn in Layers' conceptual breakdowns. Designed for zero-latency developer assistance with a modern React 19 and Tailwind v4 frontend.",
    },
    {
      title: "Brand Monitor",
      category: "Security / AI SaaS",
      backgroundImg: brandmonitor,
      projectUrl: "https://brand-monitor-web-eta.vercel.app",
      projectCode: "https://github.com/GabrielOchieng/brand-monitor",
      tech: "Next.js, Fastify, Prisma, PostgreSQL (RLS), Clerk, pg-boss, Playwright, Claude API",
      description:
        "A multi-tenant brand-impersonation detection platform. Discovers lookalike domains (typosquats, homoglyphs, alternate TLDs), enriches findings via WHOIS/RDAP and live site scans, scores them explainably, and alerts on change. Includes certificate-transparency monitoring, phishing-feed matching, social-impersonation search, and AI-generated plain-English explanations of each score.",
    },
    {
      title: "Cipher Hunt: AI Job Discovery",
      category: "AI Automation",
      backgroundImg: cipherhunt,
      projectUrl: "https://job-alert-mu.vercel.app",
      projectCode: "https://github.com/GabrielOchieng/job-alert",
      tech: "Next.js, React, Supabase, AI integrations, multi-source job APIs",
      description:
        "An automated job-discovery and tracking dashboard for frontend engineers. Aggregates remote listings from multiple job APIs and RSS feeds, filters out region-locked roles, and gives a single dashboard to track application status and tailor materials with AI assistance.",
    },
    {
      title: "Market Validator",
      category: "Internal SaaS Tool",
      backgroundImg: marketvalidator,
      projectUrl: "https://market-validator-blush.vercel.app",
      tech: "Next.js, Supabase (Postgres + RLS), Resend, Claude API, Vitest",
      description:
        "A multi-tenant internal tool that replaces manual market-saturation guesswork with a repeatable, logged research process, then runs the reselling business itself once an idea is worth pursuing (orders, wholesale purchase batches, real profit/loss). Includes AI-assisted data fetching across multiple research tiers, a daily automated digest, and an opportunity-scoring engine with full test coverage.",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-310 mx-auto px-2 py-16">
        <p className="eyebrow">More Builds</p>
        <h2 className="py-4 text-text-main">Further Along the Way</h2>
        <div className="flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              number={index + 1}
              category={project.category}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              projectCode={project.projectCode}
              projectPara={project.tech}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
