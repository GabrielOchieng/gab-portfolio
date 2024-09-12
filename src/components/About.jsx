import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen min-[320px]:mt-60 min-[500px]:mt-40 sm:mt-40  md:mt-0 p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-700">Software Developer</p>
          <p className="py-2 text-gray-700">
            I am a Software Developer with a passion for front-end engineering.
            While I took a BSc. Public Health as my undergraduate degree, I have
            always held a strong interest in technology. In 2021, I took the
            leap and began diving into web development.
          </p>
          <p className="py-2 text-gray-700">
            Now, I am actively building projects using React.js, Next.js, Redux,
            Firebase, and MongoDB. Every day brings fresh challenges, pushing me
            to learn and grow alongside a team of talented software developers.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-700 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div
          className="w-full h-full m-auto shadow-xl shadow-gray-400 
                    rounded-xl flex items-center justify-center p-4 
                    hover:scale-105 ease-in duration-300"
        >
          <a href="/#projects">
            <Image
              className="rounded-xl cursor-pointer"
              src="/coding.webp"
              width="700"
              height="800"
              style={{ objectFit: "cover" }}
              alt="home"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
