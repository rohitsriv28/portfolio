import { useState, useEffect, useCallback } from "react";
import { Link as LinkIcon, Loader, Github } from "lucide-react";
import { onSnapshot } from "firebase/firestore";
import { projectsRef } from "../config/firebase.config";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = windowWidth < 768 ? 4 : 8;

  const getProjects = useCallback(() => {
    setLoading(true);
    setError(null);

    try {
      const unsubscribe = onSnapshot(
        projectsRef,
        (querySnapshot) => {
          const projectsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          // Sort by createdAt (newest first) for LIFO order, then by priority
          const sortedProjects = projectsData.sort((a, b) => {
            // First, sort by createdAt timestamp (newest first)
            const dateA = a.createdAt?.toDate?.() || a.createdAt || 0;
            const dateB = b.createdAt?.toDate?.() || b.createdAt || 0;
            const timeA = dateA instanceof Date ? dateA.getTime() : (typeof dateA === 'number' ? dateA : 0);
            const timeB = dateB instanceof Date ? dateB.getTime() : (typeof dateB === 'number' ? dateB : 0);

            if (timeB !== timeA) {
              return timeB - timeA; // Newest first (LIFO)
            }
            // If same timestamp or no timestamp, fall back to priority
            return (b.priority || 0) - (a.priority || 0);
          });

          setProjects(sortedProjects);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching projects:", error);
          setError("Failed to load projects. Please try again later.");
          setLoading(false);
        }
      );

      return unsubscribe;
    } catch (error) {
      console.error("Error setting up projects listener:", error);
      setError("Failed to set up real-time updates. Please try again later.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    const unsubscribe = getProjects();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (unsubscribe) unsubscribe();
    };
  }, [getProjects]);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category?.toLowerCase() === activeTab.toLowerCase());

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-slate-50 dark:bg-[#0A0F1C]">
        <div className="text-center">
          <Loader className="animate-spin h-10 w-10 mx-auto text-indigo-500 mb-4" />
          <p className="text-slate-500 dark:text-slate-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-slate-50 dark:bg-[#0A0F1C]">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={getProjects}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="relative pt-8 pb-20 bg-slate-50 dark:bg-[#0A0F1C] overflow-hidden transition-colors duration-300">
      <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header - Solid colors */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            A showcase of innovative solutions and creative digital experiences
            crafted with passion.
          </p>
        </div>

        {/* Filter Tabs - Solid */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["All", "Personal", "Professional"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === tab
                ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                : "bg-white dark:bg-gray-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {currentProjects.length > 0 ? (
          <>
            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 h-[320px] flex flex-col border border-slate-200 dark:border-slate-700 shadow-lg"
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={project.image || "/api/placeholder/400/320"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags?.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-slate-900/95 p-6 flex flex-col transition-all duration-300 ${activeProject === index ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <h3 className="text-xl font-bold mb-3 text-white flex-shrink-0">{project.title}</h3>

                    <div className="overflow-y-auto mb-4 pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-indigo-500/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-4 mt-auto flex-shrink-0">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition-colors"
                        >
                          <LinkIcon size={18} />
                          Live Demo
                        </a>
                      )}
                      {project.gitLink && (
                        <a
                          href={project.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 border border-slate-600 rounded-lg text-white hover:bg-slate-800 transition-colors"
                          title="View Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination - Solid */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>

                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400">No projects found in this category.</p>
          </div>
        )}

        {/* View All Button - Solid */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/rohitsriv28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;