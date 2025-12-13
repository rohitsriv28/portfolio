import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import img from "@assets/OIG7.png";
import resum_pdf from "@assets/My_Resume.pdf";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSocials, setShowSocials] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // Hide socials when scrolled down past 200px (approaching About section)
      if (window.scrollY > 200) {
        setShowSocials(false);
      } else {
        setShowSocials(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: faGithub, url: "https://www.github.com/rohitsriv28/", color: "hover:bg-gray-800" },
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/rohitsriv28/", color: "hover:bg-blue-700" },
    { icon: faXTwitter, url: "https://www.twitter.com/_i_rohit28", color: "hover:bg-black" },
    { icon: faInstagram, url: "https://www.instagram.com/_i_rohit28/", color: "hover:bg-pink-600" },
    { icon: faFacebookF, url: "https://www.facebook.com/", color: "hover:bg-blue-600" },
  ];

  return (
    <section
      id="main"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-50 dark:bg-transparent transition-colors duration-300"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 space-y-8">
            <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide text-sm">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <br />
                <span className="text-gradient">Rohit Raj Srivastava</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-light">
                Frontend Developer & BCA Student crafting modern web experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-1 transform"
              >
                Let's Talk
              </button>

              <a
                href={resum_pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all hover:-translate-y-1 transform"
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className={`hidden lg:flex items-center justify-center lg:justify-start gap-4 transition-all duration-500 delay-300 transform ${isVisible && showSocials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
              <span className="text-slate-600 dark:text-slate-500 text-sm font-medium mr-2">Follow me</span>
              <div className="w-12 h-px bg-slate-300 dark:bg-slate-700 mr-2"></div>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5 transition-all hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Spinning border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 opacity-30 animate-spin-slow blur-md" style={{ animationDuration: '10s' }} />
              
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/10 bg-slate-900 ring-4 ring-white/5 shadow-2xl">
                <img
                  src={img}
                  alt="Rohit"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-20 blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Header;
