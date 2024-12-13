"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactBanner from "../../components/ContactBanner";
import Image from "next/image";
import servicesData from "@/lib/services.json";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
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
          {servicesData.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
            >
              <Image
                width={1000}
                height={1000}
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-500">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactBanner />
    </>
  );
};

export default Services;
