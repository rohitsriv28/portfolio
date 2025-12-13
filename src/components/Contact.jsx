import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
<html>
  <body>
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Subject:</strong> ${formData.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message.replace(/\n/g, "<br>")}</p>
  </body>
</html>
`;

    const templateParam = {
      subject: formData.subject || "New Contact Form Submission",
      message: message,
      to_email: formData.email,
      from_name: formData.name,
      reply_to: formData.email,
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParam,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="pt-8 pb-20 bg-slate-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-sm">
            <span className="text-pink-600 dark:text-pink-400 font-medium text-sm">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Contact Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Have a project in mind or want to discuss collaboration opportunities?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side (Contact Details) */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl hover:border-indigo-500/50 transition-all duration-300 group border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
              <div className="flex items-start gap-5">
                <div className="bg-indigo-100 dark:bg-indigo-600/20 p-4 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">Raxaul, India | Birgunj, Nepal</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 group border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
              <div className="flex items-start gap-5">
                <div className="bg-purple-100 dark:bg-purple-600/20 p-4 rounded-xl text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 break-all">rohitraj2002ind@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden glass-card mt-8 hidden lg:block border border-slate-200 dark:border-white/10">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 animate-pulse-glow" />
               <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                  <p className="text-slate-500 dark:text-slate-300 italic">"The only way to do great work is to love what you do."</p>
               </div>
            </div>
          </div>

          {/* Right Side (Contact Form) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send me a message</h3>
              
              {submitStatus === "success" && (
                <div className="bg-green-100 dark:bg-green-500/10 border border-green-500/50 text-green-700 dark:text-green-400 p-4 rounded-xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Thank you! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 dark:bg-red-500/10 border border-red-500/50 text-red-700 dark:text-red-400 p-4 rounded-xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Something went wrong. Please try again.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-slate-600 dark:text-slate-400 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-slate-600 dark:text-slate-400 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-slate-600 dark:text-slate-400 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-slate-600 dark:text-slate-400 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your project..."
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-bold shadow-lg shadow-indigo-500/25 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
