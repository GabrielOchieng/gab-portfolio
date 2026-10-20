"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { attachParallax } from "@/lib/parallax";

const Body = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    return attachParallax(stageRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = nameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--name-x", `${x}%`);
    el.style.setProperty("--name-y", `${y}%`);
  };

  const handleMouseLeave = () => {
    const el = nameRef.current;
    if (!el) return;
    el.style.setProperty("--name-x", "48%");
    el.style.setProperty("--name-y", "45%");
  };

  return (
    <section id="home" className="screenbreak-hero">
      <div className="screenbreak-hero-copy fade-in">
        <p className="screenbreak-kicker">Product engineer</p>
        <h1
          ref={nameRef}
          className="interactive-hero-name"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <span>GABRIEL</span>
          <span>OCHIENG</span>
        </h1>
        <p className="screenbreak-lead">
          I turn complex workflows into intuitive web and mobile products,
          from internal business platforms to AI-powered commerce. I help
          shape the solution, build across the stack, and take it through
          to launch.
        </p>
        <p className="screenbreak-stack">
          React &middot; Next.js &middot; React Native &middot; Node.js
          &middot; TypeScript / Product Engineering &amp; Applied AI
        </p>

        <div className="screenbreak-actions">
          <Link href="/#projects" className="button-tactile screenbreak-button">
            Explore the work <HiArrowRight />
          </Link>
          <Link href="/#contact" className="screenbreak-text-link">
            Let&#39;s talk <HiArrowUpRight />
          </Link>
        </div>
      </div>

      <div ref={stageRef} className="cutout-stage fade-in fade-in-delay-1">
        <div
          className="relative overflow-hidden rounded-[20px]"
          data-depth="0.1"
          style={{ height: "28rem" }}
        >
          <Image
            className="object-cover"
            src="/coding.png"
            alt="Gabriel's workspace, focused on design and code"
            fill
            sizes="(min-width: 768px) 55vw, 90vw"
            priority
          />
        </div>

        <p className="cutout-note hidden md:block" data-depth="-0.15">
          The person behind
          <br />
          the systems
        </p>

        <div className="cutout-trace hidden md:block" data-depth="0.48">
          <span>event</span> build.shipped
          <br />
          <span>state</span> consistent
          <br />
          <span>status</span> available
        </div>
      </div>
    </section>
  );
};

export default Body;
