"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleScrollToTop = () => {
    const contactUsSection = document.getElementById("contact-form");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        setResponseMessage(
          result.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setLoading(false);
      setResponseMessage("An error occurred. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r text-black h-[40vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate__animated animate__fadeInUp">
            Get in Touch
          </h1>
          <p className="text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            We’d love to hear from you. Reach out to us with any questions or
            inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-blue-600 flex flex-col-reverse md:flex-row">
        <div
          data-aos="fade-left"
          className="p-6 md:w-1/2 text-white text-xl space-y-4"
        >
          <p className="text-lg flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
            <span>Address</span>
          </p>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7979584019827!2d80.24891389999999!3d12.984770699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6155089807%3A0xe8eb6a1c37f7d829!2sTicel%20Bio%20Park%20Phase%202!5e0!3m2!1sen!2sin!4v1734001537223!5m2!1sen!2sin"
              width="100%"
              height="150"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p>
              20 Sundaram 3rd Street, VYASARPADI Chennai, 600039, CHENNAI, TAMIL
              NADU
            </p>
          </div>
          <p className="text-lg flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-white" />
            <span>Phone</span>
          </p>
          <p>
            +91 8825430312
            <br />
            +91 9841014472
          </p>
          <p className="text-lg flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            <span>Email</span>
          </p>
          <p>a3expresscargo@gmail.com</p>
        </div>

        {/* Contact Form Section */}
        {/* Contact Form Section */}
        <div className="md:w-1/2 p-6" id="contact-form">
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white">
              Contact Form
            </h2>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name" className="block text-white font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-white font-medium">
                  Your Phone
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  rows="3"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {responseMessage && (
                <p className="text-center text-white mt-4">{responseMessage}</p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-bold rounded hover:bg-slate-300 transition duration-300"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-400">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            <div className="p-5 bg-gray-100 rounded-lg" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-blue-400">
                Q: What services do you offer?
              </h3>
              <p className="text-gray-700 mt-2">
                A: We offer comprehensive export/import management, global
                logistics solutions, customs brokerage, and consulting services
                tailored to your needs.
              </p>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-blue-400">
                Q: How can I contact your team?
              </h3>
              <p className="text-gray-700 mt-2">
                A: You can reach our team through our{" "}
                <button
                  onClick={handleScrollToTop}
                  className="text-blue-400 hover:underline"
                >
                  Contact Us
                </button>{" "}
                page or email us directly at contact@A3ExpressCargo.com.
              </p>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-blue-400">
                Q: Do you serve international clients?
              </h3>
              <p className="text-gray-700 mt-2">
                A: Yes, we work with clients across the globe, providing
                customized logistics and consulting services to meet
                international needs.
              </p>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-blue-400">
                Q: Are your resources free to access?
              </h3>
              <p className="text-gray-700 mt-2">
                A: Most of our resources are freely available on our website.
                However, some advanced materials, like white papers, may require
                registration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
