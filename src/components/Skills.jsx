// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCaretDown,
//   faCode,
//   faDatabase,
//   faFileAlt,
//   faFireAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faHtml5,
//   faCss3,
//   faJsSquare,
//   faReact,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import { SiCplusplus, SiMongodb } from "react-icons/si";
// import { FaJava } from "react-icons/fa6";

// const Skills = () => {
//   const skillCategories = [
//     {
//       name: "Web Development",
//       icon: faCode,
//       skills: [
//         { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} />, progress: 85, color: "text-orange-500" },
//         { name: "CSS", icon: <FontAwesomeIcon icon={faCss3} />, progress: 80, color: "text-blue-500" },
//         { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} />, progress: 75, color: "text-yellow-500" },
//         { name: "React", icon: <FontAwesomeIcon icon={faReact} />, progress: 70, color: "text-cyan-500" },
//       ],
//     },
//     {
//       name: "Programming Languages",
//       icon: faCode,
//       skills: [
//         { name: "C", icon: <SiCplusplus size={25} />, progress: 60, color: "text-blue-600 dark:text-blue-400" },
//         { name: "Java", icon: <FaJava />, progress: 50, color: "text-red-500" },
//       ],
//     },
//     {
//       name: "Database Management",
//       icon: faDatabase,
//       skills: [
//         { name: "MySQL", icon: <FontAwesomeIcon icon={faDatabase} />, progress: 65, color: "text-blue-500" },
//         { name: "Firebase", icon: <FontAwesomeIcon icon={faFireAlt} />, progress: 40, color: "text-orange-500" },
//         { name: "MongoDB", icon: <SiMongodb size={25} />, progress: 55, color: "text-green-500" },
//       ],
//     },
//     {
//       name: "Software Tools",
//       icon: faFileAlt,
//       skills: [
//         { name: "Git", icon: <FontAwesomeIcon icon={faGithub} />, progress: 60, color: "text-slate-900 dark:text-white" },
//         { name: "Office", icon: <FontAwesomeIcon icon={faFileAlt} />, progress: 80, color: "text-blue-600 dark:text-blue-400" },
//       ],
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(0);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="skill" className="relative pt-8 pb-20 bg-slate-50 dark:bg-[#0A0F1C] overflow-hidden transition-colors duration-300">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header - Solid colors */}
//         <div className="text-center mb-16 space-y-4">
//           <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
//             <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">Technical Expertise</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
//             My Skills
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
//             A comprehensive overview of my technical abilities and proficiency levels.
//           </p>
//         </div>

//         {/* Skill Categories - Solid backgrounds */}
//         <div className="max-w-3xl mx-auto space-y-4">
//           {skillCategories.map((category, index) => (
//             <div
//               key={index}
//               className={`rounded-xl overflow-hidden transition-all duration-300 border ${openIndex === index
//                 ? 'border-indigo-500 bg-white dark:bg-gray-800 shadow-lg'
//                 : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-gray-900'
//                 }`}
//             >
//               <button
//                 onClick={() => handleToggle(index)}
//                 className="w-full flex justify-between items-center p-5 text-left transition-colors"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${openIndex === index
//                     ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
//                     : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
//                     }`}>
//                     <FontAwesomeIcon icon={category.icon} />
//                   </div>
//                   <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index
//                     ? 'text-slate-900 dark:text-white'
//                     : 'text-slate-700 dark:text-slate-300'
//                     }`}>
//                     {category.name}
//                   </span>
//                 </div>
//                 <FontAwesomeIcon
//                   icon={faCaretDown}
//                   className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-indigo-500" : ""
//                     }`}
//                 />
//               </button>

//               {/* Accordion Content */}
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//                   }`}
//               >
//                 <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700">
//                   <div className="grid gap-6 mt-4">
//                     {category.skills.map((skill, idx) => (
//                       <div key={idx} className="group">
//                         <div className="flex justify-between items-center mb-2">
//                           <div className="flex items-center gap-3">
//                             <span className={`text-xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
//                               {skill.icon}
//                             </span>
//                             <span className="text-slate-700 dark:text-slate-200 font-medium">
//                               {skill.name}
//                             </span>
//                           </div>
//                           <span className="text-slate-500 dark:text-slate-400 text-sm font-mono">
//                             {skill.progress}%
//                           </span>
//                         </div>
//                         {/* Progress Bar - Solid Indigo */}
//                         <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
//                           <div
//                             className="h-full rounded-full bg-indigo-500 transition-all duration-1000 ease-out"
//                             style={{ width: `${skill.progress}%` }}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
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
  const skills = [
    // Web
    {
      name: "HTML",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      context: "Semantic layouts",
      color: "text-orange-500",
      group: "Web Development",
    },
    {
      name: "CSS",
      icon: <FontAwesomeIcon icon={faCss3} />,
      context: "Responsive UI",
      color: "text-blue-500",
      group: "Web Development",
    },
    {
      name: "JavaScript",
      icon: <FontAwesomeIcon icon={faJsSquare} />,
      context: "ES6+ logic",
      color: "text-yellow-500",
      group: "Web Development",
    },
    {
      name: "React",
      icon: <FontAwesomeIcon icon={faReact} />,
      context: "SPA & hooks",
      color: "text-cyan-500",
      group: "Web Development",
    },

    // Programming
    {
      name: "C",
      icon: <SiCplusplus size={22} />,
      context: "Academic projects",
      color: "text-blue-600 dark:text-blue-400",
      group: "Programming",
    },
    {
      name: "Java",
      icon: <FaJava />,
      context: "OOP & DSA",
      color: "text-red-500",
      group: "Programming",
    },

    // Databases
    {
      name: "MySQL",
      icon: <FontAwesomeIcon icon={faDatabase} />,
      context: "Relational queries",
      color: "text-blue-500",
      group: "Database",
    },
    {
      name: "Firebase",
      icon: <FontAwesomeIcon icon={faFileAlt} />,
      context: "Auth & backend",
      color: "text-orange-500",
      group: "Database",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={22} />,
      context: "NoSQL basics",
      color: "text-green-500",
      group: "Database",
    },

    // Tools
    {
      name: "Git & GitHub",
      icon: <FontAwesomeIcon icon={faGithub} />,
      context: "Version control",
      color: "text-slate-900 dark:text-white",
      group: "Tools",
    },
    {
      name: "MS Office",
      icon: <FontAwesomeIcon icon={faFileAlt} />,
      context: "Docs & reports",
      color: "text-blue-600 dark:text-blue-400",
      group: "Tools",
    },
  ];

  return (
    <section
      id="skill"
      className="relative pt-8 pb-20 bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-900/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="p-4 flex items-start gap-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 truncate">
                      {skill.name}
                    </h3>
                    {/* subtle group label */}
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
