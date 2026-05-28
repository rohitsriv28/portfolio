import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Loader } from "lucide-react";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { skillsRef } from "../config/firebase.config";
import Reveal from "./Reveal";

const GROUP_ORDER = [
  "Core Frontend",
  "Libraries & Tooling",
  "Backend & Services",
  "Dev & Other Tools",
  "Languages"
];

const Chip = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const transitionDuration = shouldReduceMotion ? 0 : 0.18;

  const baseClasses = "relative font-mono text-[0.7rem] tracking-[0.03em] px-[0.95rem] py-[0.42rem] border transition-colors cursor-default ";
  const highlightClasses = "bg-[rgba(61,189,181,0.12)] border-[rgba(61,189,181,0.5)] text-accent ";
  const standardClasses = "bg-transparent border-border text-muted hover:bg-card hover:border-[rgba(61,189,181,0.4)] hover:text-text ";

  return (
    <div 
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={baseClasses + (item.highlight ? highlightClasses : standardClasses)}>
        {item.label}
      </div>

      <AnimatePresence>
        {isHovered && item.tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: transitionDuration }}
            className="absolute bottom-[calc(100%+8px)] z-10 pointer-events-none flex flex-col items-center"
          >
            <div className="bg-card border border-border text-text font-mono text-[0.56rem] tracking-[0.05em] whitespace-nowrap px-[0.65rem] py-[0.3rem]">
              {item.tooltip}
            </div>
            {/* Tooltip triangle */}
            <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-border absolute top-full left-1/2 -translate-x-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = () => {
  const [groupedSkills, setGroupedSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSkills = useCallback(() => {
    setLoading(true);
    setError(null);

    try {
      const q = query(skillsRef, orderBy("order", "asc"));
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const skillsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          // Group by category based on GROUP_ORDER
          const groupsMap = {};
          GROUP_ORDER.forEach(g => { groupsMap[g] = []; });

          skillsData.forEach(skill => {
            if (groupsMap[skill.group]) {
              groupsMap[skill.group].push(skill);
            } else {
              // If an unknown group appears, create it at the end
              if (!groupsMap[skill.group]) {
                groupsMap[skill.group] = [];
              }
              groupsMap[skill.group].push(skill);
            }
          });

          // Convert map back to array maintaining order
          const formattedGroups = Object.keys(groupsMap)
            .filter(key => groupsMap[key].length > 0)
            .map(key => ({
              label: key,
              items: groupsMap[key]
            }));

          setGroupedSkills(formattedGroups);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching skills:", error);
          setError("Failed to load skills.");
          setLoading(false);
        }
      );
      return unsubscribe;
    } catch (error) {
      console.error("Error setting up skills listener:", error);
      setError("Failed to set up real-time updates.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = getSkills();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [getSkills]);

  return (
    <section className="py-28 px-10 border-b border-border bg-surface" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 items-start max-w-[1200px] mx-auto mt-16">
        
        {/* Left Column */}
        <div className="lg:sticky lg:top-32">
          <Reveal>
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-px before:bg-accent">
              Technical Stack
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
              What I<br /><em className="italic text-accent">Build With</em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-[0.875rem] leading-[1.88] text-muted mt-6">
              My core is the modern React ecosystem. Equally comfortable at the component architecture level and in the fine details of animation and performance. Working backend knowledge for full-stack integration context.
            </p>
          </Reveal>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-9 mt-2 lg:mt-0">
          {loading ? (
            <div className="flex justify-center items-center min-h-[30vh]">
              <div className="text-center">
                <Loader className="animate-spin h-8 w-8 mx-auto text-accent mb-4" />
                <p className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-muted">Loading stack...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center min-h-[30vh]">
              <div className="text-center">
                <p className="text-red-500 mb-4 font-mono text-sm">{error}</p>
                <button onClick={getSkills} className="font-mono text-xs tracking-widest uppercase bg-transparent border border-accent text-accent px-6 py-2 hover:bg-accent hover:text-bg transition-colors">
                  Retry
                </button>
              </div>
            </div>
          ) : (
            groupedSkills.map((group, groupIndex) => (
              <Reveal key={group.label} delay={0.2 + (groupIndex * 0.1)}>
                <div className="mb-2">
                  <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-3.5 pb-2 border-b border-border">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <Chip key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default Skills;
