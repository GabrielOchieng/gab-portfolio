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
          <p className="py-2 text-gray-700">Full-Stack Developer</p>
          <p className="py-2 text-gray-700">
            I am a passionate Full-Stack Developer dedicated to creating
            seamless and engaging web applications. Since I began my journey in
            Software Development, I have embraced the challenges of both
            front-end and back-end work, always striving to expand my knowledge.
          </p>
          <p className="py-2 text-gray-700">
            I thrive in collaborative environments where sharing ideas and
            learning from others fuels my growth. Tackling complex problems
            alongside talented teammates inspires me to deliver high-quality
            solutions and continuously improve my skills.
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
