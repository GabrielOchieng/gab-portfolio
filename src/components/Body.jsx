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
            LET\'S SOLVE PROBLEMS TOGETHER
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I&#39;m <span className="text-[#5651e5]">GABRIEL</span>
          </h1>
          <h1 className="py-4 text-gray-800">A Software Developer</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I am an experienced Software Developer adept in bringing forth
            expertise in design, installation, testing and maintenance of
            software systems. Proficient in various platforms, languages, and
            embedded systems. Experienced with the latest cutting edge
            development tools and procedures. Able to effectively self-manage
            during independent projects, as well as collaborate as part of a
            productive team.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/gabrielochieng"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/GabrielOchieng"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="https://drive.google.com/file/d/1cfwVqOo4NyjJPKyUqm4USox2Ch_QsALC/view"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
