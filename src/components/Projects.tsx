import React from "react";
import house from "../../public/house-rent.jpeg";
import task from "../../public/task.jpeg";
import willycollections from "../../public/willycollections.jpg";
import codevistam from "../../public/codevistam.jpg";
import photoweb from "../../public/header_background.webp";
import cipherhunt from "../../public/cipherhunt.webp";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectsData = [
    {
      title: "CIPHER HUNT: AI INTEL ENGINE",
      backgroundImg: cipherhunt,
      projectUrl: "https://job-alert-mu.vercel.app", // Update with your link
      projectCode: "https://github.com/GabrielOchieng/job-alert",
      tech: "Next.js 15, Gemini 1.5 Pro, Supabase, Firecrawl, GitHub Actions",
      description:
        "An automated recruitment intelligence engine. It uses AI orchestration and headless scraping to scout remote job boards, analyze them against candidate profiles using semantic scoring, and generate tailored application assets in real-time.",
    },
    {
      title: "CODEVISTA: AI CODE COMPANION",
      backgroundImg: codevistam,
      projectUrl: "https://codevista-client.vercel.app",
      projectCode: "https://github.com/GabrielOchieng/codevista",
      tech: "Llama 3.3 70B (Groq), Next.js 16, React 19, Tailwind v4, Framer Motion",
      description:
        "A lightning-fast code analysis tool powered by Groq's high-speed inference engine and Llama 3.3 70B. It provides instantaneous, human-like explanations and 'Learn in Layers' conceptual breakdowns. Designed for zero-latency developer assistance with a modern React 19 and Tailwind v4 frontend.",
    },
    {
      title: "RENTEASY WEBSITE",
      backgroundImg: house,
      projectUrl: "https://renteasy-zhop.onrender.com",
      projectCode: "https://github.com/GabrielOchieng/renteasy",
      tech: "React, Tailwind, Redux, Socket.io, Node.js, MongoDB",
      description:
        "RentEasy is a user-friendly online platform that connects landlords and tenants. Landlords can list properties with detailed info and photos, while tenants can search based on preferences. It features a built-in map tool and a direct messaging system.",
    },
    {
      title: "TASK MANAGEMENT WEBSITE",
      backgroundImg: task,
      projectUrl: "https://task-manager-r6wk.onrender.com",
      projectCode: "https://github.com/GabrielOchieng/task-manager",
      tech: "React, Tailwind, Redux, Chart.js, Node.js, MongoDB",
      description:
        "TASKY empowers teams and managers with features like department management and insightful dashboards. Users can track progress and receive reminders. Use manager@gmail.com / 123 to test the manager role.",
    },
    {
      title: "WILLYCOLLECTIONS E-COMMERCE",
      backgroundImg: willycollections,
      projectUrl: "https://willycollections.vercel.app",
      projectCode: "https://github.com/GabrielOchieng/willycollections",
      tech: "React, Firebase, Bootstrap & React Context",
      description:
        "A full-featured e-commerce application allowing users to browse, search, and manage carts. It uses Firebase for backend services including user accounts and order processing.",
    },
    {
      title: "PHOTOWEB",
      backgroundImg: photoweb,
      projectUrl: "https://photowebapp.onrender.com",
      projectCode: "https://github.com/GabrielOchieng/photoweb.git",
      tech: "Reactjs, Tailwind, Redux, Node.js, Express & MongoDB",
      description:
        "A beautiful, responsive UI for browsing memories. Photoweb uses the MERN stack to handle authentication and fetches photos via JSON placeholder.",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
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
