import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, Globe, Zap } from "lucide-react";
import img from "@assets/Gemini_Generated_My_Image.png";

const Header = () => {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.4,
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <header id="main" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 border-b border-border pt-[4rem]">
      {/* Left Column */}
      <motion.div
        className="flex flex-col justify-center p-[6rem_2.5rem] lg:p-[6rem_3rem_6rem_2.5rem] border-r border-border"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:inline-block before:w-[28px] before:h-[1px] before:bg-accent">
            Available for Work — 2026
          </div>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="font-serif text-[clamp(3.2rem,6.5vw,5.75rem)] leading-[1.02] tracking-[-0.025em] text-text mb-8">
            Rohit Raj<br />
            <em className="italic text-accent">Srivastava</em>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
          <p className="font-sans text-[1rem] leading-[1.8] text-muted max-w-[38ch] mb-12">
            Frontend Developer with internship experience building production-grade web applications. Currently seeking Frontend and React Developer roles.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-7 flex-wrap">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="font-mono text-[0.72rem] tracking-[0.08em] uppercase bg-accent text-bg px-8 py-3.5 border border-accent transition-colors duration-200 inline-flex items-center gap-2 hover:bg-transparent hover:text-accent group"
            >
              View My Work
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </button>
            <a href="/resume" className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-muted py-3.5 border-b border-border transition-colors duration-200 hover:text-text hover:border-muted inline-flex items-center gap-2">
              Download Resume <Download size={12} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="relative flex flex-col justify-end overflow-hidden bg-surface group min-h-[500px] lg:min-h-auto"
        variants={rightPanelVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={img}
          alt="Rohit Raj Srivastava"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-75 grayscale-[18%] transition-all duration-700 ease-custom-out group-hover:scale-[1.025] group-hover:opacity-80"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(14,15,19,0.22)] from-0% via-[rgba(14,15,19,0.08)] via-40% to-[rgba(14,15,19,0.82)] to-100%"></div>
        <div className="absolute left-0 top-0 w-[3px] h-full bg-accent opacity-90 z-[2]"></div>

        <div className="absolute top-7 left-6 z-[3] font-mono text-[0.55rem] tracking-[0.16em] uppercase text-[rgba(232,233,238,0.95)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-[rgba(14,15,19,0.3)] backdrop-blur-sm px-2.5 py-1.5 rounded-sm flex items-center gap-1.5">
          <Globe size={10} className="text-accent" /> India · Remote (India, Global)
        </div>
        <div className="hidden md:flex absolute top-7 right-7 z-[3] font-mono text-[0.55rem] tracking-[0.16em] uppercase text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-[rgba(14,15,19,0.3)] backdrop-blur-sm px-2.5 py-1.5 rounded-sm items-center gap-1.5">
          <Zap size={10} /> Frontend · React · TypeScript
        </div>

        <div className="relative z-[3] p-[1.75rem_2.5rem] border-t border-[rgba(34,37,46,0.9)] bg-[rgba(14,15,19,0.6)] backdrop-blur-[8px] grid grid-cols-2 md:grid-cols-3 gap-5">
          <div>
            <div className="font-serif text-[1.5rem] text-text leading-[1]">9+</div>
            <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted mt-1">Months Production</div>
          </div>
          <div>
            <div className="font-serif text-[1.5rem] text-text leading-[1]">8+</div>
            <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted mt-1">Projects Shipped</div>
          </div>
          <div>
            <div className="font-serif text-[1.5rem] text-text leading-[1]">∞</div>
            <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted mt-1">Curiosity</div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
