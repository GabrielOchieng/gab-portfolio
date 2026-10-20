"use client";

import { useEffect, useRef } from "react";
import { attachParallax } from "@/lib/parallax";

const builtWith = [
  "Internal platforms & business tools",
  "AI-powered workflows & automation",
  "E-commerce & conversational checkout",
  "Operational dashboards & reporting",
];

const keepsReliable = [
  "Clear frontend architecture & state management",
  "Secure authentication & role-based access",
  "Type-safe APIs & structured data flows",
  "Automated testing & repeatable deployments",
];

const SystemCore = () => {
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coreRef.current) return;
    return attachParallax(coreRef.current);
  }, []);

  return (
    <div className="p-2">
      <div
        className="duality-section"
        style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}
      >
        <div className="duality-list" data-reveal>
          <p className="screenbreak-kicker">Product engineering</p>
          <h2>What I build</h2>
          <ul>
            {builtWith.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div
          ref={coreRef}
          className="duality-core"
          role="img"
          aria-label="Product work flowing through a reliable architecture core"
        >
          <div className="core-signal core-signal-in" aria-hidden="true">
            <i /><i /><i />
          </div>
          <div className="core-orbit core-orbit-outer">
            <i />
            <i />
          </div>
          <div className="core-orbit core-orbit-inner">
            <i />
            <i />
            <i />
          </div>

          <div className="core-module" data-depth="0.12">
            <strong>System architecture</strong>
            <small>Built to work together</small>
          </div>

          <div className="core-node core-node-state" data-depth="-0.14">
            State
          </div>
          <div className="core-node core-node-events" data-depth="0.2">
            Events
          </div>
          <div className="core-node core-node-data" data-depth="-0.08">
            Data
          </div>

          <div className="core-signal core-signal-out" aria-hidden="true">
            <i /><i /><i />
          </div>
        </div>

        <div className="duality-list duality-list-right" data-reveal>
          <p className="screenbreak-kicker">Engineering approach</p>
          <h2>How I build it</h2>
          <ul>
            {keepsReliable.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SystemCore;
