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
      imageSrc: "services/logistics.jpg",
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
      description: "We offer state-of-the-art warehousing solutions designed to meet the needs of modern businesses.",
      imageSrc: "services/warehouse.jpg",
      backgroundColor: "#fcf3ed",
    },
    {
      title: "Freight Forwarding",
      description: "A3 Express Cargo offers global freight forwarding services at competitive rates.",
      imageSrc: "services/freight-forwarding.png",
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
      imageSrc: "services/packing.png",
      backgroundColor: "#fff7d4",
    }
  ];

  return (
    <>
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
    </>
  );
};

export default ShippingServices;
