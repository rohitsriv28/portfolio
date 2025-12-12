import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
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

    // Enhanced HTML message with modern email design
    // Enhanced HTML message with improved design and color scheme
    const message = `
<html>
  <head>
    <style>
      /* Base styles */
      body {
        font-family: 'Segoe UI', Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
      }
      
      /* Main container */
      .email-wrapper {
        max-width: 650px;
        margin: 0 auto;
        background-color: #f9f9f9;
        padding: 20px;
      }
      
      .email-container {
        border-radius: 8px;
        overflow: hidden;
        background-color: #ffffff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }
      
      /* Header section - Updated with lighter blue gradient */
      .email-header {
        background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
        padding: 30px;
        color: white;
        text-align: center;
      }
      
      .logo-area {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      /* Improved avatar styling */
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.9);
        color: #3B82F6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
      }
      
      .header-title {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        letter-spacing: 0.5px;
        text-shadow: 0 1px 2px rgba(0,0,0,0.1);
      }
      
      .header-subtitle {
        font-size: 16px;
        font-weight: 400;
        margin: 8px 0 0;
        opacity: 0.95;
      }
      
      /* Content area */
      .email-content {
        padding: 30px;
        background-color: #ffffff;
      }
      
      .content-section {
        margin-bottom: 25px;
      }
      
      .section-title {
        font-size: 18px;
        font-weight: 600;
        color: #3B82F6;
        margin: 0 0 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #f0f0f0;
      }
      
      .content-text {
        font-size: 16px;
        line-height: 1.7;
        color: #4B5563;
        white-space: pre-wrap;
      }
      
      /* Metadata section - Updated with lighter background */
      .metadata-section {
        background-color: #F0F7FF;
        border-radius: 6px;
        padding: 16px;
        margin-top: 30px;
        border: 1px solid #E1EFFE;
      }
      
      .metadata-row {
        display: flex;
        margin-bottom: 10px;
      }
      
      .metadata-row:last-child {
        margin-bottom: 0;
      }
      
      .metadata-label {
        width: 120px;
        color: #6B7280;
        font-weight: 500;
        font-size: 14px;
      }
      
      .metadata-value {
        flex: 1;
        color: #111827;
        font-weight: 500;
        font-size: 14px;
      }
      
      /* CTA button - Updated with improved color */
      .cta-button {
        display: inline-block;
        background-color: #3B82F6;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 15px;
        margin-top: 20px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(59, 130, 246, 0.3);
      }
      
      .cta-button:hover {
        background-color: #2563EB;
      }
      
      /* Footer section */
      .email-footer {
        background-color: #F3F4F6;
        padding: 25px 30px;
        text-align: center;
        font-size: 14px;
        color: #6B7280;
        border-top: 1px solid #E5E7EB;
      }
      
      .footer-text {
        margin: 0 0 10px;
      }
      
      .footer-links {
        margin-top: 15px;
      }
      
      .footer-link {
        color: #3B82F6;
        text-decoration: none;
        margin: 0 10px;
      }
      
      /* Responsive design */
      @media only screen and (max-width: 600px) {
        .email-wrapper {
          padding: 10px;
        }
        
        .email-header,
        .email-content,
        .email-footer {
          padding: 20px;
        }
        
        .header-title {
          font-size: 20px;
        }
        
        .metadata-row {
          flex-direction: column;
        }
        
        .metadata-label {
          width: 100%;
          margin-bottom: 4px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-container">
        <!-- Header -->
        <div class="email-header">
          <div class="logo-area">
            <!-- Avatar with initials - Improved alignment and styling -->
            <div class="avatar">
              ${formData.name ? formData.name.charAt(0).toUpperCase() : "C"}
            </div>
          </div>
          <h1 class="header-title">${
            formData.subject || "New Contact From Website"
          }</h1>
          <p class="header-subtitle">A new message from ${
            formData.name || "Anonymous"
          }</p>
        </div>
        
        <!-- Content -->
        <div class="email-content">
          <div class="content-section">
            <h2 class="section-title">Message</h2>
            <div class="content-text">${formData.message.replace(
              /\n/g,
              "<br>"
            )}</div>
          </div>
          
          <div class="metadata-section">
            <div class="metadata-row">
              <div class="metadata-label">From:</div>
              <div class="metadata-value">${
                formData.name || "Not provided"
              }</div>
            </div>
            <div class="metadata-row">
              <div class="metadata-label">Email:</div>
              <div class="metadata-value">${formData.email}</div>
            </div>
            <div class="metadata-row">
              <div class="metadata-label">Date:</div>
              <div class="metadata-value">${new Date().toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}</div>
            </div>
          </div>
          
          <a href="mailto:${formData.email}" class="cta-button">Reply to ${
      formData.name || "this message"
    }</a>
        </div>
        
        <!-- Footer -->
        <div class="email-footer">
          <p class="footer-text">This is an automated email sent from your website contact form.</p>
          <p class="footer-text">© ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
          <div class="footer-links">
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;

    // Make sure the template parameters match what your EmailJS template expects
    const templateParam = {
      subject: formData.subject || "New Contact Form Submission",
      message: message,
      to_email: formData.email,
      from_name: formData.name,
      reply_to: formData.email,
    };

    try {
      // Using EmailJS
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
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 text-white relative overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300">
            Let's collaborate on your next project
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col items-center lg:flex-row gap-12">
          {/* Left Side (Contact Details) */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-white text-xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Based In</h3>
                  <p className="text-gray-400">
                    Raxaul, India | Birgunj, Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-white text-xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-400">+977 9811209589</p>
                </div>
              </div>
            </div> */}

            <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white text-xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Prefer to reach out? Mail me at
                  </h3>
                  <p className="text-gray-400">rohitraj2002ind@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Contact Form) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-800 p-8 rounded-xl backdrop-blur-lg bg-opacity-80">
              <h3 className="text-2xl font-bold mb-4">Send me a message</h3>
              <p className="text-gray-400 mb-8">
                Have a project in mind or want to discuss collaboration
                opportunities? Drop me a message and I'll get back to you as
                soon as possible.
              </p>

              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-lg mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
                  There was a problem sending your message. Please try again.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-400 block mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-400 block mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm text-gray-400 block mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject goes here"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-400 block mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
