import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-700">Front-End Developer</p>
          <p className="py-2 text-gray-700">
            I&#39;m a Malawian
            <span className="text-[#5651e5]"> frontend engineer</span> of 22
            years old. I&apos;ve spent the last five years working as a
            professional beat maker in music production. I&apos;ve always
            enjoyed technology and dealing with computers. In 2022, I began
            working with HTML and CSS.
          </p>
          <p className="py-2 text-gray-700">
            I was immediately drawn to study more after becoming amazed with how
            sophisticated programming can be. I began learning Javascript and
            became even more excited about creating interactive websites.
            I&#39;m now spending my time developing projects with React Js, Next
            Js, Redux, Firebase, MongoDB, and learning new technologies. Every
            day, I work on extremely complex technical issues and learn from a
            team of some of the most
            <span className="text-[#5651e5]"> skilled</span> and
            <span className="text-[#5651e5]"> experienced</span> software
            developers every day.
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
          <Image
            className="rounded-xl"
            src="/assets/aboutMe.jpg"
            width="700"
            height="800"
            style={{ objectFit: "cover" }}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
