import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebookF,
   faGithub,
   faInstagram,
   faXTwitter,
   faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         icon: faFacebookF,
         url: "https://www.facebook.com/",
         label: "Facebook",
      },
      {
         icon: faGithub,
         url: "https://www.github.com/rohitsriv28/",
         label: "GitHub",
      },
      {
         icon: faInstagram,
         url: "https://www.instagram.com/_i_rohit28/",
         label: "Instagram",
      },
      {
         icon: faXTwitter,
         url: "https://twitter.com/_i_rohit28",
         label: "Twitter",
      },
      {
         icon: faLinkedinIn,
         url: "https://linkedin.com/rohitsriv28",
         label: "LinkedIn",
      },
   ];

   return (
      <footer id="footer" className="relative pt-24 pb-12 overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0F1C] transition-colors duration-300">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
               {/* Left Column */}
               <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                     Let's make something <br />
                     <span className="text-indigo-600 dark:text-indigo-400">
                        amazing together.
                     </span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md font-light leading-relaxed">
                     I'm currently available for freelance projects and open to new opportunities.
                  </p>

                  {/* CTA Button - Solid */}
                  <a
                     href="#contact"
                     className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 group"
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
                        rohitraj2002ind@gmail.com
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
                              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 group"
                              aria-label={social.label}
                           >
                              <FontAwesomeIcon icon={social.icon} className="text-lg transition-transform duration-300 group-hover:scale-110" />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400 text-sm">
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
