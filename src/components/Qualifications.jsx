import React from "react";
import Reveal from "./Reveal";

const Qualifications = () => {
  return (
    <section className="py-[7rem] px-[2.5rem] border-b border-border" id="qualification">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-accent">
            02. Path
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Experience &amp; <em className="italic text-accent">Education</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mt-16 max-w-[1200px]">
            {/* Left col: Experience */}
            <div className="md:border-r md:border-border md:pr-16">
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-faint pb-6 border-b border-border mb-8">
                Professional
              </div>

              <div className="mb-10 pb-10 border-b border-border-soft">
                <div className="font-mono text-[0.62rem] tracking-[0.1em] text-accent mb-[0.55rem]">
                  Dec 2023 — Sept 2024
                </div>
                <div className="font-serif text-[1.2rem] text-text mb-[0.2rem] leading-[1.3]">
                  Frontend Developer Intern
                </div>
                <div className="font-mono text-[0.7rem] text-muted mb-[0.75rem] tracking-[0.05em]">
                  Lennobyte Solutions · Birgunj, Nepal
                </div>
                <p className="font-sans text-[0.84rem] leading-[1.82] text-[rgba(124,128,145,0.9)]">
                  Sole frontend developer on Gift Garden — a production e-commerce platform. Delivered the complete UI independently within 3 months using React, Tailwind CSS, and Framer Motion. Implemented Axios interceptors with JWT refresh logic, cart management with debounced API sync, and optimistic UI with automatic rollback on error.
                </p>
                <div className="inline-block mt-[0.75rem] font-mono text-[0.58rem] tracking-[0.1em] uppercase px-[0.6rem] py-[0.2rem] border border-accent text-accent">
                  Production · Sole Dev
                </div>
              </div>

              <div className="mb-10 pb-10 border-b-0">
                <div className="font-mono text-[0.62rem] tracking-[0.1em] text-accent mb-[0.55rem]">
                  Dec 2023 — Apr 2024
                </div>
                <div className="font-serif text-[1.2rem] text-text mb-[0.2rem] leading-[1.3]">
                  Android Developer Intern
                </div>
                <div className="font-mono text-[0.7rem] text-muted mb-[0.75rem] tracking-[0.05em]">
                  Lennobyte Solutions · Birgunj, Nepal
                </div>
                <p className="font-sans text-[0.84rem] leading-[1.82] text-[rgba(124,128,145,0.9)]">
                  Started as Android/Kotlin developer before pivoting to frontend mid-internship. Demonstrated the adaptability to self-teach and deliver production-ready work in a new stack within the same engagement.
                </p>
                <div className="inline-block mt-[0.75rem] font-mono text-[0.58rem] tracking-[0.1em] uppercase px-[0.6rem] py-[0.2rem] border border-[rgba(124,128,145,0.4)] text-muted">
                  Android · Kotlin
                </div>
              </div>
            </div>

            {/* Right col: Education */}
            <div className="md:pl-16">
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-faint pb-6 border-b border-border mb-8">
                Education
              </div>

              <div className="mb-10 pb-10 border-b border-border-soft">
                <div className="font-mono text-[0.62rem] tracking-[0.1em] text-accent mb-[0.55rem]">
                  Mar 2022 — Present
                </div>
                <div className="font-serif text-[1.2rem] text-text mb-[0.2rem] leading-[1.3]">
                  Bachelor of Computer Applications
                </div>
                <div className="font-mono text-[0.7rem] text-muted mb-[0.75rem] tracking-[0.05em]">
                  National Infotech College · Tribhuvan University
                </div>
                <p className="font-sans text-[0.84rem] leading-[1.82] text-[rgba(124,128,145,0.9)]">
                  Final semester. Relevant coursework: Web Development, DBMS, Software Engineering, Data Structures & Algorithms, Java. Operational Lead of the college IT Club. Winner of Ideathon 2024. Conducted a 3-day HTML/CSS/JS mentoring workshop for juniors.
                </p>
                <div className="inline-block mt-[0.75rem] font-mono text-[0.58rem] tracking-[0.1em] uppercase px-[0.6rem] py-[0.2rem] border border-accent text-accent">
                  Expected Jul–Oct 2026
                </div>
              </div>

              <div className="mb-10 pb-10 border-b-0">
                <div className="font-mono text-[0.62rem] tracking-[0.1em] text-accent mb-[0.55rem]">
                  2019 — 2021
                </div>
                <div className="font-serif text-[1.2rem] text-text mb-[0.2rem] leading-[1.3]">
                  +2 Science
                </div>
                <div className="font-mono text-[0.7rem] text-muted mb-[0.75rem] tracking-[0.05em]">
                  Raja Ram Shah College · BSEB
                </div>
                <p className="font-sans text-[0.84rem] leading-[1.82] text-[rgba(124,128,145,0.9)]">
                  Science stream with a foundation in mathematics and analytical thinking that continues to inform both engineering decisions and problem-solving approach.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Qualifications;
