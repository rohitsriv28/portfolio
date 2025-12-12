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
      className="py-20 text-white relative overflow-hidden"
    >
      {/* Add a subtle overlay to improve text readability over the shapes */}
      <div className="absolute inset-0 opacity-70"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Qualification Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded bg-emerald-800 bg-opacity-15 text-emerald-300 text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Qualification
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic and professional experiences that have shaped my skills
            and knowledge
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center ${
              selected === "edu"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => change("edu")}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            Education
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center ${
              selected === "work"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
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
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-500 to-transparent"></div>

          {/* Education Timeline */}
          <div
            className={`space-y-16 ${selected === "edu" ? "block" : "hidden"}`}
          >
            {/* BCA */}
            <div className="flex items-start gap-8">
              <div className="flex-1 text-right">
                <h3 className="text-2xl font-bold">BCA</h3>
                <p className="text-gray-400">
                  <a
                    href="https://nationalinfotechcollege.edu.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    National Infotech College (TU)
                  </a>
                </p>
                <p className="text-gray-400 mt-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  2021 - Present
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-2.5 w-5 h-5 bg-blue-600 rounded-full shadow-md shadow-blue-500/50"></div>
              </div>
              <div className="flex-1"></div>
            </div>

            {/* +2 Science */}
            <div className="flex items-start gap-8">
              <div className="flex-1"></div>
              <div className="relative">
                <div className="absolute -left-2.5 w-5 h-5 bg-blue-600 rounded-full shadow-md shadow-blue-500/50"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">+2 Science</h3>
                <p className="text-gray-400">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Raja Ram Shah College (BSEB)
                  </a>
                </p>
                <p className="text-gray-400 mt-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  2019 - 2021
                </p>
              </div>
            </div>

            {/* Matric */}
            {/* <div className="flex items-start gap-8">
              <div className="flex-1 text-right">
                <h3 className="text-2xl font-bold">SEE</h3>
                <p className="text-gray-400">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Devsthaliya Vidhyapeeth (CBSE)
                  </a>
                </p>
                <p className="text-gray-400 mt-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  Till 2018
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-2.5 w-5 h-5 bg-blue-600 rounded-full shadow-md shadow-blue-500/50"></div>
              </div>
              <div className="flex-1"></div>
            </div> */}
          </div>

          {/* Work Timeline */}
          <div
            className={`space-y-16 ${selected === "work" ? "block" : "hidden"}`}
          >
            {/* Frontend Developer Intern */}
            <div className="flex items-start gap-8">
              <div className="flex-1 text-right">
                <h3 className="text-2xl font-bold">
                  Frontend Developer Intern
                </h3>
                <p className="text-gray-400">
                  <a
                    href="http://lennobyte.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    LennoByte Solutions
                  </a>
                </p>
                <p className="text-gray-400 mt-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  May 2024 - Sept 2024
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-2.5 w-5 h-5 bg-blue-600 rounded-full shadow-md shadow-blue-500/50"></div>
              </div>
              <div className="flex-1"></div>
            </div>

            {/* Android Developer Trainee */}
            <div className="flex items-start gap-8">
              <div className="flex-1"></div>
              <div className="relative">
                <div className="absolute -left-2.5 w-5 h-5 bg-blue-600 rounded-full shadow-md shadow-blue-500/50"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Android Developer Intern</h3>
                <p className="text-gray-400">
                  <a
                    href="http://lennobyte.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    LennoByte Solutions
                  </a>
                </p>
                <p className="text-gray-400 mt-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  Dec 2023 - Apr 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
