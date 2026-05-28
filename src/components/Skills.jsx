import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const SKILL_GROUPS = [
  {
    label: "Core Frontend",
    items: [
      { name: "React", tooltip: "Production — Gift Garden, SwiftCare, Expense Tracker", highlight: true },
      { name: "JavaScript ES6+", tooltip: "ES6+, async/await, closures, modules", highlight: true },
      { name: "TypeScript", tooltip: "Strict mode — Expense Tracker PWA", highlight: true },
      { name: "HTML5", tooltip: "Semantic, accessible markup" },
      { name: "CSS3", tooltip: "Responsive layouts, animations" },
      { name: "Tailwind CSS", tooltip: "Utility-first — all major projects" }
    ]
  },
  {
    label: "Libraries & Tooling",
    items: [
      { name: "Framer Motion", tooltip: "Smooth transitions — Gift Garden" },
      { name: "React Router DOM", tooltip: "Client-side routing, protected pages" },
      { name: "Axios", tooltip: "HTTP client with JWT interceptors" },
      { name: "React Hook Form", tooltip: "Form validation — Gift Garden checkout" },
      { name: "Zod", tooltip: "Schema validation — paired with RHF" },
      { name: "Recharts", tooltip: "Charts — SwiftCare admin, Expense Tracker" },
      { name: "Vite", tooltip: "Build tool — all recent projects" }
    ]
  },
  {
    label: "Backend & Services",
    items: [
      { name: "Firebase Auth", tooltip: "Auth flows, user sessions" },
      { name: "Firestore", tooltip: "Real-time data — Expense Tracker" },
      { name: "Node.js", tooltip: "TeraBox streaming service, backend APIs" },
      { name: "Express.js", tooltip: "REST API server — TeraBox project" },
      { name: "MongoDB", tooltip: "NoSQL data store — TeraBox, ChatApp" },
      { name: "REST APIs", tooltip: "Consumed in all frontend projects" },
      { name: "JWT Auth", tooltip: "Token refresh logic via Axios interceptors" }
    ]
  },
  {
    label: "Dev & Other Tools",
    items: [
      { name: "Git / GitHub", tooltip: "Daily driver — branching, PRs, collaboration" },
      { name: "Postman", tooltip: "API testing during Gift Garden integration" },
      { name: "VS Code", tooltip: "Primary editor" },
      { name: "Razorpay", tooltip: "Payment integration — SwiftCare" },
      { name: "Cloudinary", tooltip: "Media storage — TeraBox streaming" }
    ]
  },
  {
    label: "Languages",
    items: [
      { name: "Java", tooltip: "OOP, DSA coursework" },
      { name: "C / C++", tooltip: "Academic / algorithmic problems" },
      { name: "SQL", tooltip: "Queries, joins, subqueries" },
      { name: "Kotlin (basics)", tooltip: "Android internship — Lennobyte" }
    ]
  }
];

const Chip = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const transitionDuration = shouldReduceMotion ? 0 : 0.18;

  const baseClasses = "relative font-mono text-[0.7rem] tracking-[0.03em] px-[0.95rem] py-[0.42rem] border transition-colors cursor-default ";
  const highlightClasses = "bg-[rgba(61,189,181,0.12)] border-[rgba(61,189,181,0.5)] text-accent ";
  const standardClasses = "bg-transparent border-border text-muted hover:bg-card hover:border-[rgba(61,189,181,0.4)] hover:text-text ";

  return (
    <div 
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={baseClasses + (item.highlight ? highlightClasses : standardClasses)}>
        {item.name}
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: transitionDuration }}
            className="absolute bottom-[calc(100%+8px)] z-10 pointer-events-none flex flex-col items-center"
          >
            <div className="bg-card border border-border text-text font-mono text-[0.56rem] tracking-[0.05em] whitespace-nowrap px-[0.65rem] py-[0.3rem]">
              {item.tooltip}
            </div>
            {/* Tooltip triangle */}
            <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-border absolute top-full left-1/2 -translate-x-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-28 px-10 border-b border-border bg-surface" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 items-start max-w-[1200px] mx-auto mt-16">
        
        {/* Left Column */}
        <div className="lg:sticky lg:top-32">
          <Reveal>
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-px before:bg-accent">
              Technical Stack
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
              What I<br /><em className="italic text-accent">Build With</em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-[0.875rem] leading-[1.88] text-muted mt-6">
              My core is the modern React ecosystem. Equally comfortable at the component architecture level and in the fine details of animation and performance. Working backend knowledge for full-stack integration context.
            </p>
          </Reveal>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-9 mt-2 lg:mt-0">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.label} delay={0.2 + (groupIndex * 0.1)}>
              <div className="mb-2">
                <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-3.5 pb-2 border-b border-border">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <Chip key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
