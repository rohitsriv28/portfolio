import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Qualifications = () => {
  const education = [
    {
      title: "BCA",
      subtitle: "National Infotech College (TU)",
      date: "2021 - Present",
      link: "https://nationalinfotechcollege.edu.np/"
    },
    {
      title: "+2 Science",
      subtitle: "Raja Ram Shah College (BSEB)",
      date: "2019 - 2021"
    },
  ];

  const experience = [
    {
      title: "Front-End Developer Intern",
      subtitle: "Lennobyte Solutions",
      date: "May 2024 - Sept 2024",
      link: "http://lennobyte.com/"
    },
    {
      title: "Android Developer Intern",
      subtitle: "Lennobyte Solutions",
      date: "Dec 2023 - Apr 2024",
      link: "http://lennobyte.com/"
    },
  ];

  return (
    <section
      id="qualification"
      className="pt-8 pb-20 bg-slate-50 dark:bg-[#0A0F1C] relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
            Qualification
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My academic and professional experiences that have shaped my skills and knowledge
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800 space-y-6">
              {education.map((item, index) => (
                <TimelineCard key={index} {...item} accent="indigo" />
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <FontAwesomeIcon icon={faBriefcase} className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-cyan-200 dark:border-cyan-800 space-y-6">
              {experience.map((item, index) => (
                <TimelineCard key={index} {...item} accent="cyan" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ title, subtitle, date, link, accent = "indigo" }) => {
  const dotColor = accent === "cyan" ? "bg-cyan-500" : "bg-indigo-500";
  const hoverBorder = accent === "cyan" ? "hover:border-cyan-500" : "hover:border-indigo-500";
  const subtitleColor = accent === "cyan" ? "text-cyan-600 dark:text-cyan-400" : "text-indigo-600 dark:text-indigo-400";
  const iconColor = accent === "cyan" ? "text-cyan-400" : "text-indigo-400";

  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className={`absolute -left-[25px] top-6 w-3 h-3 rounded-full ${dotColor} ring-4 ring-white dark:ring-gray-900`}></div>

      {/* Card */}
      <div className={`bg-white dark:bg-gray-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300 ${hoverBorder} hover:-translate-y-1`}>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
        <p className={`${subtitleColor} mb-2 font-medium`}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {subtitle}
            </a>
          ) : subtitle}
        </p>
        <div className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
          <FontAwesomeIcon icon={faCalendarDays} className={iconColor} />
          {date}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
