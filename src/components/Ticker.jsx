import React from "react";

const Ticker = () => {
  const items = [
    "Frontend Development",
    "React & TypeScript",
    "Responsive Design",
    "Web Performance",
    "UI/UX Implementation",
    "Problem Solving",
  ];

  return (
    <div className="bg-accent-dim border-b border-border py-2.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-ticker hover:animate-ticker-paused">
        {items.map((item, index) => (
          <span
            key={`ticker-1-${index}`}
            className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-text/85 px-10 after:content-['·'] after:ml-10 after:opacity-40"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless scroll */}
        {items.map((item, index) => (
          <span
            key={`ticker-2-${index}`}
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
