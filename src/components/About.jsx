import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCode,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import img from "@assets/OIG7.png";
import resum_pdf from "@assets/My_Resume.pdf";

// Mock Firebase data (replace with actual Firebase fetch later)
const statsData = {
  experience: 1,
  projects: 250,
};

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
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch stats (simulating Firebase fetch)
  useEffect(() => {
    // Simulate async data fetch
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        // Set stats from our mock data
        setStats(statsData);
      } catch (error) {
        console.error("Error fetching stats:", error);
        // Fallback values in case of error
        setStats({ experience: 1, projects: 5 });
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

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
    <section id="about" className="py-20 text-white relative overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg text-gray-300">My Digital Journey</p>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section - Enhanced with glow effect */}
          <div
            className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/50 shadow-lg shadow-blue-500/30"
            ref={profileRef}
          >
            <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm"></div>
            <img
              src={img}
              alt="Profile"
              className="w-full h-full object-cover relative z-10"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left max-w-2xl">
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hi, I&apos;m Rohit!
            </h3>
            <p className="text-lg text-gray-300 mb-8 backdrop-blur-sm bg-gray-800/30 p-6 rounded-lg">
              I am a passionate web developer specializing in React and modern
              web technologies. My mission is to create intuitive,
              user-friendly, and visually stunning web experiences. Every
              project I undertake reflects my dedication to functionality and
              design.
            </p>

            {/* Stats Section - Enhanced with glass effect and animation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              {isLoading ? (
                // Loading state
                <>
                  <div className="backdrop-blur-md bg-gray-800/60 p-6 rounded-lg text-center w-44 border border-white/10 animate-pulse">
                    <div className="h-8 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
                    <div className="h-6 w-6 bg-gray-700 rounded-full mx-auto mt-4"></div>
                  </div>
                  <div className="backdrop-blur-md bg-gray-800/60 p-6 rounded-lg text-center w-44 border border-white/10 animate-pulse">
                    <div className="h-8 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
                    <div className="h-6 w-6 bg-gray-700 rounded-full mx-auto mt-4"></div>
                  </div>
                </>
              ) : (
                // Loaded stats with animation
                <>
                  <div className="backdrop-blur-md bg-gray-800/60 p-6 rounded-lg text-center w-44 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-3xl font-bold mb-2 text-white">
                      <CountUp end={stats.experience} />+
                    </h4>
                    <p className="text-gray-300">Years of Experience</p>
                    <FontAwesomeIcon
                      icon={faCode}
                      className="text-blue-500 text-2xl mt-4"
                    />
                  </div>
                  <div className="backdrop-blur-md bg-gray-800/60 p-6 rounded-lg text-center w-44 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-3xl font-bold mb-2 text-white">
                      <CountUp end={stats.projects} />+
                    </h4>
                    <p className="text-gray-300">Projects Completed</p>
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="text-yellow-500 text-2xl mt-4"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Download CV Button - Enhanced with animation */}
            <div className="flex justify-center sm:justify-start">
              <a href={resum_pdf} download="resume">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-blue-500/30">
                  <FontAwesomeIcon icon={faDownload} className="text-white" />
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
