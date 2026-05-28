import React from "react";

const ITEMS = [
  "React", "TypeScript", "Tailwind CSS", "Firebase",
  "Framer Motion", "Node.js", "MongoDB", "REST APIs",
  "Frontend Development", "PWA", "Vite", "Recharts"
];

const Ticker = () => {
  return (
    <div className="bg-accent-dim border-y border-border py-2.5 overflow-hidden whitespace-nowrap group">
      <div className="inline-flex animate-ticker group-hover:[animation-play-state:paused]">
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <span
            key={`ticker-${index}`}
            className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-text/85 px-10 after:content-['·'] after:ml-10 after:opacity-40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
