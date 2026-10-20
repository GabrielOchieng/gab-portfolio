// export default Skills;

import Image from "next/image";
import React from "react";

const Skills = () => {
  const skillsList = [
    { name: "Next.js", src: "/nextjs.png" },
    { name: "React", src: "/react.png" },
    { name: "TypeScript", src: "/typescript.png" },
    { name: "Tailwind", src: "/tailwind.png" },
    { name: "AI / LLM Integration", src: "/llm.png" },
    { name: "Node.js", src: "/nodejs.jpeg" },
    { name: "PostgreSQL", src: "/postgresql.png" },
    { name: "Github / CI/CD", src: "/github.png" },
  ];

  return (
    <div id="skills" className="w-full p-2 py-16">
      <div className="max-w-310 mx-auto flex flex-col justify-center">
        <p className="eyebrow">Skills</p>
        <h2 className="py-4 text-text-main">Expertise & Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 hover:border-primary"
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
