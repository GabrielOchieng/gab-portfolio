// export default Skills;

import Image from "next/image";
import React from "react";

const Skills = () => {
  const skillsList = [
    // --- CORE STACK ---
    { name: "Next JS 16", src: "/nextjs.png" },
    { name: "React 19", src: "/react.png" },
    { name: "TypeScript", src: "/typescript.png" },
    { name: "JavaScript", src: "/javascript.png" },
    { name: "Material UI", src: "/mui.png" },
    { name: "Tailwind ", src: "/tailwind.png" },

    // --- NEW TOP-TIER AI SKILLS ---
    { name: "AI Orchestration", src: "/ai-logic.webp" }, // Suggestion: Use a brain/network icon
    { name: "LLM Integration", src: "/llm.webp" }, // (Gemini, Llama 3.3, Groq)
    { name: "Web Scraping", src: "/scraping.jpg" }, // (Firecrawl, Headless Chrome)

    // --- BACKEND & DATA ---
    { name: "Node JS", src: "/nodejs.jpeg" },
    { name: "PostgreSQL", src: "/postgresql.png" },
    { name: "MongoDB", src: "/mongoDB.png" },
    { name: "Supabase", src: "/supabase.jpg" },

    // --- TOOLS & TESTING ---
    { name: "Redux / State", src: "/redux.png" },
    { name: "Github / CI/CD", src: "/github.png" },
    { name: "Jest / Cypress", src: "/jest.png" },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2 md:mb-24 2xl:mb-0">
      <div className="max-w-310 mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary">Skills</p>
        <h2 className="py-4">Expertise & Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-t-2 border-transparent hover:border-primary"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="m-auto">
                  <Image
                    src={skill.src}
                    width={50}
                    height={50}
                    alt={`${skill.name} logo`}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-bold">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
