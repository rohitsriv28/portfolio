import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [hoverEmail, setHoverEmail] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const currentYear = new Date().getFullYear();

  // Social media links with enhanced hover effects
  const socialLinks = [
    {
      icon: faFacebookF,
      url: "https://www.facebook.com/",
      color: "hover:text-blue-500",
      hoverBg: "group-hover:bg-blue-500",
      label: "Facebook",
    },
    {
      icon: faGithub,
      url: "https://www.github.com/rohitsriv28/",
      color: "hover:text-gray-800",
      hoverBg: "group-hover:bg-gray-800",
      label: "GitHub",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/_i_rohit28/",
      color: "hover:text-pink-500",
      hoverBg:
        "group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500",
      label: "Instagram",
    },
    {
      icon: faXTwitter,
      url: "https://twitter.com/_i_rohit28",
      color: "hover:text-blue-400",
      hoverBg: "group-hover:bg-blue-400",
      label: "Twitter",
    },
    {
      icon: faLinkedinIn,
      url: "https://linkedin.com/rohitsriv28",
      color: "hover:text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-b from-transparent to-black text-white py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section with grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left column - Let's Connect */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Let's Connect
            </h2>
            <p className="text-base text-gray-300 mb-6 leading-relaxed">
              Have a project in mind or just want to say hello? I'm always open
              to discussing new opportunities and ideas.
            </p>

            {/* Contact Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:translate-x-1"
            >
              Get In Touch
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right column - Email and Social Icons */}
          <div className="text-left md:text-right">
            <h3 className="text-xl font-semibold mb-3">Contact Details</h3>
            <a
              href="mailto:rohitraj2002ind@gmail.com"
              className="group inline-flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 mb-6"
              onMouseEnter={() => setHoverEmail(true)}
              onMouseLeave={() => setHoverEmail(false)}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`w-5 h-5 ${
                  hoverEmail ? "text-blue-400" : "text-gray-400"
                } transition-colors duration-300`}
              />
              <span className="relative">
                rohitraj2002@gmail.com
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform transition-transform duration-300 ${
                    hoverEmail ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                ></span>
              </span>
            </a>

            {/* Social Media Icons - Enhanced with better spacing and animations */}
            <div className="flex flex-wrap justify-start md:justify-end gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group relative"
                  onMouseEnter={() => setActiveIcon(index)}
                  onMouseLeave={() => setActiveIcon(null)}
                >
                  <div
                    className={`
                    absolute inset-0 rounded-full opacity-0 ${
                      social.hoverBg
                    } transition-opacity duration-300
                    ${activeIcon === index ? "opacity-100" : ""}
                  `}
                  ></div>
                  <div
                    className={`
                    relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 
                    border border-gray-700 transition-all duration-300
                    ${
                      activeIcon === index
                        ? "text-white border-transparent"
                        : "text-gray-400"
                    }
                    hover:scale-110 hover:shadow-lg
                  `}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        {/* Footer Bottom - Enhanced with better styling */}
        <div className="flex flex-col md:flex-row items-center justify-center text-gray-400 text-sm">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-2">Designed with ❤️</span>
            {/* <a
              href="https://www.github.com/rohitsriv28"
              className="font-medium text-blue-400 hover:text-blue-300 transition-all duration-300"
            >
              Rohit &nbsp;
            </a> */}
          </div>
          <div className="flex items-center">
            <span>&copy; {currentYear} All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
