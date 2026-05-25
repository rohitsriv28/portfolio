import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resumePreviewLink =
    "https://drive.google.com/file/d/1_Ap7eL3QgtTSvtgUy8uxk884ZQFUm2gq/preview";
  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1_Ap7eL3QgtTSvtgUy8uxk884ZQFUm2gq";

  return (
    <div className="h-screen w-full flex flex-col bg-bg overflow-hidden">
      {/* Minimal Header */}
      <header className="flex-none h-14 px-4 sm:px-6 flex items-center justify-between bg-surface border-b border-border text-muted">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium hover:text-text transition-colors px-2 py-1 rounded-md hover:bg-[rgba(232,233,238,0.05)]"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        <a
          href={resumeDownloadLink}
          className="flex items-center gap-2 text-sm font-medium hover:text-text transition-colors px-2 py-1 rounded-md hover:bg-[rgba(232,233,238,0.05)]"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Download PDF</span>
        </a>
      </header>

      {/* Edge-to-edge Iframe */}
      <main className="flex-grow w-full h-full bg-bg relative">
        <iframe
          src={resumePreviewLink}
          title="Rohit Raj Srivastava - Resume"
          className="w-full h-full border-none"
          allow="autoplay"
        ></iframe>
      </main>
    </div>
  );
};

export default Resume;
