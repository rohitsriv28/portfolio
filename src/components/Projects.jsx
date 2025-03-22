import { useState, useEffect, useCallback } from "react";
import { Code, Link as LinkIcon, Loader } from "lucide-react";

const ProjectsUI = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = windowWidth < 768 ? 4 : 8;

  // Mock data loading function (replace with your data source)
  const getProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Replace this with your data fetching logic
      const sampleProjects = [
        {
          id: "1",
          title: "Project One",
          description:
            "A sample project description that explains what this project is about.",
          image: "/api/placeholder/400/320",
          category: "Personal",
          tags: ["React", "Tailwind"],
          link: "https://example.com",
          gitLink: "https://github.com/example/project",
        },
        // Add more sample projects as needed
      ];

      // Simulate network delay
      setTimeout(() => {
        setProjects(sampleProjects);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects. Please try again later.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    getProjects();

    return () => window.removeEventListener("resize", handleResize);
  }, [getProjects]);

  // Handle project interaction for both mouse and keyboard
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

  // Filter and paginate projects
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
      <div className="flex justify-center items-center py-20">
        <Loader className="animate-spin h-10 w-10 text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={getProjects}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section id="project" className="relative py-20 text-white overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Project Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Innovative solutions and creative digital experiences crafted with
            passion
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Personal", "Professional"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1); // Reset to first page when changing tabs
              }}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {currentProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 bg-gray-800"
                onMouseEnter={() => handleProjectFocus(index)}
                onMouseLeave={handleProjectBlur}
                onFocus={() => handleProjectFocus(index)}
                onBlur={handleProjectBlur}
                onKeyDown={(e) => handleKeyPress(e, index)}
                tabIndex={0}
                role="button"
                aria-expanded={activeProject === index}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.projectName || project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 border-t border-gray-700">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
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
                  {project.note && (
                    <p className="text-sm text-gray-400 mb-4">{project.note}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.tags?.map((tag, tagIndex) => (
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
                        aria-label={`View live project: ${project.title}`}
                      >
                        <LinkIcon size={20} className="mr-2" />
                        Live
                      </a>
                    )}
                    {project.gitLink && (
                      <a
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        aria-label={`View source code for: ${project.title}`}
                      >
                        <Code size={20} className="mr-2" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              Previous
            </button>

            <div className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rohitsriv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-purple-600/30"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsUI;
