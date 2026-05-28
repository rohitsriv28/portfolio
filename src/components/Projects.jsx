import { useState, useEffect, useCallback } from "react";
import { Loader } from "lucide-react";
import { onSnapshot } from "firebase/firestore";
import { projectsRef } from "../config/firebase.config";
import Reveal from "./Reveal";

const CodeVisual = () => (
  <div className="p-6 w-full h-full flex flex-col justify-center gap-1.5 bg-card border border-border">
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap"><span className="italic text-muted/50">// State Management</span></div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap"><span className="text-[#FF7B72]">const</span> syncData = <span className="text-[#79C0FF]">useCallback</span>(<span className="text-[#FF7B72]">async</span> () ={'>'} {'{'}</div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap">  <span className="text-[#79C0FF]">setLoading</span>(<span className="text-accent">true</span>);</div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap">  <span className="text-[#FF7B72]">try</span> {'{'}</div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap">    <span className="text-[#FF7B72]">await</span> <span className="text-[#79C0FF]">updateFirestore</span>(data);</div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap">  {'}'} <span className="text-[#FF7B72]">catch</span> (err) {'{'}</div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap">    <span className="text-[#79C0FF]">rollback</span>(previousState);</div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap">  {'}'}</div>
    <div className="font-mono text-[0.68rem] text-muted/60 whitespace-nowrap">{'}'}, [data]);</div>
  </div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMobile = windowWidth < 768;

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

            if (timeB !== timeA) return timeB - timeA;
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
      setError("Failed to set up real-time updates.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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

  let currentProjects = filteredProjects;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-bg border-b border-border">
        <div className="text-center">
          <Loader className="animate-spin h-10 w-10 mx-auto text-accent mb-4" />
          <p className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-muted">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-bg border-b border-border">
        <div className="text-center">
          <p className="text-red-500 mb-4 font-mono text-sm">{error}</p>
          <button onClick={getProjects} className="font-mono text-xs tracking-widest uppercase bg-transparent border border-accent text-accent px-6 py-2 hover:bg-accent hover:text-bg transition-colors">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-28 px-10 border-b border-border bg-surface" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-px before:bg-accent">
            Portfolio
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Selected<br /><em className="italic text-accent">Work</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Filter Tabs matching HTML specs */}
          <div className="flex justify-start mt-10 mb-12">
            <div className="border border-border flex w-fit overflow-hidden">
              {["All", "Professional", "Personal", "Academic"].map((tab, idx) => {
                const isActive = activeTab === tab;
                const isLast = idx === 3;
                return (
                  <button
                    key={tab}
                    className={`font-mono text-[0.65rem] tracking-[0.1em] uppercase px-6 py-2.5 transition-colors duration-200 cursor-pointer ${
                      isActive ? "bg-card text-accent" : "bg-transparent text-muted hover:bg-card hover:text-accent"
                    } ${!isLast ? "border-r border-border" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden">
              {currentProjects.map((project) => {
                const isExpenseTracker = project.title.toLowerCase().includes("expense tracker") || project.title.toLowerCase().includes("cashflow");
                const isFeatured = isExpenseTracker;

                if (isFeatured) {
                  return (
                    <div key={project.id} className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-surface p-9 relative overflow-hidden group hover:bg-card transition-colors duration-200 items-stretch">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 ease-custom-out group-hover:scale-x-100 z-10"></div>
                      
                      {/* Left: Content */}
                      <div className="flex flex-col gap-3.5 z-10">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-accent">
                          {project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : "Personal"} · PWA · Live
                        </div>
                        <h3 className="font-serif text-[1.45rem] leading-[1.15] text-text">
                          {project.title}
                        </h3>
                        <p className="font-sans text-[0.84rem] leading-[1.78] text-muted">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-[0.38rem] mt-2">
                          {project.tags?.map((tag, i) => (
                            <span key={i} className="font-mono text-[0.58rem] tracking-[0.05em] px-[0.55rem] py-[0.18rem] border border-border text-muted">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4 items-center pt-4 border-t border-border mt-auto">
                          {(project.link || project.liveLink) && (
                            <a href={project.link || project.liveLink} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.62rem] tracking-[0.08em] uppercase text-muted flex items-center gap-1.5 transition-colors duration-200 hover:text-accent">
                              ↗ Live
                            </a>
                          )}
                          {project.gitLink && (
                            <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.62rem] tracking-[0.08em] uppercase text-muted flex items-center gap-1.5 transition-colors duration-200 hover:text-accent">
                              ↗ GitHub
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: Visual */}
                      <div className="relative h-[220px] lg:h-full overflow-hidden flex items-center justify-center z-10">
                        {project.image ? (
                          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-top border border-border" />
                        ) : (
                          <CodeVisual />
                        )}
                      </div>
                    </div>
                  );
                }

                // Standard Card
                return (
                  <div key={project.id} className="bg-surface relative overflow-hidden group hover:bg-card transition-colors duration-200 flex flex-col h-full min-h-[280px]">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 ease-custom-out group-hover:scale-x-100 z-10"></div>
                    
                    {project.image && (
                      <div className="relative overflow-hidden h-[160px] w-full border-b border-border z-10">
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-top" />
                      </div>
                    )}
                    
                    <div className="p-9 flex flex-col gap-3.5 flex-1 z-10">
                      <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-accent">
                        {project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : "Personal"}
                      </div>
                    <h3 className="font-serif text-[1.45rem] leading-[1.15] text-text z-10">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[0.84rem] leading-[1.78] text-muted z-10">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-[0.38rem] mt-2 z-10">
                      {project.tags?.map((tag, i) => (
                        <span key={i} className="font-mono text-[0.58rem] tracking-[0.05em] px-[0.55rem] py-[0.18rem] border border-border text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                      <div className="flex gap-4 items-center pt-4 border-t border-border mt-auto z-10">
                        {(project.link || project.liveLink) && (
                          <a href={project.link || project.liveLink} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.62rem] tracking-[0.08em] uppercase text-muted flex items-center gap-1.5 transition-colors duration-200 hover:text-accent">
                            ↗ Live
                          </a>
                        )}
                        {project.gitLink && (
                          <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.62rem] tracking-[0.08em] uppercase text-muted flex items-center gap-1.5 transition-colors duration-200 hover:text-accent">
                            ↗ GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface border border-border mt-16">
              <p className="font-mono text-[0.7rem] tracking-widest uppercase text-muted">No projects found in this category.</p>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 text-left">
            <a
              href="https://github.com/rohitsriv28"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-muted pb-1 border-b border-border transition-colors duration-200 hover:text-accent hover:border-accent inline-flex items-center gap-1.5"
            >
              All Projects on GitHub →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;