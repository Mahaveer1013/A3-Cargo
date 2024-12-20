"use client";

import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ContactBanner from "../../components/ContactBanner";
import { Globe, Zap, Users, Shield } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute w-full h-full">
      {/* Animated circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    { icon: Globe, label: "Global Reach", color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: Zap, label: "Fast Delivery", color: "text-yellow-500", bgColor: "bg-yellow-50" },
    { icon: Users, label: "Expert Team", color: "text-green-500", bgColor: "bg-green-50" },
    { icon: Shield, label: "Secure Service", color: "text-purple-500", bgColor: "bg-purple-50" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AnimatedBackground />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8" data-aos="fade-right">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforming Global
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}Trade Logistics
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We are a trusted leader in global export and import services,
                  dedicated to providing end-to-end solutions for businesses worldwide.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 sm:gap-6">
                {features.map((Feature, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center lg:items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`w-12 h-12 rounded-lg ${Feature.bgColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${Feature.color}`}>
                      <Feature.icon className="w-6 h-6" />
                    </div>

                    <span className="font-medium text-gray-900">{Feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Lottie Animation */}
            <div
              className="lg:order-2 w-full max-w-xl mx-auto"
              data-aos="fade-left"
            >
              <div className="relative w-full aspect-square bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <DotLottieReact
                  src="https://lottie.host/99a5484c-4d41-4b36-86af-6d6d32ea88c7/kUfl3vgd5n.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            Our Journey
          </h2>
          <VerticalTimeline lineColor="#E5E7EB">
            {[
              {
                year: "2020",
                title: "Industry Recognition",
                description: "Achieved multiple industry accolades for excellence in logistics and customer service.",
                icon: "🏆",
                color: "#3B82F6",
              },
              {
                year: "2015",
                title: "Consulting Services Launch",
                description: "Expanded our offerings with comprehensive consulting services for logistics optimization.",
                icon: "📈",
                color: "#10B981",
              },
              {
                year: "2010",
                title: "Global Expansion",
                description: "Established strategic partnerships across continents, enhancing our global presence.",
                icon: "🌍",
                color: "#8B5CF6",
              },
              {
                year: "2005",
                title: "Company Foundation",
                description: "Started our journey with a vision to revolutionize global trade logistics.",
                icon: "🚛",
                color: "#EC4899",
              },
            ].map((event, index) => (
              <VerticalTimelineElement
                key={index}
                date={event.year}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9))",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                }}
                contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.9)" }}
                iconStyle={{
                  background: event.color,
                  boxShadow: "0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)",
                }}
                
            icon={<span className="text-2xl">{event.icon}</span>}
              >
            <div className="hover:translate-y-[-2px] transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {event.description}
              </p>
            </div>
          </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </div>
      </section >

  <ContactBanner />
    </div >
  );
};

export default About;