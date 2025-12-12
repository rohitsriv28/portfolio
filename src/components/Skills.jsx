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
      skills: [
        {
          name: "HTML",
          icon: <FontAwesomeIcon icon={faHtml5} />,
          progress: 85,
        },
        {
          name: "CSS",
          icon: <FontAwesomeIcon icon={faCss3} />,
          progress: 45,
        },
        {
          name: "JavaScript",
          icon: <FontAwesomeIcon icon={faJsSquare} />,
          progress: 35,
        },
        {
          name: "React",
          icon: <FontAwesomeIcon icon={faReact} />,
          progress: 30,
        },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        {
          name: "C",
          icon: <SiCplusplus size={25} />,
          progress: 40,
        },
        {
          name: "Java",
          icon: <FaJava />,
          progress: 40,
        },
      ],
    },
    {
      name: "Database Management",
      skills: [
        {
          name: "MySQL",
          icon: <FontAwesomeIcon icon={faDatabase} />,
          progress: 25,
        },
        {
          name: "Firebase",
          icon: <FontAwesomeIcon icon={faFireAlt} size="md" />,
          progress: 10,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={25} />,
          progress: 40,
        },
      ],
    },
    {
      name: "Software Tools",
      skills: [
        {
          name: "Git",
          icon: <FontAwesomeIcon icon={faGithub} />,
          progress: 30,
        },
        {
          name: "MS Word/Excel/PowerPoint",
          icon: <FontAwesomeIcon icon={faFileAlt} />,
          progress: 80,
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skill" className="relative py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Skills Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            SKILLS
            <div className="h-1 w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 mt-2 mx-auto rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-300 mt-4">My Technical Level</p>
        </div>

        {/* Skills Accordion */}
        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="mb-6 transform transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Accordion Header */}
              <div
                className="flex justify-between items-center p-5 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm bg-opacity-90 shadow-lg"
                onClick={() => handleToggle(index)}
              >
                <h4 className="flex items-center text-lg font-semibold">
                  <span className="mr-3 text-blue-400">
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                  {category.name}
                </h4>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`transition-transform duration-300 text-blue-400 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-b-lg shadow-inner border-t border-gray-700">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xl text-blue-400">
                            {skill.icon}
                          </span>
                          <span className="text-gray-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-300 font-medium">
                          {skill.progress}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
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
