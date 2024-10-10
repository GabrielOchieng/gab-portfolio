import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Body = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto  min-[300px]:pt-96 min-[320px]:pt-80  p-2 sm:pt-12 lg:pt-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            LET US SOLVE PROBLEMS TOGETHER
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I&#39;m <span className="text-[#5651e5]">GABRIEL</span>
          </h1>
          <h1 className="py-4 text-gray-800">A Software Developer</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I am a highly motivated software developer eager to leverage my
            skills in design, installation, testing, and maintaining software
            systems. I am passionate about learning new technologies and
            constantly explore the latest cutting-edge development tools and
            procedures. I thrive in collaborative environments that allow me to
            contribute my technical expertise and dedication while learning from
            experienced developers.
          </p>
          <div className="flex items-center justify-between gap-2 max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/gabrielochieng"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <p className="pt-2">LinkedIn</p>
            </a>
            <a
              href="https://github.com/GabrielOchieng"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
              <p className="pt-2">Github</p>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <p className="pt-2">Contact</p>
            </Link>
            <a
              href="https://drive.google.com/file/d/1aj17wR3M-FdCnnnMnWVXJ6r9SMc5VWWi/view"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonFill />
              </div>
              <p className="pt-2">Resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
