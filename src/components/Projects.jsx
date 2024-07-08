import React from "react";
import clearlink from "../../public/clearlink.webp";
import elck from "../../public/elckw.jpeg";
import photoweb from "../../public/header_background.webp";
import skillsconnect from "../../public/skillsconnect.webp";
import willycollections from "../../public/willycollections.jpg";
import task from "../../public/task.jpeg";

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
            title="TASK MANAGEMENT WEBSITE"
            backgroundImg={task}
            projectUrl="https://task-manager-r6wk.onrender.com"
            projectCode="https://github.com/GabrielOchieng/task-manager"
            projectPara="React, Tailwind, Redux, Node.js, Express, MongoDB, Node-Schedule."
            description="This website helps manage tasks and teams with different user roles. Users can register  and then the admin assigns 'manager' roles to some of them. Managers can then control tasks and departments for their teams. They can create new departments, edit existing ones, or even delete them if needed. They can also add, change, or remove tasks assigned to their team members. The users can also view tasks assigned to them and mark them as complete after which they are removed from the job-board. To help managers stay on top of things, the website provides a special dashboard. This dashboard uses charts and bars to show how well the teams and departments are doing. This way, managers can easily see where things stand and make adjustments as needed. The employees also get reminders/notifications via email for their tasks that are almost due. You can sign in as a manager using the email: manager@gmail.com and password: 123"
          />

          <ProjectItem
            title="WILLYCOLLECTIONS E-COMMERCE"
            backgroundImg={willycollections}
            projectUrl="https://willycollections.vercel.app"
            projectCode="https://github.com/GabrielOchieng/willycollections"
            projectPara="React, Firebase, Bootstrap & React Context"
            description="This is a full-featured React e-commerce application that allows users to browse, search, add items to carts, checkout, and manage orders.Bootstrap is used for the styling providing a clean and user-friendly interface. Customers can easily browse through product categories, view detailed descriptions and images, all with a few clicks! They can also select the products they want and add them to their shopping cart. Firebase is also used to manage the backend stuff. It manages user accounts, shopping carts, and even order making and confirmation. This allows for a secure and streamlined checkout process, making it easy for customers to complete their orders"
          />

          <ProjectItem
            title="PHOTOWEB"
            backgroundImg={photoweb}
            projectUrl="https://photowebapp.onrender.com"
            projectCode="https://github.com/GabrielOchieng/photoweb.git"
            projectPara="Reactjs, Tailwind, Redux, Node.js, Express & MongoDB"
            description="Photoweb is a user-friendly web app, built with React and Node, Express and MongoDB to handle the authentication, Tailwind CSS ensures a beautiful and responsive user interface, making browsing your memories a joy, and Redux for state management. Securely register and login to easily fetch photos from JSON placeholder and view them!
"
          />
          <ProjectItem
            title="CLEARLINK"
            backgroundImg={clearlink}
            projectUrl="https://clear-link-gabrielochieng.vercel.app"
            projectCode="https://github.com/GabrielOchieng/ClearLink"
            projectPara="HTML, CSS & JavaScript"
            description="A landing page website for clearlink converted from a figma file"
          />
          <ProjectItem
            title="ELCK CDC WEBSITE"
            backgroundImg={elck}
            projectUrl="https://elck-cdc.onrender.com/"
            projectCode="https://github.com/GabrielOchieng/elck-frontend"
            projectPara="React, CSS, NodeJs, Express & MongoDB"
            description="This project is the frontend of the ELCK CDC website, that is built with the MERN stack. It has a landing page displaying what the organization does, about it, how to contribute, its partners and the testimonials. You can also move to the welcome page where you will be required to register as a user after which you will be able to sign in and view the participants with their details and the activities photos. Furthermore, you can Create, Update and Delete participants/photos as an admin and not as a normal user as these roles are restricted to those registered as admins of the database."
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
