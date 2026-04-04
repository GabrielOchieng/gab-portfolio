import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Body = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto pt-20  2xl:pt-0 p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            LET US SOLVE PROBLEMS TOGETHER
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I&#39;m <span className="text-[#5651e5]">GABRIEL</span>
          </h1>
          <h1 className="py-4 text-gray-800">A Software Developer</h1>
          <p className="py-4 text-gray-700 max-w-[750px] m-auto leading-relaxed text-sm md:text-base">
            I am a highly motivated software developer focused on building{" "}
            <span className="font-semibold text-gray-800">
              scalable web applications
            </span>{" "}
            and integrating{" "}
            <span className="font-semibold text-[#5651e5]">
              AI-driven solutions
            </span>
            . I am passionate about leveraging modern web technologies and
            constantly exploring the latest in{" "}
            <span className="font-semibold text-gray-800">
              intelligent system design
            </span>{" "}
            and automated workflows. I thrive in collaborative environments that
            allow me to leverage my technical expertise in{" "}
            <span className="font-semibold text-gray-800">
              UI/UX and AI orchestration
            </span>{" "}
            to solve complex problems and drive high-impact digital experiences.
          </p>

          <div className="flex items-center justify-between gap-2 max-w-[330px] m-auto py-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gabrielochieng"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <p className="pt-2 text-xs font-bold uppercase tracking-widest">
                LinkedIn
              </p>
            </a>

            {/* Github */}
            <a
              href="https://github.com/GabrielOchieng"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
              <p className="pt-2 text-xs font-bold uppercase tracking-widest">
                Github
              </p>
            </a>

            {/* Contact */}
            <Link href="/#contact" className="flex flex-col items-center">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <p className="pt-2 text-xs font-bold uppercase tracking-widest">
                Contact
              </p>
            </Link>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex flex-col items-center"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonFill />
              </div>
              <p className="pt-2 text-xs font-bold uppercase tracking-widest">
                Resume
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
