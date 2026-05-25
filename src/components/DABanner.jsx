import React from "react";
import Reveal from "./Reveal";

const DABanner = () => {
  return (
    <Reveal>
      <div className="bg-surface border-y border-border py-[1.5rem] px-[2rem] flex flex-col md:flex-row items-center gap-[1rem] max-w-[1200px] mx-auto mt-[4rem] justify-center text-center">
        <div className="w-[8px] h-[8px] rounded-full bg-accent shrink-0 shadow-[0_0_0_3px_rgba(61,189,181,0.15)]"></div>
        <p className="font-sans text-[0.88rem] leading-[1.6] text-muted">
          <strong className="text-text font-medium mr-1">Currently building:</strong>
          SQL and data analytics skills alongside frontend work — with a long-term direction toward Data Science.
        </p>
      </div>
    </Reveal>
  );
};

export default DABanner;
