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
    experience: 1,
    totalProjects: 3,
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
            experience: data.experience || 1,
            totalProjects: data.totalProjects || 3,
          });
        } else {
          setStats({ experience: 1, totalProjects: 3 });
        }
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching stats:", error);
        setStats({ experience: 1, totalProjects: 3 });
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
    <section id="about" className="pt-8 pb-20 bg-slate-50 dark:bg-[#0A0F1C] relative overflow-hidden transition-colors duration-300">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Profile Image */}
          <div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-700 transform transition-all duration-300 hover:scale-105 shadow-2xl"
            ref={profileRef}
          >
            <img
              src={img}
              alt="Profile"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl space-y-8">
            <p className="text-justify text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              I am a frontend developer who enjoys creating clean, intuitive, and user-focused web experiences.
              Alongside building interfaces, I’m also developing strong skills in data analysis—because great
              products are not just well designed; they’re driven by meaningful insights. I value clarity,
              thoughtful execution, and building digital solutions that are both visually engaging and
              backed by data-driven understanding.
            </p>


            {/* Stats Cards - Solid backgrounds */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {isLoading ? (
                <>
                  {[1, 2].map((item) => (
                    <div key={item} className="h-32 w-44 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
                  ))}
                </>
              ) : (
                <>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center w-48 hover:border-indigo-500 transition-all duration-300 group border border-slate-200 dark:border-slate-700 shadow-lg">
                    <h4 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <CountUp end={stats.experience} />+
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Years of Experience</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center w-48 hover:border-cyan-500 transition-all duration-300 group border border-slate-200 dark:border-slate-700 shadow-lg">
                    <h4 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      <CountUp end={stats.totalProjects} />+
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Projects Completed</p>
                  </div>
                </>
              )}
            </div>

            {/* Download Button - Solid */}
            <div className="flex justify-center sm:justify-start pt-4">
              <a href={resum_pdf} download="resume">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-indigo-500/25">
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
