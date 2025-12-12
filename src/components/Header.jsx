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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="main"
      className="relative min-h-screen flex items-center justify-center from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Image Section with improved styling */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-300 group-hover:scale-105">
              <img
                src={img}
                alt="Rohit"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </div>

          {/* Text Section with staggered animations */}
          <div className="text-center lg:text-left space-y-6 lg:max-w-xl">
            <div
              className={`transform transition-all duration-700 delay-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <h3 className="text-xl text-blue-400 font-medium mb-2">
                Hello, I'm
              </h3>
              <h2 className="text-5xl sm:text-6xl font-bold mb-4 pb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Rohit Raj Srivastava
              </h2>
              <div className="relative">
                <h4 className="text-2xl text-gray-300 inline-block">
                  Frontend Developer
                </h4>
                <span className="absolute -right-2 top-0 h-full w-1 bg-blue-500 animate-blink"></span>
              </div>
            </div>

            <p
              className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              BCA Student | Web Developer
            </p>

            <div
              className={`flex flex-wrap justify-center sm:justify-start gap-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </button>

              <a
                href={resum_pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links with hover effects */}
        <div
          className={`mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="hidden flex-col sm:flex-row items-end justify-end gap-4 sm:flex">
            <span className="text-gray-400 text-lg">Follow Me On</span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-500 to-transparent hidden sm:block"></div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/_i_rohit28/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a
                href="https://www.twitter.com/_i_rohit28"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/20"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
              </a>
              <a
                href="https://www.github.com/rohitsriv28/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/20"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohitsriv28/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className={`absolute -bottom-28 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Header;
