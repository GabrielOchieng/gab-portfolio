"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { attachParallax } from "@/lib/parallax";

const ROUTE_PATH = "M185 300C280 230 360 250 430 190S565 118 650 170";

const columns = [
  { title: "Researching", cards: 2 },
  { title: "Validated", cards: 2 },
  { title: "Live", cards: 1 },
];

const KanbanShowcase = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    return attachParallax(stageRef.current);
  }, []);

  return (
    <div className="project-showcase-section kanban-section">
      <div className="kanban-copy" data-reveal>
        <p className="screenbreak-kicker">
          02 / Market Validator &middot; Internal SaaS tool
        </p>
        <h2>Turning market guesswork into a repeatable decision process</h2>
        <p>
          Market Validator replaces manual &quot;search Jiji, guess if
          it&#39;s saturated&quot; checks with a logged, multi-tenant
          research pipeline: AI-assisted data fetching, opportunity
          scoring, and a lifecycle view from researching to live, backed
          by Supabase and a daily automated digest.
        </p>
        <Link
          href="https://market-validator-blush.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="screenbreak-text-link"
        >
          Open the project <HiArrowRight />
        </Link>
      </div>

      <div
        ref={stageRef}
        className="kanban-breakout"
        aria-hidden="true"
        data-reveal
      >
        <div className="kanban-rig">
          <div className="kanban-window">
            <div className="kanban-toolbar">
              <i />
              <span>Product ideas</span>
            </div>
            <div className="kanban-columns">
              {columns.map((col) => (
                <div key={col.title}>
                  <b>{col.title}</b>
                  {Array.from({ length: col.cards }).map((_, i) => (
                    <i key={i} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <svg className="kanban-route" viewBox="0 0 760 500">
            <title>Work item moving through delivery states</title>
            <path d={ROUTE_PATH} />
            <circle r="7">
              <animateMotion dur="5.6s" path={ROUTE_PATH} repeatCount="indefinite" />
            </circle>
          </svg>

          <div className="kanban-flying-card kanban-flying-card-a" data-depth="0.45">
            <span>Opportunity score</span>
            <small>0&ndash;100 composite</small>
          </div>
          <div className="kanban-flying-card kanban-flying-card-b" data-depth="-0.3">
            <span>AI-assisted fetch</span>
            <small>Claude-parsed data</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanShowcase;
