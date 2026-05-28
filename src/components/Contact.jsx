import React from "react";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const INFO_ROWS = [
    { label: "Location", value: "India · Remote", link: null },
    { label: "LinkedIn", value: "rohitsriv28", link: "https://linkedin.com/in/rohitsriv28" },
    { label: "GitHub", value: "rohitsriv28", link: "https://github.com/rohitsriv28" },
    { label: "Preferred Roles", value: "Frontend Developer · React Developer", link: null },
    { label: "Work Type", value: "Full-time · Contract · Remote", link: null },
    { label: "Response Time", value: "Within 12 hours", link: null }
  ];

  return (
    <section className="py-28 px-10 border-b border-border" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mt-16">
        
        {/* Left Column */}
        <div>
          <Reveal>
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-px before:bg-accent">
              Contact
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
              Let's <em className="italic text-accent">Talk</em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-[1rem] leading-[1.82] text-muted mt-6 max-w-[38ch]">
              I'm actively looking for Frontend and React Developer roles across India or remote. If you're hiring or want to collaborate on something interesting, reach out.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 mb-10">
              <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted/50 mb-1.5">
                Email
              </div>
              <a 
                href="mailto:rohitraj2002ind@gmail.com" 
                className="font-serif text-[clamp(1.15rem,2vw,1.55rem)] text-text transition-colors duration-200 hover:text-accent break-all"
              >
                rohitraj2002ind@gmail.com
              </a>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <a 
                href="mailto:rohitraj2002ind@gmail.com"
                className="font-mono text-[0.7rem] tracking-[0.08em] uppercase bg-accent text-bg px-8 py-3.5 border border-accent inline-flex items-center gap-2 transition-colors duration-200 hover:bg-transparent hover:text-accent group"
              >
                Send an Email ↗
              </a>
              <a 
                href="https://linkedin.com/in/rohitsriv28"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.7rem] tracking-[0.08em] uppercase bg-transparent text-muted px-8 py-3.5 border border-border transition-colors duration-200 hover:border-muted hover:text-text"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column (Info Table) */}
        <Reveal delay={0.4}>
          <div className="border border-border flex flex-col">
            {INFO_ROWS.map((row, idx) => {
              const isLast = idx === INFO_ROWS.length - 1;
              return (
                <div 
                  key={row.label} 
                  className={`p-[1.4rem] transition-colors duration-150 hover:bg-[rgba(255,255,255,0.015)] ${!isLast ? "border-b border-border" : ""}`}
                >
                  <div className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-muted/50 mb-1">
                    {row.label}
                  </div>
                  <div className="font-sans text-[0.88rem] text-text">
                    {row.link ? (
                      <a 
                        href={row.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-colors duration-200 hover:text-accent flex items-center gap-1 w-fit"
                      >
                        {row.value} <ArrowUpRight size={14} className="opacity-70" />
                      </a>
                    ) : (
                      row.value
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;