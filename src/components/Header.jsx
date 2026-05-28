import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import img from "@assets/Gemini_Generated_My_Image.png";

const Header = () => {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1];
  const currentYear = new Date().getFullYear();

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: shouldReduceMotion ? 0 : 0.4, duration: shouldReduceMotion ? 0 : 0.75, ease },
    },
  };

  return (
    <header id="main" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 border-b border-border pt-16">
      {/* Left Column */}
      <motion.div
        className="flex flex-col justify-center py-24 pl-10 pr-12 lg:border-r lg:border-border"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease }}>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-px before:bg-accent">
            Available for Work — {currentYear}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease }}>
          <h1 className="font-serif text-[clamp(3.2rem,6.5vw,5.75rem)] leading-[1.0] tracking-[-0.03em] text-text mb-8">
            Rohit Raj<br />
            <em className="italic text-accent">Srivastava</em>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease }}>
          <p className="font-sans text-base leading-[1.8] text-muted max-w-[38ch] mb-12">
            Frontend developer who builds production-grade React interfaces.
            9+ months shipping real product at Lennobyte Solutions.
            Currently seeking Frontend and React Developer roles.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.75, ease }}>
          <div className="flex items-center gap-7 flex-wrap">
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset, behavior: "smooth" });
              }}
              className="font-mono text-[0.72rem] tracking-[0.08em] uppercase bg-accent text-bg px-5 py-2 border border-accent inline-flex items-center gap-2 transition-colors duration-200 hover:bg-transparent hover:text-accent cursor-pointer group"
            >
              View My Work
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <a href="/resume.pdf" className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-muted py-2 border-b border-border transition-colors duration-200 hover:text-text hover:border-muted inline-flex items-center gap-2">
              Download Resume <Download size={12} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="relative flex flex-col justify-end overflow-hidden bg-surface group hidden lg:flex"
        variants={rightPanelVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={img}
          alt="Rohit Raj Srivastava"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-[0.72] grayscale z-0"
          whileHover={{ scale: 1.025, opacity: 0.85 }}
          transition={{ duration: 0.4, ease }}
        />

        {/* Gradient tint overlay (4 stops per requirements) */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(to bottom, rgba(14,15,19,0.35) 0%, rgba(14,15,19,0.05) 35%, rgba(14,15,19,0.60) 75%, rgba(14,15,19,0.88) 100%)'
          }}
        />

        {/* Teal accent bar */}
        <div className="absolute left-0 top-0 w-[3px] h-full bg-accent opacity-90 z-[2]" />

        {/* Corner labels */}
        <div 
          className="absolute top-7 left-6 z-[3] font-mono text-[0.55rem] tracking-[0.16em] uppercase text-accent"
          style={{ writingMode: 'vertical-rl', textShadow: '0 1px 10px rgba(0,0,0,0.95)' }}
        >
          Portfolio — {currentYear}
        </div>

        {/* Stats strip */}
        <div className="relative z-[3] px-10 py-7 border-t border-[rgba(34,37,46,0.9)] bg-[rgba(14,15,19,0.6)] backdrop-blur-sm grid grid-cols-3 gap-5">
          <div>
            <div className="font-serif text-[1.5rem] text-text leading-none">9+</div>
            <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted mt-1">Months Production</div>
          </div>
          <div>
            <div className="font-serif text-[1.5rem] text-text leading-none">8+</div>
            <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted mt-1">Projects Shipped</div>
          </div>
          <div>
            <div className="font-serif text-[1.5rem] text-text leading-none">1</div>
            <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted mt-1">Live E-commerce</div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
