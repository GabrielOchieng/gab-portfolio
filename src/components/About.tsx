import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 md:mb-24 2xl:mb-0"
    >
      <div className="max-w-310 m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-primary">
            About
          </p>
          <h2 className="py-4 text-gray-800">Product-Focused Developer</h2>
          <p className="py-2 text-gray-700 font-bold text-lg">
            Bridging the gap between Complex Logic and Human Experience
          </p>
          <p className="py-2 text-gray-700">
            I am a developer who believes that a powerful backend is only as
            good as the interface that delivers it. My expertise lies in
            building{" "}
            <span className="font-semibold text-gray-800">
              seamless user interfaces
            </span>{" "}
            using React and Next.js, with a strong focus on clean aesthetics and
            intuitive user flows.
          </p>
          <p className="py-2 text-gray-700">
            My approach goes beyond basic web development; I focus on the{" "}
            <span className="font-semibold text-gray-800">
              Customer Experience (CX)
            </span>
            . By integrating{" "}
            <span className="font-semibold text-[#5651e5]">
              AI-driven solutions
            </span>{" "}
            and automated workflows, I aim to reduce user friction and solve
            real-world problems through{" "}
            <span className="font-semibold text-gray-800">
              intelligent system design
            </span>
            . I thrive on the challenge of taking a technical concept and
            turning it into a clean, intuitive product.
          </p>
          <p className="py-2 text-gray-700">
            Beyond just "making it work," I am obsessed with
            performance—ensuring that modern data pipelines feel instantaneous
            to the user. I prioritize accessibility and speed to create digital
            experiences that{" "}
            <span className="font-semibold text-gray-800">
              drive meaningful user engagement
            </span>
            .
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[#5651e5] underline cursor-pointer font-medium">
              Explore my latest builds.
            </p>
          </Link>
        </div>

        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 
                    rounded-xl flex items-center justify-center p-4 
                    hover:scale-105 ease-in duration-300"
        >
          <Link href="/#projects">
            <Image
              className="rounded-xl cursor-pointer"
              src="/coding.webp"
              width={700}
              height={800}
              style={{ objectFit: "cover" }}
              alt="developer focused on design and code"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
