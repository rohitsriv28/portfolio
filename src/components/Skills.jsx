import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCode,
  faDatabase,
  faFileAlt,
  faFireAlt,
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
  const skillCategories = [
    {
      name: "Web Development",
      icon: faCode,
      skills: [
        { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} />, progress: 85, color: "text-orange-500" },
        { name: "CSS", icon: <FontAwesomeIcon icon={faCss3} />, progress: 80, color: "text-blue-500" },
        { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} />, progress: 75, color: "text-yellow-400" },
        { name: "React", icon: <FontAwesomeIcon icon={faReact} />, progress: 70, color: "text-cyan-400" },
      ],
    },
    {
      name: "Programming Languages",
      icon: faCode,
      skills: [
        { name: "C", icon: <SiCplusplus size={25} />, progress: 60, color: "text-blue-600" },
        { name: "Java", icon: <FaJava />, progress: 50, color: "text-red-500" },
      ],
    },
    {
      name: "Database Management",
      icon: faDatabase,
      skills: [
        { name: "MySQL", icon: <FontAwesomeIcon icon={faDatabase} />, progress: 65, color: "text-blue-400" },
        { name: "Firebase", icon: <FontAwesomeIcon icon={faFireAlt} />, progress: 40, color: "text-orange-400" },
        { name: "MongoDB", icon: <SiMongodb size={25} />, progress: 55, color: "text-green-500" },
      ],
    },
    {
      name: "Software Tools",
      icon: faFileAlt,
      skills: [
        { name: "Git", icon: <FontAwesomeIcon icon={faGithub} />, progress: 60, color: "text-white" },
        { name: "Office", icon: <FontAwesomeIcon icon={faFileAlt} />, progress: 80, color: "text-blue-300" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skill" className="relative pt-8 pb-20 bg-slate-50 dark:bg-transparent overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-pink-400">
            My Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
             A comprehensive overview of my technical abilities and proficiency levels.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
           {skillCategories.map((category, index) => (
             <div
               key={index}
               className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                 openIndex === index 
                   ? 'border-indigo-500/50 shadow-lg bg-white dark:bg-white/10' 
                   : 'border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/5 bg-white dark:bg-slate-900/40'
               }`}
             >
               <button
                 onClick={() => handleToggle(index)}
                 className="w-full flex justify-between items-center p-5 text-left transition-colors"
               >
                 <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index 
                        ? 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' 
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                    }`}>
                       <FontAwesomeIcon icon={category.icon} />
                    </div>
                    <span className={`text-lg font-semibold transition-colors duration-300 ${
                      openIndex === index 
                        ? 'text-slate-900 dark:text-white' 
                        : 'text-slate-700 dark:text-slate-300'
                    }`}>
                       {category.name}
                    </span>
                 </div>
                 <FontAwesomeIcon
                   icon={faCaretDown}
                   className={`text-slate-400 transition-transform duration-300 ${
                     openIndex === index ? "rotate-180 text-indigo-500" : ""
                   }`}
                 />
               </button>

               {/* Standard Accordion Content */}
               <div
                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
                   openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                 }`}
               >
                 <div className="p-6 pt-0 border-t border-slate-100 dark:border-white/5">
                    <div className="grid gap-6 mt-4">
                       {category.skills.map((skill, idx) => (
                          <div key={idx} className="group">
                             <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-3">
                                   <span className={`text-xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                                      {skill.icon}
                                   </span>
                                   <span className="text-slate-700 dark:text-slate-200 font-medium">
                                      {skill.name}
                                   </span>
                                </div>
                                <span className="text-slate-500 dark:text-slate-400 text-sm font-mono">
                                   {skill.progress}%
                                </span>
                             </div>
                             {/* Progress Bar */}
                             <div className="h-2 w-full bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                                <div
                                   className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden transition-all duration-1000 ease-out"
                                   style={{ width: `${skill.progress}%` }}
                                >
                                   <div className="absolute inset-0 bg-white/20 animate-subtle-shimmer"></div>
                                </div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
