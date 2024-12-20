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
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
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
        setFormData({ name: "", email: "", phone: "", message: "" });
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
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-[40vh] flex flex-col justify-center items-center relative">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate_animated animate_fadeInUp">
            Get in Touch
          </h1>
          <p className="text-lg mb-8 animate_animated animatefadeInUp animate_delay-1s">
            We’d love to hear from you. Reach out to us with any questions or inquiries.
          </p>
        </div>
        <div className="absolute inset-0 opacity-50">
          <DotLottieReact
            src="https://lottie.host/d325736e-d46f-43b1-9258-d6e85ec8d252/53HjYp2YYz.lottie"
            loop
            autoplay
          />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-blue-600 flex flex-col md:flex-row">
        <div
          data-aos="fade-left"
          className="p-8 md:w-1/2 text-white space-y-6 flex flex-col justify-center items-start"
        >
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-2xl" />
            <div>
              <h3 className="text-lg font-bold">Address</h3>
              <p>
                20 Sundaram 3rd Street, VYASARPADI Chennai, 600039, CHENNAI, TAMIL NADU
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p>+91 8825430312</p>
              <p>+91 9841014472</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <p>a3expresscargo@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 p-8 bg-white" id="contact-form">
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-blue-600">
              Contact Form
            </h2>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name" className="block text-blue-600 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-blue-600 font-medium">
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-blue-600 font-medium">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-blue-600 font-medium">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring focus:ring-blue-300"
                  rows="3"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {responseMessage && (
                <p className="text-center text-blue-600 mt-4">{responseMessage}</p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;