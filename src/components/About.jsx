import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section className="py-28 px-10 border-b border-border bg-surface" id="about">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-px before:bg-accent">
            About
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Identity &amp; <br /><em className="italic text-accent">Approach</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start max-w-[1200px] mx-auto mt-16">
          {/* Left Column */}
          <Reveal delay={0.2}>
            <p className="font-sans text-[0.9rem] leading-[1.95] text-muted">
              I'm a BCA final-semester student from Raxaul, India.
              I learned React under real deadline pressure at Lennobyte Solutions, where I was the
              sole frontend developer on a production e-commerce platform. That experience —
              building something real, fast, by myself — defines how I work.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {["React Developer", "TypeScript", "UI Engineering", "TailwindCSS", "Production Shipped", "Self-taught"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.62rem] tracking-[0.08em] uppercase px-[0.85rem] py-[0.35rem] border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-text cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Right Column */}
          <Reveal delay={0.3}>
            <blockquote className="font-serif text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.42] text-text mb-10 border-l-[3px] border-accent pl-6">
              "I was the only frontend developer on a production platform. Not a prototype — a live product with real users. That context shapes every technical decision I make."
            </blockquote>

            <p className="font-sans text-[0.95rem] leading-[1.88] text-muted mb-7">
              My core is the modern React ecosystem — clean, well-structured component trees,
              performance details like debounced API calls and optimistic UI, and careful
              attention to accessibility and responsive design. I don't just implement
              requirements; I ask why each interaction needs to exist.
            </p>

            <p className="font-sans text-[0.95rem] leading-[1.88] text-muted mb-7">
              I've built a doctor booking system, a personal finance PWA, an employee attendance
              platform, and a full e-commerce storefront. Each project taught me something
              different about building for real users under real constraints.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
