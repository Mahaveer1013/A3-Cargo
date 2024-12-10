import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import exportImage from "../assets/services/export.png";
import importImage from "../assets/services/import.png";
import logisticsImage from "../assets/services/logistics.png";
import customsImage from "../assets/services/customs.png";
import consultingImage from "../assets/services/consulting.png";
import riskImage from "../assets/services/risk-management.png";
import ContactBanner from "../components/ContactBanner";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration of 1000ms
  }, []);

  return (
    <>
      <section className="py-16 text-center bg-gradient-to-r from-blue-800 to-blue-600">
        <h1 className="text-5xl font-bold text-white">Our Expert Services</h1>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
          We offer a wide range of services tailored to streamline global trade,
          providing solutions that meet the needs of businesses of all sizes.
          Explore our expertise.
        </p>
      </section>

      <section className="py-16 px-6 lg:px-24 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Service 1 */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
          >
            <img
              src={exportImage}
              alt="Export Management"
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-500">
                Export Management
              </h2>
              <p className="text-gray-600 mt-2">
                We offer comprehensive export management services, helping you
                navigate international regulations, ensure compliance, and
                streamline the entire process from start to finish.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
          >
            <img
              src={importImage}
              alt="Import Management"
              className="w-full h-48 group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-500">
                Import Management
              </h2>
              <p className="text-gray-600 mt-2">
                Our import management services ensure smooth and hassle-free
                processes for bringing goods into your country, from customs
                brokerage to final delivery, with complete regulatory
                compliance.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
          >
            <img
              src={logisticsImage}
              alt="Logistics and Freight"
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-500">
                Logistics and Freight
              </h2>
              <p className="text-gray-600 mt-2">
                With our global logistics network, we ensure that your goods are
                delivered efficiently and securely to any destination. Our
                freight services guarantee timely and cost-effective solutions.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 4 */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
          >
            <img
              src={customsImage}
              alt="Customs Brokerage"
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-500">
                Customs Brokerage
              </h2>
              <p className="text-gray-600 mt-2">
                Our customs brokerage services ensure that your imports and
                exports comply with all relevant regulations. We manage
                documentation, duties, and tariffs to keep your business running
                smoothly.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 5 */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
          >
            <img
              src={consultingImage}
              alt="Consulting Services"
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-500">
                Consulting Services
              </h2>
              <p className="text-gray-600 mt-2">
                Our experienced consultants provide strategic guidance to help
                your business navigate global trade complexities, from risk
                management to identifying new market opportunities.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 6 */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
          >
            <img
              src={riskImage}
              alt="Risk Management"
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-500">
                Risk Management
              </h2>
              <p className="text-gray-600 mt-2">
                We offer comprehensive risk management services to protect your
                international business from potential threats. From financial
                risks to geopolitical uncertainties, we help mitigate
                challenges.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
};

export default Services;
