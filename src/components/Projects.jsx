import React from "react";
import sumzImg from "../public/assets/projects/sumz.png";
import librayImg from "../public/assets/projects/library.png";
import netflixImg from "../public/assets/projects/netflix.png";
import notesImg from "../public/assets/projects/notes.png";
import wordleImg from "../public/assets/projects/wordle.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Article Summarizer"
            backgroundImg={sumzImg}
            projectUrl="/summarizer"
            projectPara="React JS, Redux & TailwindCSS"
          />
          <ProjectItem
            title="Library Ecommerce App"
            backgroundImg={librayImg}
            projectUrl="/library"
            projectPara="React JS, Axios, & CSS"
          />
          <ProjectItem
            title="Netflix Clone App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            projectPara="Next JS, TypeScript, NextAuth, & MongoDB"
          />
          <ProjectItem
            title="Notes Taking App"
            backgroundImg={notesImg}
            projectUrl="/notes"
            projectPara="React JS, TypeScript, & Bootstrap"
          />
          <ProjectItem
            title="Wordle Game"
            backgroundImg={wordleImg}
            projectUrl="/wordle"
            projectPara="JavaScript & CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
