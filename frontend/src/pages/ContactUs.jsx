import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
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

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-500 text-white h-[40vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeInUp">
            Get in Touch
          </h1>
          <p className="text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            We’d love to hear from you. Reach out to us with any questions or
            inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-white" id="contact-form">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">Contact Form</h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                    rows="6"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-6">
                Our Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="text-blue-600 text-2xl mr-4"
                  />
                  <p className="text-lg text-gray-700">
                    +91 8825430312, +91 9841014472
                  </p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-600 text-2xl mr-4"
                  />
                  <p className="text-lg text-gray-700">
                    a3expresscargo@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-blue-600 text-2xl mr-4"
                  />
                  <p className="text-lg text-gray-700">
                    20 Sundaram 3rd Street FIRST LINE,VYASARPADI Chennai,
                    600039, CHENNAI, TAMIL NADU
                  </p>
                </div>
              </div>
            </div>
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

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
            Why Reach Out To Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customer Support",
                description:
                  "Our dedicated team is always ready to assist you.",
              },
              {
                title: "Experienced Staff",
                description:
                  "Speak with our experts in the logistics industry.",
              },
              {
                title: "Global Reach",
                description:
                  "We serve clients across the world with precision.",
              },
              {
                title: "Fast Response",
                description:
                  "We respond to all inquiries quickly and efficiently.",
              },
            ].map((reason, index) => (
              <div
                key={reason.title}
                className="bg-white border p-6 rounded shadow-md hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={`${200 * (index + 1)}`}
              >
                <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
