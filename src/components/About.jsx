import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section className="py-[7rem] px-[2.5rem] border-b border-border" id="about">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-accent">
            01. About Me
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Identity &amp; <em className="italic text-accent">Approach</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start max-w-[1200px] mx-auto mt-16">
          {/* Left Column */}
          <Reveal delay={0.2} className="lg:sticky lg:top-32">
            <p className="font-sans text-[0.875rem] leading-[1.9] text-muted">
              I'm a BCA final-semester student from Raxaul, India — currently based in Kathmandu. I learned React under real deadline pressure at Lennobyte Solutions, where I was the sole frontend developer on a production e-commerce platform. That experience — building something real, fast, by myself — defines how I work.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {["React Developer", "TypeScript", "UI Engineering", "Production Shipped", "Self-taught", "Tailwind CSS"].map((tag) => (
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
            <div className="font-serif text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.42] text-text mb-[2.5rem] border-l-[3px] border-accent pl-[1.5rem]">
              "I believe great interfaces are invisible. The less a user has to think about how to use a product, the better the design. I spent 9 months as the only frontend developer on a live product. That means I know the difference between building a component and actually shipping one."
            </div>

            <p className="font-sans text-[0.95rem] leading-[1.88] text-muted mb-[1.75rem]">
              My core is the modern React ecosystem — clean, well-structured component trees, performance details like debounced API calls and optimistic UI, and careful attention to accessibility and responsive design. I don't just implement requirements; I ask why each interaction needs to exist.
            </p>
            <p className="font-sans text-[0.95rem] leading-[1.88] text-muted mb-[1.75rem]">
              I've built a doctor booking system, a personal finance PWA, an employee attendance platform, and a full e-commerce storefront. Each project taught me something different about building for real users under real constraints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[2.5rem] pt-[2.5rem] border-t border-border">
              <div>
                <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-accent mb-[0.3rem]">Status</div>
                <div className="font-sans text-[0.88rem] text-text font-medium">Open to Opportunities</div>
              </div>
              <div>
                <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-accent mb-[0.3rem]">Preferred Roles</div>
                <div className="font-sans text-[0.88rem] text-text font-medium">Frontend / React Dev</div>
              </div>
              <div>
                <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-accent mb-[0.3rem]">Target Markets</div>
                <div className="font-sans text-[0.88rem] text-text font-medium">India · Remote</div>
              </div>
              <div>
                <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-accent mb-[0.3rem]">Graduation</div>
                <div className="font-sans text-[0.88rem] text-text font-medium">BCA, TU — Jul 2026</div>
              </div>
              <div>
                <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-accent mb-[0.3rem]">GitHub</div>
                <div className="font-sans text-[0.88rem] text-text font-medium">
                  <a href="https://github.com/rohitsriv28" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.78rem] text-accent hover:underline">rohitsriv28 ↗</a>
                </div>
              </div>
              <div>
                <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-accent mb-[0.3rem]">LinkedIn</div>
                <div className="font-sans text-[0.88rem] text-text font-medium">
                  <a href="https://linkedin.com/in/rohitsriv28" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.78rem] text-accent hover:underline">rohitsriv28 ↗</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
