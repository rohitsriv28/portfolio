import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const TooltipChip = ({ label, tip, highlight = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`font-mono text-[0.7rem] tracking-[0.03em] px-[0.95rem] py-[0.42rem] border transition-colors duration-150 cursor-default inline-block ${highlight
          ? "bg-accent-glow border-[rgba(61,189,181,0.5)] text-accent hover:bg-card hover:border-[rgba(61,189,181,0.4)] hover:text-text"
          : "bg-transparent border-border text-muted hover:bg-card hover:border-[rgba(61,189,181,0.4)] hover:text-text"
          }`}
      >
        {label}
      </span>
      <AnimatePresence>
        {isHovered && tip && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 5, x: "-50%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-[calc(100%+8px)] left-1/2 bg-card border border-border text-text font-mono text-[0.56rem] tracking-[0.05em] whitespace-nowrap px-[0.65rem] py-[0.3rem] z-10 pointer-events-none"
          >
            {tip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-border pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-[7rem] px-[2.5rem] border-b border-border bg-surface" id="skill">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-accent">
            03. Toolkit
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Core <em className="italic text-accent">Competencies</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 items-start max-w-[1200px] mx-auto mt-16">
            <div className="font-sans text-[0.875rem] leading-[1.88] text-muted lg:mt-[1.5rem]">
              I am constantly learning and adapting. Currently, my stack is heavily focused on React and modern CSS, but I have experience across the entire web ecosystem.
            </div>

            <div>
              <div className="mb-[2.25rem]">
                <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-[0.9rem] pb-[0.5rem] border-b border-border">
                  Frontend
                </div>
                <div className="flex flex-wrap gap-[0.45rem]">
                  <TooltipChip label="React.js" tip="3+ projects" highlight={true} />
                  <TooltipChip label="TypeScript" tip="Main language" highlight={true} />
                  <TooltipChip label="Redux Toolkit" tip="State management" />
                  <TooltipChip label="Tailwind CSS" tip="Utility-first CSS" />
                  <TooltipChip label="HTML5 / CSS3" />
                  <TooltipChip label="JavaScript (ES6+)" />
                </div>
              </div>

              <div className="mb-[2.25rem]">
                <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-[0.9rem] pb-[0.5rem] border-b border-border">
                  Backend & Database
                </div>
                <div className="flex flex-wrap gap-[0.45rem]">
                  <TooltipChip label="Node.js" />
                  <TooltipChip label="Express" />
                  <TooltipChip label="MongoDB" />
                  <TooltipChip label="Firebase" />
                  <TooltipChip label="SQL" />
                </div>
              </div>

              <div className="mb-[2.25rem]">
                <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-[0.9rem] pb-[0.5rem] border-b border-border">
                  Tools & Languages
                </div>
                <div className="flex flex-wrap gap-[0.45rem]">
                  <TooltipChip label="Git / GitHub" />
                  <TooltipChip label="C++" tip="Competitive" />
                  <TooltipChip label="Java" />
                  <TooltipChip label="VS Code" />
                  <TooltipChip label="Vite" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
