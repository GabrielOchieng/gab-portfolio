"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { attachParallax } from "@/lib/parallax";

const EdgeFlow = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    return attachParallax(stageRef.current);
  }, []);

  return (
    <div className="edge-stage">
      <div className="edge-copy" data-reveal>
        <p className="screenbreak-kicker screenbreak-kicker-light">
          03 / Cipher Hunt &middot; AI intel engine
        </p>
        <h2>Turning scattered job boards into a single signal</h2>
        <p>
          An automated recruitment-intelligence pipeline. It scouts remote
          job boards with headless scraping, scores each listing against a
          candidate profile with Gemini 1.5 Pro, and generates tailored
          application assets in real time, all orchestrated on a GitHub
          Actions schedule.
        </p>
        <Link
          href="https://job-alert-mu.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="screenbreak-text-link screenbreak-text-link-light"
        >
          Follow the pipeline <HiArrowRight />
        </Link>
      </div>

      <div ref={stageRef} className="incident-observatory" data-reveal>
        <div className="incident-console">
          <div className="incident-console-head">
            <span>Live event topology</span>
            <span className="incident-live">System observing</span>
          </div>
          <div className="incident-flow">
            <div className="incident-rail" />
            <div className="incident-node incident-node-source" data-depth="0.18">
              <strong>Job Board</strong>
              <span>scrape triggered</span>
            </div>
            <div className="incident-node incident-node-gateway" data-depth="0.28">
              <strong>Firecrawl</strong>
              <span>headless capture</span>
            </div>
            <div className="incident-node incident-node-state" data-depth="0.38">
              <strong>Gemini 1.5 Pro</strong>
              <span>semantic scoring</span>
            </div>
            <div className="incident-node incident-node-guard" data-depth="0.5">
              <strong>Asset Builder</strong>
              <span>duplicate absorbed</span>
            </div>
            <i className="incident-orb incident-orb-primary" />
            <i className="incident-orb incident-orb-duplicate" />
            <div className="incident-resolution">
              Resolved &middot; asset delivered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeFlow;
