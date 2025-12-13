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
import { faEnvelope, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
   const [hoverEmail, setHoverEmail] = useState(false);
   const [activeIcon, setActiveIcon] = useState(null);
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         icon: faFacebookF,
         url: "https://www.facebook.com/",
         color: "text-blue-500",
         label: "Facebook",
      },
      {
         icon: faGithub,
         url: "https://www.github.com/rohitsriv28/",
         color: "text-slate-200",
         label: "GitHub",
      },
      {
         icon: faInstagram,
         url: "https://www.instagram.com/_i_rohit28/",
         color: "text-pink-500",
         label: "Instagram",
      },
      {
         icon: faXTwitter,
         url: "https://twitter.com/_i_rohit28",
         color: "text-white",
         label: "Twitter",
      },
      {
         icon: faLinkedinIn,
         url: "https://linkedin.com/rohitsriv28",
         color: "text-blue-600",
         label: "LinkedIn",
      },
   ];

   return (
      <footer id="footer" className="relative pt-24 pb-12 overflow-hidden border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors duration-300">
         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent pointer-events-none"></div>

         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
               {/* Left Column */}
               <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                     Let's make something <br />
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                        amazing together.
                     </span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md font-light leading-relaxed">
                     I'm currently available for freelance projects and open to new opportunities.
                  </p>

                  <a
                     href="#contact"
                     className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:bg-indigo-700 dark:hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg group"
                  >
                     Start a Project
                     <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>

               {/* Right Column */}
               <div className="space-y-8 md:text-right">
                  <div>
                     <h3 className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
                     <a
                        href="mailto:rohitraj2002ind@gmail.com"
                        className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                     >
                        rohitraj2002@gmail.com
                     </a>
                  </div>

                  <div>
                     <h3 className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6 md:ml-auto">Socials</h3>
                     <div className="flex flex-wrap gap-4 md:justify-end">
                        {socialLinks.map((social, index) => (
                           <a
                              key={index}
                              href={social.url}
                              target="_blank"
                              rel="noreferrer"
                              className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-indigo-600 dark:hover:bg-white/10 hover:border-transparent dark:hover:border-white/20 transition-all duration-300 group"
                              aria-label={social.label}
                           >
                              <FontAwesomeIcon icon={social.icon} className={`text-lg transition-transform duration-300 group-hover:scale-110 ${social.color.replace('text-', 'group-hover:text-white ')}`} />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
               <p>&copy; {currentYear} Rohit Raj Srivastava. Code. Create. Innovate.</p>
               <p className="flex items-center gap-2 mt-2 md:mt-0">
                  Forged with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> in the fires of React & Tailwind.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
