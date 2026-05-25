import React, { useEffect, lazy, Suspense } from "react";
import ScrollTopOnRefresh from "./utils/ScrollToTop";
import visitorCount from "./utils/visitorCount";
import ProgressLine from "./components/ProgressLine";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Ticker from "./components/Ticker";
import DABanner from "./components/DABanner";
import BackToTop from "./components/BackToTop";

// Lazy loaded components
const About = lazy(() => import("./components/About"));
const Qualifications = lazy(() => import("./components/Qualifications"));
const Skills = lazy(() => import("./components/Skills"));
const Achievements = lazy(() => import("./components/Achievements"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="py-[7rem] px-10 flex justify-center items-center bg-bg">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-8 w-32 bg-border rounded mb-4"></div>
      <div className="h-4 w-48 bg-border-soft rounded"></div>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const success = await visitorCount.recordVisit();
        if (success) {
          console.debug("New visit recorded");
        } else {
          console.debug("Visit already counted in the last 30 minutes");
        }
      } catch (error) {
        console.error("Visitor tracking error:", error);
      }
    };

    trackVisit(); // Record the visit if valid
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <ScrollTopOnRefresh />
      <ProgressLine />
      <Navbar />
      <Header />
      <Ticker />

      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Qualifications />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>

      <DABanner />

      <Suspense fallback={<LoadingFallback />}>
        <Achievements />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

      <BackToTop />
    </div>
  );
};

export default App;
