import { useState, useEffect, useCallback } from "react";
import { Code, Link as LinkIcon, Loader, Github } from "lucide-react";
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

          // Optional: Sort projects by date or priority
          const sortedProjects = projectsData.sort((a, b) => 
            (b.priority || 0) - (a.priority || 0)
          );

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
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [getProjects]);

  const handleProjectFocus = (index) => {
    setActiveProject(index);
  };

  const handleProjectBlur = () => {
    setActiveProject(null);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveProject(index === activeProject ? null : index);
    }
  };

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <Loader className="animate-spin h-12 w-12 mx-auto text-blue-500 mb-4" />
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4 text-xl">{error}</p>
          <button
            onClick={getProjects}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  return (
    <section 
      id="projects" 
      className="relative py-20 text-white overflow-hidden"
    >
      <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative solutions and creative digital experiences 
            crafted with passion and precision
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {["All", "Personal", "Professional", "Open Source"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {currentProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20"
                  onMouseEnter={() => handleProjectFocus(index)}
                  onMouseLeave={handleProjectBlur}
                  tabIndex={0}
                  role="button"
                  aria-expanded={activeProject === index}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/api/placeholder/400/320"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 border-t border-gray-700">
                    <h3 className="text-lg font-bold mb-1 truncate">
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-blue-900/90 to-black/90 p-6 flex flex-col justify-center transition-all duration-300 ${
                      activeProject === index
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    
                    {project.description && (
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-700/50 text-sm rounded-full border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <LinkIcon size={20} className="mr-2" />
                          Live Site
                        </a>
                      )}
                      {project.gitLink && (
                        <a
                          href={project.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Github size={20} className="mr-2" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <span className="text-gray-300">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">
              No projects found in this category.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <a
            href="https://github.com/rohitsriv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="inline-block mr-2" /> 
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;