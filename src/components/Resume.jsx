import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resumePreviewLink =
    "https://drive.google.com/file/d/1_Ap7eL3QgtTSvtgUy8uxk884ZQFUm2gq/preview";
  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1_Ap7eL3QgtTSvtgUy8uxk884ZQFUm2gq";

  return (
    <div className="h-screen w-full flex flex-col bg-[#141414] overflow-hidden">
      {/* Minimal Header */}
      <header className="flex-none h-14 px-4 sm:px-6 flex items-center justify-between bg-[#1f1f1f] border-b border-[#333] text-gray-300">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/10"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Portfolio</span>
        </Link>

        <a
          href={resumeDownloadLink}
          className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/10"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span className="hidden sm:inline">Download PDF</span>
        </a>
      </header>

      {/* Edge-to-edge Iframe */}
      <main className="flex-grow w-full h-full bg-black relative">
        <iframe
          src={resumePreviewLink}
          title="Rohit Raj Srivastava - Resume"
          className="w-full h-full border-none"
          allow="autoplay"
        ></iframe>
        {/* Overlay to hide Google Drive pop-out button */}
        <div className="absolute top-0 right-0 w-[50px] h-[50px] bg-[#0f0f0f] pointer-events-none"></div>
      </main>
    </div>
  );
};

export default Resume;
