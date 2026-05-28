import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Top Part - Closing Statement */}
      <div className="bg-surface border-t border-border py-10 px-10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[2.5rem] text-text leading-none mb-3">
            Code. Ship. Repeat.
          </h2>
          <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-accent/80">
            // Frontend Developer
          </div>
        </div>
      </div>

      {/* Bottom Part - Slim Bar */}
      <div className="bg-surface border-t border-border py-7 px-10 flex flex-wrap gap-4 items-center justify-between">
        <div className="font-mono text-[0.6rem] tracking-[0.1em] text-muted opacity-35">
          © {currentYear} Rohit Raj Srivastava · Built with React · Deployed on Vercel
        </div>

        <div className="flex gap-6 items-center">
          <a 
            href="https://linkedin.com/in/rohitsriv28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/rohitsriv28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com/rohitsriv28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
          >
            Twitter
          </a>
          <a 
            href="mailto:rohitraj2002ind@gmail.com"
            className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
