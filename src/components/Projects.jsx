import React from "react";
import clearlink from "../../public/clearlink.webp";
import elck from "../../public/elckw.jpeg";
import photoweb from "../../public/header_background.webp";
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
            projectUrl="https://willycollections.vercel.app"
            projectCode="https://github.com/GabrielOchieng/willycollections"
            projectPara="React, Firebase, Bootstrap & React Context"
          />
          <ProjectItem
            title="PHOTOWEB"
            backgroundImg={photoweb}
            projectUrl="https://photowebapp.onrender.com"
            projectCode="https://github.com/GabrielOchieng/photoweb.git"
            projectPara="Reactjs, Tailwind, Redux, Node.js, Express & MongoDB"
          />
          <ProjectItem
            title="CLEARLINK"
            backgroundImg={clearlink}
            projectUrl="https://clear-link-gabrielochieng.vercel.app"
            projectCode="https://github.com/GabrielOchieng/ClearLink"
            projectPara="HTML, CSS & JavaScript"
          />
          <ProjectItem
            title="ELCK CDC WEBSITE"
            backgroundImg={elck}
            projectUrl="https://elck-cdc.onrender.com/"
            projectCode="https://github.com/GabrielOchieng/elck-frontend"
            projectPara="React, CSS, NodeJs, Express & MongoDB"
          />
          <ProjectItem
            title="SKILLSCONNECT"
            backgroundImg={skillsconnect}
            projectUrl="https://skillsconnect.vercel.app"
            projectCode="https://github.com/GabrielOchieng/Skillsconnect"
            projectPara="Vue, CSS, & Pinia"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
