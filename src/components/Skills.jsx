import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} />, context: "Semantic layouts", color: "text-orange-500", group: "Web Development" },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss3} />, context: "Responsive UI", color: "text-blue-500", group: "Web Development" },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} />, context: "ES6+ logic", color: "text-yellow-500", group: "Web Development" },
    { name: "React", icon: <FontAwesomeIcon icon={faReact} />, context: "SPA & hooks", color: "text-cyan-500", group: "Web Development" },

    { name: "C", icon: <SiCplusplus size={22} />, context: "Academic projects", color: "text-blue-600 dark:text-blue-400", group: "Programming" },
    { name: "Java", icon: <FaJava />, context: "OOP & DSA", color: "text-red-500", group: "Programming" },

    { name: "MySQL", icon: <FontAwesomeIcon icon={faDatabase} />, context: "Relational queries", color: "text-blue-500", group: "Database" },
    { name: "Firebase", icon: <FontAwesomeIcon icon={faFileAlt} />, context: "Auth & backend", color: "text-orange-500", group: "Database" },
    { name: "MongoDB", icon: <SiMongodb size={22} />, context: "NoSQL basics", color: "text-green-500", group: "Database" },

    { name: "Git & GitHub", icon: <FontAwesomeIcon icon={faGithub} />, context: "Version control", color: "text-slate-900 dark:text-white", group: "Tools" },
    { name: "MS Office", icon: <FontAwesomeIcon icon={faFileAlt} />, context: "Docs & reports", color: "text-blue-600 dark:text-blue-400", group: "Tools" },
  ];

  const VISIBLE_COUNT = 5;
  const visibleSkills = showAll ? skills : skills.slice(0, VISIBLE_COUNT);

  return (
    <section id="skill" className="relative pt-8 pb-20 bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
              Technical Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            My Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            A quick overview of the tools and technologies I use in my projects.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Visible Skills */}
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-900/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 truncate">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {skill.group}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {skill.context}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* View All card (same row as 5th skill) */}
          {!showAll && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="
                            text-indigo-600 dark:text-indigo-400
                            font-semibold
                            text-sm sm:text-base
                            hover:text-indigo-700 dark:hover:text-indigo-300
                            flex items-center gap-1
                            transition-all
                          "
              >
                View All
                <span className="text-lg">›</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Skills;
