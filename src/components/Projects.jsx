import React from "react";
import clearlink from "../../public/clearlink.webp";
import elck from "../../public/elckw.jpeg";
import skillsconnect from "../../public/skillsconnect.webp";
import willycollections from "../../public/willycollections.jpg";

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
            title="WILLYCOLLECTIONS E-COMMERCE"
            backgroundImg={willycollections}
            projectUrl="/summarizer"
            projectPara="React, Firebase, Bootstrap & React Context"
          />
          <ProjectItem
            title="CLEARLINK"
            backgroundImg={clearlink}
            projectUrl="/library"
            projectPara="HTML, CSS & JavaScript"
          />
          <ProjectItem
            title="ELCK CDC WEBSITE"
            backgroundImg={elck}
            projectUrl="/netflix"
            projectPara="React, CSS, NodeJs, Express & MongoDB"
          />
          <ProjectItem
            title="SKILLSCONNECT"
            backgroundImg={skillsconnect}
            projectUrl="/notes"
            projectPara="Vue, CSS, & Pinia"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
