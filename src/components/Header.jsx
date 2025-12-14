import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import img from "@assets/Gemini_Generated_My_Image.png";
import resum_pdf from "@assets/My_Resume.pdf";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: faGithub, url: "https://www.github.com/rohitsriv28/", hoverColor: "hover:text-slate-900 dark:hover:text-white" },
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/rohitsriv28/", hoverColor: "hover:text-blue-600" },
    { icon: faXTwitter, url: "https://www.twitter.com/_i_rohit28", hoverColor: "hover:text-slate-900 dark:hover:text-white" },
    { icon: faInstagram, url: "https://www.instagram.com/_i_rohit28/", hoverColor: "hover:text-pink-500" },
    { icon: faFacebookF, url: "https://www.facebook.com/", hoverColor: "hover:text-blue-600" },
  ];

  return (
    <section
      id="main"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-300"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 space-y-8">
            <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Badge - Solid Indigo */}
              <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide text-sm">Welcome to my portfolio</span>
              </div>

              {/* Name - Solid Indigo highlight */}
              {/* <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <br />
                <span className="text-indigo-600 dark:text-indigo-400">Rohit Raj Srivastava</span>
              </h1> */}
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <br />
                <span className="text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  Rohit Raj Srivastava
                </span>
              </h1>


              <p className="text-justify text-l sm:text-2xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Frontend-focused, data-curious, and committed to turning ideas into impactful digital solutions.              </p>
            </div>

            {/* Buttons - Solid Colors */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-1000 delay-200 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              {/* Primary Button – View Resume */}
              <a
                href={resum_pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-indigo-600 text-white font-medium 
               hover:bg-indigo-700 transition-all"
              >
                View Resume
              </a>

              {/* Secondary Button – Let's Talk */}
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-600
               bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 
               font-medium hover:border-indigo-500 hover:text-indigo-600 
               dark:hover:border-indigo-400 dark:hover:text-indigo-400 
               transition-all"
              >
                Let's Talk
              </button>
            </div>

          </div>

          {/* Profile Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Image Container - Solid border */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl">
                <img
                  src={img}
                  alt="Rohit"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
