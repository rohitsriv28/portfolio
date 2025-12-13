import React, { useRef, useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCode,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { onSnapshot } from "firebase/firestore";
import { statsRef } from "../config/firebase.config";
import img from "@assets/OIG7.png";
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
    <section id="about" className="pt-8 pb-20 bg-slate-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden glass-card transform transition-all duration-300 hover:scale-105 shadow-2xl dark:shadow-none"
            ref={profileRef}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 backdrop-blur-[2px] z-10"></div>
            <img
              src={img}
              alt="Profile"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left max-w-2xl space-y-8">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Rohit!</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              I am a passionate web developer specializing in React and modern
              web technologies. My mission is to create intuitive,
              user-friendly, and visually stunning web experiences. Every
              project I undertake reflects my dedication to functionality and
              design.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {isLoading ? (
                <>
                  {[1, 2].map((item) => (
                    <div key={item} className="h-32 w-44 rounded-xl bg-slate-200 dark:bg-white/5 animate-pulse" />
                  ))}
                </>
              ) : (
                <>
                  <div className="bg-white dark:bg-white/5 p-6 rounded-xl text-center w-48 hover:border-indigo-500/50 transition-all duration-300 group border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
                    <h4 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <CountUp end={stats.experience} />+
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Years of Experience</p>
                  </div>
                  <div className="bg-white dark:bg-white/5 p-6 rounded-xl text-center w-48 hover:border-purple-500/50 transition-all duration-300 group border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
                    <h4 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      <CountUp end={stats.totalProjects} />+
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Projects Completed</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-center sm:justify-start pt-4">
              <a href={resum_pdf} download="resume">
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-lg hover:shadow-white/20">
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
