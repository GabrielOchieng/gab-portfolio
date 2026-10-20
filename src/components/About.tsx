import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full p-2 flex items-center py-16"
    >
      <div className="max-w-310 m-auto">
        <div className="max-w-187.5">
          <p className="eyebrow">About</p>
          <h2 className="py-4 text-text-main">
            Product Engineer, Web &amp; Mobile
          </h2>
          <p className="py-2 text-muted font-bold text-lg">
            From understanding the problem to shipping the product.
          </p>
          <p className="py-2 text-muted">
            I&#39;m Gabriel, a product engineer with over four years of
            experience building software across travel tech, e-commerce,
            and business operations, including internal platforms that
            help teams manage workflows and get work done.
          </p>
          <p className="py-2 text-muted">
            My work spans defining requirements, designing user journeys,
            building interfaces, developing APIs, and modelling data. I
            enjoy connecting those decisions: understanding how a
            business operates, identifying what users need, and turning
            that into software they can rely on.
          </p>
          <p className="py-2 text-muted">
            I build primarily with{" "}
            <span className="font-semibold text-text-main">
              React, Next.js, TypeScript, and Node.js
            </span>
            , with{" "}
            <span className="font-semibold text-text-main">
              React Native
            </span>{" "}
            for mobile. Across the stack, I focus on clear interactions,
            maintainable architecture, and reliable delivery.
          </p>
          <p className="py-2 text-muted">
            Alongside my professional work, I build{" "}
            <span className="font-semibold text-primary">
              independent products that use AI to automate practical
              tasks
            </span>
            , from turning product photos into catalogue entries to
            matching job opportunities and explaining code. These
            projects let me explore ideas, make product decisions, and
            carry them through implementation and iteration.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-primary underline cursor-pointer font-medium">
              Explore my work &rarr;
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
