import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const EMAIL = "rohitraj2002ind@gmail.com";

function Contact() {
  const subject = encodeURIComponent("Project / opportunity from your portfolio");
  const body = encodeURIComponent(
    "Hi Rohit,\n\nI came across your portfolio and would like to connect regarding..."
  );
  const mailtoHref = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

  return (
    <section
      id="contact"
      className="pt-8 pb-20 bg-slate-50 dark:bg-[#0A0F1C] relative overflow-hidden transition-colors duration-300"
    >
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            Contact Me
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Recruiters, teams, and collaborators — the fastest way to reach me is by email.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-stretch">
          {/* Left Side - Contact Details */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Location Card */}
            <div className="relative bg-white dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-[1.02] flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 dark:to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-5 h-full">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/50 dark:to-indigo-800/30 p-4 rounded-2xl text-indigo-600 dark:text-indigo-400 group-hover:from-indigo-600 group-hover:to-indigo-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
                </div>
                <div className="flex-1 space-y-1 flex flex-col justify-center">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Location
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    Raxaul, India · Birgunj, Nepal
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Available online · comfortable working remotely across time zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="relative bg-white dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-[1.02] flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 dark:to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-5 h-full">
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-800/30 p-4 rounded-2xl text-cyan-600 dark:text-cyan-400 group-hover:from-cyan-600 group-hover:to-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Email
                  </h3>
                  <a
                    href={mailtoHref}
                    className="text-slate-600 dark:text-slate-400 break-all text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                  >
                    {EMAIL}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    I&apos;m frequently online and usually respond within a day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA panel */}
          <div className="w-full lg:w-2/3 flex">
            <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-indigo-50/30 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-indigo-900/10 backdrop-blur-md p-6 sm:p-7 md:p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col justify-center group overflow-hidden w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-cyan-500/0 to-indigo-500/5 dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                  Let&apos;s make something amazing together.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  Whether you&apos;re hiring for a role, looking for a freelance developer,
                  or just want to discuss an idea, you can reach me directly via email — just say hi and tell me what you have in mind.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold hover:from-indigo-700 hover:to-indigo-600 active:scale-95 transition-all duration-300 shadow-2xl shadow-indigo-500/40 hover:shadow-3xl hover:shadow-indigo-500/50 group/btn"
                  >
                    Email Me
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>
                </div>

                <div className="pt-3 border-t-2 border-slate-200 dark:border-slate-700/50">
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                    Prefer another channel? You can also connect with me on LinkedIn or GitHub using the links in the footer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;