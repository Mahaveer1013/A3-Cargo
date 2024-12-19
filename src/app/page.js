"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactBanner from "../components/ContactBanner";
import CountUp from 'react-countup';
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("home-about");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans antialiased">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-500">
          <DotLottieReact
            src="https://lottie.host/5adb5b7e-0ec7-44db-82c8-ee22ecf97ccb/pHm7cwkXG2.lottie"
            loop
            autoplay
            className="absolute inset-0 w-full h-full opacity-30 transform scale-110"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            <span className="block">Global Reach,</span>
            <span className="block text-blue-200">Local Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Delivering excellence in export and logistics since 2017
          </p>
          <div className="space-x-4">
            <button
              onClick={scrollToAboutUs}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg"
            >
              Discover More
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section with Gradient Background */}
      <section id="home-about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  About Us
                </h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                A3 Express Cargo is a certified exporter, providing global services with 
                a strong presence in Malaysia, Singapore, Sri Lanka, and France.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2017, our mission is to exceed customer expectations through 
                sustainable practices and innovative solutions.
              </p>
              <button className="group flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700">
                <span>Learn more about our journey</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image2.webp"
                  alt="About Us"
                  width={1000}
                  height={1000}
                  className="w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Card Hover Effects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Export Services",
                description: "Comprehensive export services to global destinations.",
                img: "/services/export.png",
                icon: "🌐"
              },
              {
                title: "Logistics",
                description: "Efficient and reliable logistics management.",
                img: "/services/logistics.png",
                icon: "🚚"
              },
              {
                title: "Packing",
                description: "Superior packing to ensure the safety of your products.",
                img: "/services/packing.png",
                icon: "📦"
              },
              {
                title: "Consulting",
                description: "Expert guidance for seamless import/export processes.",
                img: "/services/consulting.png",
                icon: "💡"
              },
              {
                title: "Warehousing",
                description: "State-of-the-art warehousing solutions.",
                img: "/services/warehousing.png",
                icon: "🏭"
              },
              {
                title: "Freight Forwarding",
                description: "Global freight forwarding at competitive rates.",
                img: "/services/frieght.png",
                icon: "✈️"
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <button className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700 flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section ref={ref} className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Our Achievements
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 500, label: "Happy Clients", suffix: "+" },
              { end: 1200, label: "Successful Shipments", suffix: "+" },
              { end: 99, label: "Customer Satisfaction", suffix: "%" },
              { end: 20, label: "Years of Excellence", suffix: "+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl lg:text-6xl font-bold text-blue-200 mb-4">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-xl text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Global Expertise",
                description: "Decades of experience in global trade.",
                icon: "🌍"
              },
              {
                title: "Affordable Pricing",
                description: "Competitive rates without compromising quality.",
                icon: "💰"
              },
              {
                title: "Reliable Services",
                description: "On-time delivery with exceptional reliability.",
                icon: "⭐"
              },
              {
                title: "Sustainability",
                description: "Eco-friendly practices for a greener planet.",
                icon: "🌱"
              }
            ].map((reason, index) => (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};

export default Home;