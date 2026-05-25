import { useState, useEffect, useCallback } from "react";
import { Loader } from "lucide-react";
import { onSnapshot } from "firebase/firestore";
import { projectsRef } from "../config/firebase.config";
import Reveal from "./Reveal";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const isMobile = windowWidth < 768;
  const projectsPerPage = 6;

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

          const sortedProjects = projectsData.sort((a, b) => {
            const dateA = a.createdAt?.toDate?.() || a.createdAt || 0;
            const dateB = b.createdAt?.toDate?.() || b.createdAt || 0;
            const timeA = dateA instanceof Date ? dateA.getTime() : (typeof dateA === 'number' ? dateA : 0);
            const timeB = dateB instanceof Date ? dateB.getTime() : (typeof dateB === 'number' ? dateB : 0);

            if (timeB !== timeA) {
              return timeB - timeA;
            }
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

  let currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  if (isMobile) {
    const topKeywords = ["expense", "cash", "swiftcare", "gift"];
    const prioritized = filteredProjects.filter(p =>
      topKeywords.some(keyword => p.title.toLowerCase().includes(keyword))
    );
    const others = filteredProjects.filter(p => !prioritized.includes(p));
    currentProjects = [...prioritized, ...others].slice(0, 3);
  }

  const totalPages = isMobile ? 1 : Math.ceil(filteredProjects.length / projectsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-bg border-b border-border">
        <div className="text-center">
          <Loader className="animate-spin h-10 w-10 mx-auto text-accent mb-4" />
          <p className="font-mono text-xs tracking-widest uppercase text-muted">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-bg border-b border-border">
        <div className="text-center">
          <p className="text-red-500 mb-4 font-mono text-sm">{error}</p>
          <button
            onClick={getProjects}
            className="font-mono text-xs tracking-widest uppercase bg-transparent border border-accent text-accent px-6 py-2 hover:bg-accent hover:text-bg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-[7rem] px-[2.5rem] border-b border-border" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-accent">
            04. Work
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-between items-end flex-wrap gap-4">
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
              Selected <em className="italic text-accent">Projects</em>
            </h2>
            <a
              href="https://github.com/rohitsriv28"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden font-mono text-[0.62rem] tracking-[0.08em] uppercase text-muted border-b border-border transition-colors duration-200 hover:text-accent pb-1 mb-2"
            >
              View full archive on GitHub →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Filter Tabs */}
          <div className="flex justify-start gap-4 mt-8 flex-wrap">
            {["All", "Personal", "Professional"].map((tab) => (
              <button
                key={tab}
                className={`font-mono text-[0.65rem] tracking-[0.1em] uppercase px-5 py-2 border transition-colors duration-200 ${activeTab === tab
                  ? "bg-accent text-bg border-accent"
                  : "bg-transparent text-muted border-border hover:text-text hover:border-[rgba(232,233,238,0.4)]"
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
        </Reveal>

        <Reveal delay={0.2}>
          {currentProjects.length > 0 ? (
            <>
              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                {currentProjects.map((project) => (
                  <a
                    key={project.id}
                    href={project.link || project.gitLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col group cursor-pointer bg-surface border border-border relative overflow-hidden transition-colors duration-200 hover:bg-card p-6"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 ease-custom-out group-hover:scale-x-100 z-10"></div>
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg mb-6 border border-border">
                      <img
                        src={project.image || "/api/placeholder/800/500"}
                        alt={project.title}
                        className="w-full h-full object-contain p-2 transition-transform duration-700 ease-custom-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[rgba(14,15,19,0.4)] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-text bg-[rgba(14,15,19,0.8)] px-5 py-2.5 border border-[rgba(232,233,238,0.2)] translate-y-2.5 transition-transform duration-300 ease-custom-out group-hover:translate-y-0">
                          View Project
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h3 className="font-serif text-[1.8rem] text-text mb-3">
                        {project.title}
                      </h3>
                      <p className="font-sans text-[0.88rem] leading-[1.7] text-muted mb-6 max-w-[100%] md:max-w-[90%]">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="font-mono text-[0.58rem] tracking-[0.08em] uppercase text-accent px-2.5 py-1 border border-[rgba(61,189,181,0.25)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-16 space-x-6">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-5 py-2 border border-border text-muted disabled:opacity-30 transition-colors hover:text-text hover:border-[rgba(232,233,238,0.4)] disabled:hover:text-muted disabled:hover:border-border"
                  >
                    Prev
                  </button>
                  <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-5 py-2 border border-border text-muted disabled:opacity-30 transition-colors hover:text-text hover:border-[rgba(232,233,238,0.4)] disabled:hover:text-muted disabled:hover:border-border"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-surface border border-border mt-16">
              <p className="font-mono text-[0.7rem] tracking-widest uppercase text-muted">No projects found in this category.</p>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-16 hidden md:block">
            <a
              href="https://github.com/rohitsriv28"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-muted py-3.5 border-b border-border transition-colors duration-200 hover:text-text hover:border-muted inline-block"
            >
              View full archive on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;