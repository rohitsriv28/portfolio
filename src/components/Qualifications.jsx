import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Qualifications = () => {
  const [selected, setSelected] = useState("edu");

  const change = (selected) => {
    setSelected(selected);
  };

  return (
    <section
      id="qualification"
      className="pt-8 pb-20 bg-slate-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300"
    >
      {/* Add a subtle overlay to improve text readability over the shapes */}
      <div className="absolute inset-0 bg-white/50 dark:bg-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Qualification Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded bg-purple-100 dark:bg-emerald-800/30 text-purple-600 dark:text-emerald-300 text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Qualification
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic and professional experiences that have shaped my skills
            and knowledge
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center ${
              selected === "edu"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-700 border border-slate-200 dark:border-transparent"
            }`}
            onClick={() => change("edu")}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            Education
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center ${
              selected === "work"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-700 border border-slate-200 dark:border-transparent"
            }`}
            onClick={() => change("work")}
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Work
          </button>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-transparent dark:from-blue-600 dark:via-blue-500"></div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {/* Education Content */}
            {selected === "edu" && (
              <div>
                <TimelineItem 
                  title="BCA" 
                  subtitle="National Infotech College (TU)" 
                  date="2021 - Present" 
                  link="https://nationalinfotechcollege.edu.np/"
                  side="left"
                />
                <TimelineItem 
                  title="+2 Science" 
                  subtitle="Raja Ram Shah College (BSEB)" 
                  date="2019 - 2021" 
                  side="right"
                />
              </div>
            )}

            {/* Work Content */}
            {selected === "work" && (
              <div>

          {/* Work Timeline */}
                <TimelineItem 
                  title="Front-End Developer Intern" 
                  subtitle="Lennobyte Solutions" 
                  date="May 2024 - Sept 2024" 
                  link="http://lennobyte.com/"
                  side="left"
                />
                <TimelineItem 
                  title="Android Developer Intern" 
                  subtitle="Lennobyte Solutions" 
                  date="Dec 2023 - Apr 2024" 
                  link="http://lennobyte.com/"
                  side="right"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, subtitle, date, link, side }) => {
  const isLeft = side === "left";
  
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-8 mb-8 md:mb-0 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
       <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
          <div className="bg-white dark:bg-white/5 p-6 rounded-xl hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
             <p className="text-indigo-600 dark:text-indigo-300 mb-2 font-medium">
                {link ? (
                   <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {subtitle}
                   </a>
                ) : subtitle}
             </p>
             <div className={`text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                <FontAwesomeIcon icon={faCalendarDays} />
                {date}
             </div>
          </div>
       </div>
       
       <div className="relative flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10 relative">
             <div className="absolute inset-0 bg-indigo-400 rounded-full opacity-0"></div>
          </div>
       </div>
       
       <div className="w-full md:w-5/12"></div>
    </div>
  );
};

export default Qualifications;
