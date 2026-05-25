import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section className="py-[7rem] px-[2.5rem] border-b border-border bg-surface" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-accent">
            05. Connect
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Let's <em className="italic text-accent">Talk</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 mt-16 max-w-[1200px]">
            {/* Left Info */}
            <div>
              <p className="font-sans text-[0.95rem] leading-[1.8] text-muted mb-8">
                I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <a
                href="mailto:rohitraj2002ind@gmail.com"
                className="font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] text-text block mb-12 relative w-fit after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-400 after:ease-custom-out hover:after:scale-x-100 hover:after:origin-left"
              >
                rohitraj2002ind@gmail.com
              </a>

              <div className="flex gap-6">
                <a
                  href="mailto:rohitraj2002ind@gmail.com"
                  className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
                >
                  Gmail
                </a>
                <a
                  href="https://github.com/rohitsriv28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/rohitsriv28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/_i_rohit28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted transition-colors duration-200 hover:text-accent"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-accent">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-bg border border-border text-text font-sans text-[0.9rem] px-5 py-4 outline-none transition-colors duration-200 focus:border-accent placeholder:text-[rgba(124,128,145,0.4)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-accent">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-bg border border-border text-text font-sans text-[0.9rem] px-5 py-4 outline-none transition-colors duration-200 focus:border-accent placeholder:text-[rgba(124,128,145,0.4)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-accent">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Hello..."
                    className="bg-bg border border-border text-text font-sans text-[0.9rem] px-5 py-4 outline-none transition-colors duration-200 focus:border-accent placeholder:text-[rgba(124,128,145,0.4)] resize-y"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full justify-center font-mono text-[0.72rem] tracking-[0.08em] uppercase bg-accent text-bg px-8 py-3.5 border border-accent transition-colors duration-200 inline-flex items-center gap-2 hover:bg-transparent hover:text-accent mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;