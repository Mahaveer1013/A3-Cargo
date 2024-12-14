"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactBanner from "../components/ContactBanner";
import CountUp from 'react-countup';
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("home-about");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Set up ref and inView to detect when the Stats section is in the viewport
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  const { ref, inView: statsInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    onChange: (inView) => {
      setInView(inView);
    },
  });

  return (
    <>
      <div className="font-sans overflow-hidden">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-950 to-blue-500 text-white h-[calc(100vh-64px)] flex flex-col justify-center items-center relative overflow-hidden">
          {/* Scrolling background images */}
          {/* <div className="absolute inset-0 overflow-hidden z-0">
          <div className="infinite-scroll flex absolute inset-0 animate-scroll">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Image 1"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Image 2"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Image 3"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Image 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </div> */}

          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeInUp">
              Global Reach, Local Expertise
            </h1>
            <p className="text-lg mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Delivering excellence in export and logistics since 2017.
            </p>
            <button
              onClick={scrollToAboutUs}
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded hover:bg-gray-100 transition animate__animated animate__fadeInUp animate__delay-2s"
            >
              Learn More
            </button>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 px-6 bg-gray-50" id="home-about">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A3 Express Cargo is a certified exporter, providing global
                services with a strong presence in Malaysia, Singapore, Sri
                Lanka, and France. Founded in 2017, our mission is to exceed
                customer expectations through sustainable practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Committed to offering top-notch services, we aim to ensure
                complete customer satisfaction with a focus on quality and
                affordability.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                width={1000}
                height={1000}
                src="/image2.webp"
                alt="About Us"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 px-6 bg-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Export Services",
                  description:
                    "Comprehensive export services to global destinations.",
                  img: "/services/export.png",
                },
                {
                  title: "Logistics",
                  description: "Efficient and reliable logistics management.",
                  img: "/services/logistics.png",
                },
                {
                  title: "Packing",
                  description:
                    "Superior packing to ensure the safety of your products.",
                  img: "/services/packing.png",
                },
                {
                  title: "Consulting",
                  description:
                    "Expert guidance for seamless import/export processes.",
                  img: "/services/consulting.png",
                },
                {
                  title: "Warehousing",
                  description: "State-of-the-art warehousing solutions.",
                  img: "/services/warehousing.png",
                },
                {
                  title: "Freight Forwarding",
                  description:
                    "Global freight forwarding at competitive rates.",
                  img: "/services/frieght.png",
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="border p-6 rounded shadow-md hover:shadow-lg transition"
                  data-aos="fade-up"
                  data-aos-delay={`${200 * (index + 1)}`}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={10000}
                    height={10000}
                    className="w-full h-40 mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white" ref={ref}>
          <h2 className="text-4xl font-bold text-center mb-8 text-black">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? <CountUp start={0} end={500} duration={2} /> : 0}
              </h3>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? <CountUp start={0} end={1200} duration={2} /> : 0}
              </h3>
              <p className="text-lg">Successful Shipments</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? <CountUp start={0} end={99} duration={2} /> : 0}%
              </h3>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? <CountUp start={0} end={20} duration={2} /> : 0}+
              </h3>
              <p className="text-lg">Years of Excellence</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Global Expertise",
                  description: "Decades of experience in global trade.",
                },
                {
                  title: "Affordable Pricing",
                  description:
                    "Competitive rates without compromising quality.",
                },
                {
                  title: "Reliable Services",
                  description: "On-time delivery with exceptional reliability.",
                },
                {
                  title: "Sustainability",
                  description: "Eco-friendly practices for a greener planet.",
                },
              ].map((reason, index) => (
                <div
                  key={reason.title}
                  className="bg-white border p-6 rounded shadow-md hover:shadow-lg transition"
                  data-aos="fade-up"
                  data-aos-delay={`${200 * (index + 1)}`}
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ContactBanner />
    </>
  );
};

export default Home;
