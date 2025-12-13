import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faBriefcase,
  faGraduationCap,
  faEnvelope,
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { initDarkMode, toggleDarkMode } from "../utils/darkMode";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => initDarkMode());

  // Handle navbar float effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ["main", "about", "skill", "qualification", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "main", icon: faHome, label: "Home" },
    { id: "about", icon: faUser, label: "About" },
    { id: "skill", icon: faCog, label: "Skills" },
    { id: "qualification", icon: faGraduationCap, label: "Education" },
    { id: "projects", icon: faBriefcase, label: "Projects" },
    { id: "contact", icon: faEnvelope, label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const handleThemeToggle = () => {
    setDarkMode(toggleDarkMode(darkMode));
  };

  return (
    <>
      {/* Theme Toggle - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50 hidden md:block">
        <button
          onClick={handleThemeToggle}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-900/50 backdrop-blur-md border border-white/10 text-yellow-400 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className={`text-xl ${darkMode ? "animate-spin-slow" : ""}`} />
        </button>
      </div>

      {/* Desktop Floating Navbar */}
      <div className={`fixed top-6 left-0 right-0 z-40 flex justify-center transition-all duration-300`}>
        <nav className={`
          hidden md:flex items-center gap-1 rounded-full 
          transition-all duration-500 ease-in-out border border-slate-200 dark:border-white/10
          ${isScrolled 
            ? 'px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg shadow-indigo-500/10 scale-90' 
            : 'px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm scale-100'}
        `}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative md:px-3 lg:px-5 py-2 rounded-full md:text-xs lg:text-sm font-medium transition-all duration-300
                flex items-center gap-2 group overflow-hidden
                ${activeSection === item.id 
                  ? 'text-indigo-600 dark:text-white' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}
              `}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className={`transition-transform duration-300 ${activeSection === item.id ? 'scale-110 text-indigo-500 dark:text-indigo-400' : 'group-hover:scale-110'}`} 
              />
              <span className="relative z-10">{item.label}</span>
              
              {/* Active Background Pill */}
              {activeSection === item.id && (
                <div className="absolute inset-0 -z-0 bg-indigo-50 dark:bg-white/10 border border-indigo-100 dark:border-white/5 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-50 p-4 flex justify-between items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Rohit
        </span>
        <div className="flex items-center gap-4">
           {/* Mobile Theme Toggle */}
           <button
            onClick={handleThemeToggle}
            className="text-yellow-500 dark:text-yellow-400"
            aria-label="Toggle Dark Mode"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 dark:text-white p-2"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-300 flex items-center justify-center
        ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col gap-8 text-center">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                text-2xl font-medium transition-all duration-300 flex items-center justify-center gap-4
                ${activeSection === item.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}
                hover:text-indigo-500 dark:hover:text-white transform hover:scale-110
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
