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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-yellow-400 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-lg transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
        </button>
      </div>

      {/* Desktop Floating Navbar - Solid backgrounds */}
      <div className={`fixed top-6 left-0 right-0 z-40 flex justify-center transition-all duration-300`}>
        <nav className={`
          hidden md:flex items-center gap-1 rounded-full 
          transition-all duration-500 ease-in-out border
          ${isScrolled
            ? 'px-4 py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 shadow-lg scale-95'
            : 'px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 scale-100'}
        `}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative md:px-3 lg:px-5 py-2 rounded-full md:text-xs lg:text-sm font-medium transition-all duration-300
                flex items-center gap-2 group overflow-hidden
                ${activeSection === item.id
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
              `}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`}
              />
              <span className="relative z-10">{item.label}</span>

              {/* Active Background Pill - Solid */}
              {activeSection === item.id && (
                <div className="absolute inset-0 -z-0 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Header - Solid background */}
      <div className="md:hidden fixed top-0 w-full z-50 p-4 flex justify-between items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Rohit
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className="text-indigo-600 dark:text-yellow-400"
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

      {/* Mobile Menu Overlay - Solid background */}
      <div className={`
        md:hidden fixed inset-0 z-40 bg-white dark:bg-slate-900 transition-all duration-300 flex items-center justify-center
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
                hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110
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
