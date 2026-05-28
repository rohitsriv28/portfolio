import React, { useState, useEffect, useCallback } from "react";
import { Loader } from "lucide-react";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { experienceRef, educationRef } from "../config/firebase.config";
import Reveal from "./Reveal";

const Qualifications = () => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    let expLoaded = false;
    let eduLoaded = false;

    const checkLoaded = () => {
      if (expLoaded && eduLoaded) {
        setLoading(false);
      }
    };

    try {
      const expQuery = query(experienceRef, orderBy("order", "asc"));
      const unsubscribeExp = onSnapshot(expQuery, (snapshot) => {
        setExperience(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        expLoaded = true;
        checkLoaded();
      }, (err) => {
        console.error("Experience error", err);
        setError("Failed to load experience");
        expLoaded = true;
        checkLoaded();
      });

      const eduQuery = query(educationRef, orderBy("order", "asc"));
      const unsubscribeEdu = onSnapshot(eduQuery, (snapshot) => {
        setEducation(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        eduLoaded = true;
        checkLoaded();
      }, (err) => {
        console.error("Education error", err);
        setError("Failed to load education");
        eduLoaded = true;
        checkLoaded();
      });

      return () => {
        unsubscribeExp();
        unsubscribeEdu();
      };
    } catch (err) {
      console.error(err);
      setError("Failed to setup real-time updates.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = fetchData();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [fetchData]);

  return (
    <section className="py-[7rem] px-[2.5rem] border-b border-border" id="qualification">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-accent">
            02. Path
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Experience &amp; <em className="italic text-accent">Education</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          {loading ? (
            <div className="flex justify-center items-center min-h-[30vh] mt-16">
              <div className="text-center">
                <Loader className="animate-spin h-8 w-8 mx-auto text-accent mb-4" />
                <p className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-muted">Loading history...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center min-h-[30vh] mt-16">
              <div className="text-center">
                <p className="text-red-500 mb-4 font-mono text-sm">{error}</p>
                <button onClick={fetchData} className="font-mono text-xs tracking-widest uppercase bg-transparent border border-accent text-accent px-6 py-2 hover:bg-accent hover:text-bg transition-colors">
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mt-16 max-w-[1200px]">
              
              {/* Left col: Experience */}
              <div className="md:border-r md:border-border md:pr-16">
                <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-faint pb-6 border-b border-border mb-8">
                  Professional
                </div>

                {experience.map((exp, index) => {
                  const isLast = index === experience.length - 1;
                  return (
                    <div key={exp.id} className={`mb-10 pb-10 ${isLast ? 'border-b-0' : 'border-b border-border-soft'}`}>
                      <div className="font-mono text-[0.62rem] tracking-[0.1em] text-accent mb-[0.55rem]">
                        {exp.date}
                      </div>
                      <div className="font-serif text-[1.2rem] text-text mb-[0.2rem] leading-[1.3]">
                        {exp.role}
                      </div>
                      <div className="font-mono text-[0.7rem] text-muted mb-[0.75rem] tracking-[0.05em]">
                        {exp.org}
                      </div>
                      <p className="font-sans text-[0.84rem] leading-[1.82] text-[rgba(124,128,145,0.9)]">
                        {exp.description}
                      </p>
                      {exp.badge && (
                        <div className={`inline-block mt-[0.75rem] font-mono text-[0.58rem] tracking-[0.1em] uppercase px-[0.6rem] py-[0.2rem] border ${exp.badgeAccent ? 'border-accent text-accent' : 'border-[rgba(124,128,145,0.4)] text-muted'}`}>
                          {exp.badge}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {experience.length === 0 && (
                  <p className="font-mono text-xs text-muted">No experience entries found.</p>
                )}
              </div>

              {/* Right col: Education */}
              <div className="md:pl-16">
                <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-faint pb-6 border-b border-border mb-8">
                  Education
                </div>

                {education.map((edu, index) => {
                  const isLast = index === education.length - 1;
                  return (
                    <div key={edu.id} className={`mb-10 pb-10 ${isLast ? 'border-b-0' : 'border-b border-border-soft'}`}>
                      <div className="font-mono text-[0.62rem] tracking-[0.1em] text-accent mb-[0.55rem]">
                        {edu.date}
                      </div>
                      <div className="font-serif text-[1.2rem] text-text mb-[0.2rem] leading-[1.3]">
                        {edu.degree}
                      </div>
                      <div className="font-mono text-[0.7rem] text-muted mb-[0.75rem] tracking-[0.05em]">
                        {edu.institution}
                      </div>
                      <p className="font-sans text-[0.84rem] leading-[1.82] text-[rgba(124,128,145,0.9)]">
                        {edu.description}
                      </p>
                      {edu.badge && (
                        <div className="inline-block mt-[0.75rem] font-mono text-[0.58rem] tracking-[0.1em] uppercase px-[0.6rem] py-[0.2rem] border border-accent text-accent">
                          {edu.badge}
                        </div>
                      )}
                    </div>
                  );
                })}

                {education.length === 0 && (
                  <p className="font-mono text-xs text-muted">No education entries found.</p>
                )}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Qualifications;
