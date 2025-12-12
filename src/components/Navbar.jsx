import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faBriefcase,
  faGraduationCap,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  initDarkMode,
  toggleDarkMode,
  setupSystemThemeListener,
} from "../utils/darkMode";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("main");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => initDarkMode());

  // Toggle dark mode
  const handleToggleDarkMode = () => {
    const newDarkModeState = toggleDarkMode(darkMode);
    setDarkMode(newDarkModeState);
  };

  // Listen for system theme changes
  useEffect(() => {
    const cleanup = setupSystemThemeListener();
    return cleanup;
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70; // Consistent offset
      const sectionPosition = section.getBoundingClientRect().top;
      window.scrollTo({
        top: sectionPosition + window.scrollY - offset,
        behavior: "smooth",
      });
      setShowMobileMenu(false);
    }
  };

  // Handle navbar style changes on scroll
  useEffect(() => {
    const navbarEl = document.querySelector(".navbar");

    const handleScroll = () => {
      // Add scrolled class for background change
      if (window.scrollY > 20) {
        navbarEl.classList.add("scrolled");
        setIsScrolled(true);
      } else {
        navbarEl.classList.remove("scrolled");
        setIsScrolled(false);
      }

      // Calculate scroll progress for progress bar
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "main",
        "about",
        "skill",
        "qualification",
        "projects",
        "contact",
      ];
      let inViewSection = "main";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            inViewSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(inViewSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [showMobileMenu]);

  // Navigation items
  const navItems = [
    { id: "main", icon: faHome, label: "Home" },
    { id: "about", icon: faUser, label: "About" },
    { id: "skill", icon: faCog, label: "Skills" },
    { id: "qualification", icon: faGraduationCap, label: "Qualification" },
    { id: "projects", icon: faBriefcase, label: "Projects" },
    { id: "contact", icon: faEnvelope, label: "Contact" },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="text-2xl font-bold dark:text-white text-gray-900 cursor-pointer flex items-center"
            onClick={() => scrollToSection("main")}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text transition-all hover:from-blue-300 hover:to-purple-400">
              Rohit
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white flex items-center
                  ${
                    activeSection === item.id
                      ? "dark:text-white text-gray-900 dark:bg-gray-700/30 bg-gray-200 shadow-md"
                      : "dark:text-gray-300 text-gray-700"
                  }
                `}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={handleToggleDarkMode}
              className="ml-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                hover:bg-gray-200 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={handleToggleDarkMode}
              className="mr-2 p-2 rounded-lg text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all"
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-white p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${
              showMobileMenu ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="dark:bg-gray-800/95 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg p-2 dark:border-gray-700/50 border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-4 py-3 rounded-md my-1 flex items-center
                  transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/70
                  ${
                    activeSection === item.id
                      ? "dark:bg-gray-700/50 bg-gray-100 dark:text-white text-gray-900 font-medium shadow-sm"
                      : "dark:text-gray-300 text-gray-700"
                  }
                `}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-3 w-5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Blur (conditional) */}
      <div
        className={`
          absolute inset-0 -z-10 transition-opacity duration-300
          dark:bg-gradient-to-b dark:from-gray-900/90 dark:to-gray-800/85 
          bg-gradient-to-b from-white/90 to-gray-100/85 backdrop-blur-md
          ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
      />
    </nav>
  );
};

export default Navbar;
