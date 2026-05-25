import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg pt-[6rem] pb-[3rem]">
      <div className="max-w-[1200px] mx-auto px-[2.5rem]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[5rem] gap-10">
          <div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-[-0.02em] text-text mb-4">
              Let's build<br />
              <em className="italic text-accent">together.</em>
            </h2>
            <a 
              href="mailto:rohitraj2002ind@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-[0.85rem] text-muted hover:text-accent transition-colors duration-300 border-b border-border hover:border-accent pb-1 mt-4 group"
            >
              rohitraj2002ind@gmail.com 
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-8">
            <a href="https://github.com/rohitsriv28" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted hover:text-accent transition-colors duration-300 pb-1 border-b border-transparent hover:border-accent">
              GitHub
            </a>
            <a href="https://linkedin.com/in/rohitsriv28" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted hover:text-accent transition-colors duration-300 pb-1 border-b border-transparent hover:border-accent">
              LinkedIn
            </a>
            <a href="https://twitter.com/_i_rohit28" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted hover:text-accent transition-colors duration-300 pb-1 border-b border-transparent hover:border-accent">
              Twitter
            </a>
            <a href="mailto:rohitraj2002ind@gmail.com" className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted hover:text-accent transition-colors duration-300 pb-1 border-b border-transparent hover:border-accent md:hidden">
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-soft font-mono text-[0.6rem] tracking-[0.1em] text-[rgba(124,128,145,0.6)] uppercase text-center md:text-left gap-4">
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Rohit Raj Srivastava</span>
          </div>
          <p>India · Remote (Global)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
