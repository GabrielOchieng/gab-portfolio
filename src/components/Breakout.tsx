"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { attachParallax } from "@/lib/parallax";

const ROUTE_PATH = "M255 210C360 150 420 82 560 96S660 196 676 250";

const Breakout = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    return attachParallax(stageRef.current);
  }, []);

  return (
    <div id="projects" className="project-showcase-section">
      <div
        ref={stageRef}
        className="breakout-visual"
        aria-hidden="true"
        data-reveal
      >
        <div className="breakout-rig">
          <div className="breakout-monitor">
            <div className="breakout-browser-bar">
              <i /><i /><i />
              <span>lyverathrift.boutique / catalog</span>
            </div>
            <div className="breakout-screen">
              <div className="breakout-sidebar" />
              <div className="breakout-dashboard">
                <div className="breakout-heading" />
                <div className="breakout-chart">
                  <i className="breakout-chart-pulse breakout-chart-pulse-a" />
                  <i className="breakout-chart-pulse breakout-chart-pulse-b" />
                </div>
                <div className="breakout-row" />
              </div>
            </div>
          </div>

          <div className="breakout-card breakout-card-a" data-depth="0.55">
            <span>Checkout</span>
            <strong>WhatsApp</strong>
          </div>
          <div className="breakout-card breakout-card-b" data-depth="-0.35">
            <span>Product ingestion</span>
            <strong>Gemini Vision</strong>
          </div>
          <div className="breakout-card breakout-card-c" data-depth="0.28">
            <span>Checkout flow</span>
            <small>State machine</small>
          </div>

          <svg className="breakout-route" viewBox="0 0 720 500" aria-hidden="true">
            <title>Event route leaving the product interface</title>
            <defs>
              <radialGradient id="event-sphere-orange" cx="32%" cy="26%">
                <stop offset="0" stopColor="#ffd8b7" />
                <stop offset="0.32" stopColor="#f27b47" />
                <stop offset="1" stopColor="#b72e15" />
              </radialGradient>
              <radialGradient id="event-sphere-cyan" cx="32%" cy="26%">
                <stop offset="0" stopColor="#e6ffff" />
                <stop offset="0.32" stopColor="#5bd3de" />
                <stop offset="1" stopColor="#08788d" />
              </radialGradient>
            </defs>
            <path className="breakout-route-body" d={ROUTE_PATH} />
            <path className="breakout-route-light" d={ROUTE_PATH} />
            <circle cx="255" cy="210" r="9" />
            <circle cx="560" cy="96" r="9" />
            <circle cx="676" cy="250" r="9" />
            <circle className="breakout-packet breakout-packet-a" r="5">
              <animateMotion dur="4.8s" path={ROUTE_PATH} repeatCount="indefinite" />
            </circle>
            <circle className="breakout-packet breakout-packet-b" r="3.5">
              <animateMotion begin="-2.4s" dur="4.8s" path={ROUTE_PATH} repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      <div className="breakout-copy" data-reveal>
        <p className="screenbreak-kicker">
          01 / Lyvera Thrift &middot; AI WhatsApp commerce
        </p>
        <h2>A dual-interface storefront that lives inside WhatsApp</h2>
        <p>
          A dual-interface e-commerce platform featuring a WhatsApp bot
          with Gemini Vision for automated product ingestion, paired with
          a state-machine-driven conversational checkout process, built
          end to end with Next.js, Prisma, and PostgreSQL.
        </p>
        <Link
          href="https://www.lyverathrift.boutique"
          target="_blank"
          rel="noopener noreferrer"
          className="screenbreak-text-link"
        >
          Visit the store <HiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Breakout;
