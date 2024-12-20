"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ShippingServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Logistics",
      description: "Simplify A3 Express Cargo offers efficient and reliable logistics management services.",
      imageSrc: "services/Logistics.jpg",
      backgroundColor: "#edf6fc",
    },
    {
      title: "International Shipping",
      description: "Ship across the border to 220+ countries and territories with end-to-end support",
      imageSrc: "services/download1.png",
      backgroundColor: "#f3f2ff",
    },
    {
      title: "Warehousing",
      description: "We offers state-of-the-art warehousing solutions designed to meet the needs of modern businesses.",
      imageSrc: "services/warehouse.jpg",
      backgroundColor: "#fcf3ed",
    },
    {
      title: "Freight Forwarding",
      description: "A3 Express Cargo offers global freight forwarding services at competitive rates.",
      imageSrc: "services/Freight Forwarding.png",
      backgroundColor: "#eafcf6",
    },
    {
      title: "Consulting",
      description: "Consulting services ensure that businesses navigate the complexities of international trade with ease.",
      imageSrc: "services/consulting.jpg",
      backgroundColor: "#f8e8f7",
    },
    {
      title: "Packing",
      description: "A3 Express Cargo offers superior packing services to ensure the safety of your products.",
      imageSrc: "services/Packing.png",
      backgroundColor: "#fff7d4",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="mb-24 last:mb-0"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 p-8 rounded-2xl transition-transform duration-300 hover:scale-[1.02]`}
              style={{ backgroundColor: service.backgroundColor }}
            >
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                <button className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2024 Smart Shipping Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShippingServices;