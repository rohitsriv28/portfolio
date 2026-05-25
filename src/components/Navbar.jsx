import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "qualification", label: "Experience" },
  { id: "skill", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["main", "about", "qualification", "skill", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-[2.5rem] py-[1.25rem] transition-all duration-300 ${isScrolled ? "bg-[rgba(14,15,19,0.96)] backdrop-blur-[14px] border-b border-border" : "bg-transparent border-b border-transparent"
          }`}
      >
        <button onClick={() => scrollToSection("main")} className="font-mono text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-text">
          Rohit<span className="text-accent">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-[2.5rem] list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-[0.68rem] tracking-[0.1em] uppercase transition-colors duration-200 relative pb-1 after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:bg-accent after:transition-all after:duration-200 after:ease-custom-out ${activeSection === item.id ? "text-text after:w-full" : "text-muted after:w-0 hover:text-text hover:after:w-full"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block font-mono text-[0.68rem] tracking-[0.1em] uppercase text-bg bg-accent px-[1.25rem] py-[0.5rem] border border-accent transition-colors duration-200 hover:bg-transparent hover:text-accent"
        >
          Hire Me
        </button>

        <button
          className="md:hidden text-text z-[201]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[199] bg-bg flex flex-col items-center justify-center gap-[2.5rem] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="font-serif text-[2.5rem] text-text transition-colors duration-200 hover:text-accent"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("contact")}
          className="font-serif text-[2.5rem] text-text transition-colors duration-200 hover:text-accent"
        >
          Say Hello
        </button>
      </div>
    </>
  );
};

export default Navbar;
