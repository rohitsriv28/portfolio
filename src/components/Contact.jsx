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

    console.log({ formData });

    // Enhanced HTML message that looks more like a received email
    const message = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #f5f5f5;
          }
          .email-container {
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .email-header {
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
          }
          .subject-line {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin: 0;
          }
          .email-metadata {
            color: #757575;
            font-size: 13px;
            margin-top: 8px;
          }
          .sender-info {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #4F46E5;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 10px;
          }
          .sender-name {
            font-weight: bold;
          }
          .email-body {
            padding: 20px;
            background-color: #ffffff;
          }
          .message-content {
            white-space: pre-wrap;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }
          .email-footer {
            font-size: 12px;
            color: #757575;
            padding: 10px 20px 20px;
            background-color: #ffffff;
          }
          .reply-button {
            display: inline-block;
            background-color: #f0f0f0;
            color: #333;
            padding: 8px 16px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            margin-top: 15px;
            margin-bottom: 15px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1 class="subject-line">${
              formData.subject || "Contact Form Submission"
            }</h1>
            <div class="email-metadata">
              <div class="sender-info">
                <div class="avatar">${
                  formData.name ? formData.name.charAt(0).toUpperCase() : "U"
                }</div>
                <div>
                  <div class="sender-name">${formData.name} &lt;${
      formData.email
    }&gt;</div>
                  <div>to me</div>
                </div>
              </div>
              <div style="margin-top: 10px;">
                ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
          
          <div class="email-body">
            <div class="message-content">
              ${formData.message.replace(/\n/g, "<br>")}
            </div>
            
            <a href="mailto:${formData.email}" class="reply-button">Reply</a>
          </div>
          
          <div class="email-footer">
            <div>This message was sent from the contact form on your website.</div>
            <div style="margin-top: 5px;">Please note that this sender's email address is: ${
              formData.email
            }</div>
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
