import React, { useEffect, lazy, Suspense } from "react";
import ScrollTopOnRefresh from "./utils/ScrollToTop";
import visitorCount from "./utils/visitorCount";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// Lazy loaded components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Qualifications = lazy(() => import("./components/Qualifications"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="py-16 px-4 flex justify-center items-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
      <div className="h-4 w-48 bg-slate-100 dark:bg-slate-800 rounded"></div>
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

    // Auto-refresh after 30 minutes of inactivity
    let inactivityTimeout;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        // Clear the stored timestamp to allow a new session
        localStorage.removeItem("portfolio_visit_timestamp");
        window.location.reload();
      }, 30 * 60 * 1000); // 30 minutes
    };

    // User activity events that reset the timer
    const activityEvents = ["mousemove", "keydown", "scroll", "click"];

    // Set up event listeners and tracking
    activityEvents.forEach((event) =>
      window.addEventListener(event, resetInactivityTimer)
    );

    resetInactivityTimer(); // Initialize the timer on first load
    trackVisit(); // Record the visit if valid

    // Cleanup on component unmount
    return () => {
      activityEvents.forEach((event) =>
        window.removeEventListener(event, resetInactivityTimer)
      );
      clearTimeout(inactivityTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0F1C] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ScrollTopOnRefresh />

      {/* Critical components */}
      <Navbar />
      <Header />

      {/* Lazy loaded components */}
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
