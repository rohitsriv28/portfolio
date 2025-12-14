import React, { useRef, useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { onSnapshot } from "firebase/firestore";
import { statsRef } from "../config/firebase.config";
import img from "@assets/Dec_2023.jpg";
import resum_pdf from "@assets/My_Resume.pdf";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const nextCount = Math.ceil((progress / duration) * end);
        setCount(nextCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

const About = () => {
  const profileRef = useRef(null);
  const [stats, setStats] = useState({
    experience: 0,
    totalProjects: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = useCallback(() => {
    setIsLoading(true);

    const unsubscribe = onSnapshot(
      statsRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setStats({
            experience: data.experience ?? 0,
            totalProjects: data.totalProjects ?? 0,
          });
        } else {
          setStats({ experience: 0, totalProjects: 0 });
        }
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching stats:", error);
        setStats({ experience: 0, totalProjects: 0 });
        setIsLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = fetchStats();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [fetchStats]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        profileRef.current.style.transform = `perspective(1000px) 
          rotateX(${(y - rect.height / 2) / 20}deg) 
          rotateY(${-(x - rect.width / 2) / 20}deg)`;
      }
    };

    const currentRef = profileRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      return () => {
        currentRef.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <section
      id="about"
      className="pt-16 pb-24 bg-slate-50 dark:bg-[#0A0F1C] relative overflow-hidden transition-colors duration-300"
    >
      <div className="container max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
              My Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Profile Image */}
          <div
            ref={profileRef}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border-2 border-white dark:border-gray-700 transform transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <img
              src={img}
              alt="Profile"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl space-y-4">
            {/* Short intro line */}
            <p className="text-md font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
              Frontend Developer · Data Enthusiast
            </p>

            {/* Main paragraph */}
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              I build clean, intuitive web interfaces using modern frontend tools, and I enjoy
              backing design decisions with data. For me, good products balance thoughtful UX,
              solid engineering, and insights that come from actually looking at the numbers.
            </p>

            {/* Bullet points */}
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-500">✓</span>
                <span>User-centric UI with a focus on clarity and accessibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-500">✓</span>
                <span>
                  Modern frontend stack: React, JavaScript (ES6+), HTML, and CSS.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-500">✓</span>
                <span>
                  Data-informed decisions through basic analysis and experiment-driven thinking.
                </span>
              </li>
            </ul>

            {/* Stats + Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-10 pt-2 w-full">
              {/* Experience Card */}
              <div className="flex flex-wrap justify-center lg:justify-start">
                {isLoading ? (
                  <div className="h-28 w-96 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
                ) : (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 border border-slate-200 dark:border-slate-700 shadow-lg hover:border-indigo-500 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Large Number */}
                      <span className="text-6xl font-extrabold text-slate-900 dark:text-white leading-none">
                        <CountUp end={stats.experience} />
                        {stats.experience > 0 && "+"}
                      </span>

                      {/* Text + Project Count Block */}
                      <div className="leading-tight mt-1 space-y-1.5">
                        <p className="text-base text-slate-600 dark:text-slate-400">
                          Years of experience in building
                        </p>
                        <p className="text-base text-slate-600 dark:text-slate-400">
                          Frontend projects
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          {stats.totalProjects} projects explored so far
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col items-center lg:items-start gap-4">
                {/* Download Resume */}
                <a href={resum_pdf} download="resume" className="w-[200px]">
                  <button className="w-full bg-indigo-600 text-white px-7 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 text-sm">
                    <FontAwesomeIcon icon={faDownload} />
                    Download Resume
                  </button>
                </a>

                {/* View Projects */}
                <a href="#projects" className="w-[200px]">
                  <button className="w-full px-7 py-3 rounded-full font-semibold border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 text-sm">
                    View Projects
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
