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
          <p className="py-2 text-gray-700">Software Developer</p>
          <p className="py-2 text-gray-700">
            I'm a<span className="text-[#5651e5]"> Software Developer</span>{" "}
            with a passion for front-end engineering. While I took a BSc. Public
            Health as my undergraduate degree, I've always held a strong
            interest in technology. In 2022, I took the leap and began diving
            into web development, starting with the fundamentals; HTML and CSS.
          </p>
          <p className="py-2 text-gray-700">
            Fueled by the intricate power of programming, I delved deeper into
            web development after being captivated by its potential. JavaScript
            became my gateway, and the thrill of building interactive websites
            solidified my passion. Now, I'm actively building projects using
            React.js, Next.js, Redux, Firebase, and MongoDB. Every day brings
            fresh challenges, pushing me to learn and grow alongside a team of
            <span className="text-[#5651e5]"> talented</span> software
            developers.
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
            src="/coding.webp"
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
