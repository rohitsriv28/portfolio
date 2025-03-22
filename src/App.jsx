import React, { useEffect, lazy, Suspense } from "react";
import ScrollTopOnRefresh from "./utils/ScrollToTop";
import trafficTracker from "./utils/trafficTracker";
import Navbar from "./components/Navbar";
import RandomShape from "./components/RandomShapes";
import Header from "./components/Header";

// Lazy load non-critical components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Qualifications = lazy(() => import("./components/Qualifications"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="py-16 px-4 flex justify-center items-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded"></div>
    </div>
  </div>
);

const App = () => {
  // Initialize traffic tracking when the app loads
  useEffect(() => {
    // Record the page view
    trafficTracker.recordView();

    // Log traffic statistics to console (optional)
    console.log(
      `Page view recorded. Today: ${trafficTracker.getTodayViews()} views. Total: ${trafficTracker.getTotalViews()} views.`
    );
  }, []);

  return (
    <div className="transition-colors duration-300 dark:bg-gray-900 bg-white">
      <ScrollTopOnRefresh />
      {/* Critical components loaded eagerly */}
      <Navbar />
      <RandomShape />
      <Header />

      {/* Lazy loaded components with Suspense */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Qualifications />
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
    </div>
  );
};

export default App;
