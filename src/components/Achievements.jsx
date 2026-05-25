import React from "react";
import Reveal from "./Reveal";
import { Trophy, Settings, Award } from "lucide-react";

const Achievements = () => {
  const achievementsData = [
    {
      icon: <Trophy size={20} strokeWidth={1.5} />,
      meta: "Competition · 2024",
      title: "Ideathon Winner",
      desc: "Won college-wide Ideathon 2024 at National Infotech College, competing against teams across all semesters to present the best problem-solution concept. Demonstrated the ability to think from first principles and communicate technical ideas clearly.",
    },
    {
      icon: <Settings size={20} strokeWidth={1.5} />,
      meta: "Leadership · Oct 2025 – May 2026",
      title: "Operational Lead — IT Club",
      desc: "Overseeing events, technical initiatives, and member coordination for the National Infotech IT Club. Planning and executing the club's activities and ensuring smooth inter-semester collaboration between students.",
    },
    {
      icon: <Award size={20} strokeWidth={1.5} />,
      meta: "Mentorship · 2024",
      title: "Workshop Mentor — Web Dev",
      desc: "Conducted a 3-day workshop on HTML, CSS, JavaScript, and semantic web design for junior students. Designed the curriculum, led live coding sessions, and answered technical questions — reinforcing both expertise and teaching ability.",
    },
  ];

  return (
    <section className="py-[7rem] px-[2.5rem] border-b border-border" id="achievements">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-accent">
            Recognition
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Beyond <em className="italic text-accent">The Code</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-16">
            {achievementsData.map((item, index) => (
              <div
                key={index}
                className="bg-surface p-[2.25rem] flex flex-col gap-[0.85rem] transition-colors duration-200 relative overflow-hidden hover:bg-card border border-border group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 ease-custom-out group-hover:scale-x-100"></div>
                <div className="w-[38px] h-[38px] border border-border flex items-center justify-center text-[1rem] shrink-0 mb-[0.85rem]">
                  {item.icon}
                </div>
                <div className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-accent mb-1">
                  {item.meta}
                </div>
                <div className="font-serif text-[1.15rem] text-text leading-[1.25]">
                  {item.title}
                </div>
                <div className="font-sans text-[0.82rem] text-muted leading-[1.82] mt-2 flex-grow">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Achievements;
