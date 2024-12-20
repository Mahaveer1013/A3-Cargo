"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

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
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="font-sans overflow-hidden">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-950 to-blue-500 text-white h-[calc(100vh-64px)] flex flex-col justify-center items-center relative overflow-hidden">
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
                src="/about.avif"
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
                {inView ? <CountUp start={0} end={500} duration={5} /> : 0}
              </h3>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? <CountUp start={0} end={1200} duration={5} /> : 0}
              </h3>
              <p className="text-lg">Successful Shipments</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? <CountUp start={0} end={99} duration={5} /> : 0}%
              </h3>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? <CountUp start={0} end={20} duration={5} /> : 0}+
              </h3>
              <p className="text-lg">Years of Excellence</p>
            </div>
          </div>
        </section>
        <h2 className="text-4xl font-bold text-center mb-8 text-black">
          The Smart Choice for Your Needs
        </h2>
        <div className="container">
          <div className="services">
            {[
              {
                icon: "📦",
                title: "Worldwide Expertise",
                description:
                  "Worldwide Expertise in Seamless Shipping Solutions",
                image: "services/affor.png",
              },
              {
                icon: "⏱",
                title: "Quick",
                description:
                  "Fastest local deliveries to multiple destinations",
                image: "services/quick.png",
              },
              {
                icon: "🚚",
                title: "Affordable",
                description: "Competitive rates without compromising quality",
                image: "services/affor.png",
              },
              {
                icon: "🌍",
                title: "Sustainability",
                description: "Eco-friendly practices for a greener planet.",
                image: "services/ecofriendly.png",
              },
            ].map((service, index) => (
              <div key={index} className="service-card scroll-animate">
                <div className="icon" style={{ textAlign: "center" }}>
                  <span>
                    {service.icon} {service.title}
                  </span>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <p>{service.description}</p>
                <Link href="/services" style={{ color: "blue" }}>
                  Explore &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="footer scroll-animate">
            &copy; 2024 Smart Shipping Services. All rights reserved.
          </div>
        </div>
        <style jsx>{`
          .container {
            text-align: center;
          }

          .services {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .service-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 250px;
            padding: 1rem;
            text-align: left;
            overflow: hidden;
            transform: translateY(50px);
            opacity: 0;
            animation: fadeInUp 1.5s ease forwards;
          }

          .service-card:nth-child(1) {
            animation-delay: 0.2s;
          }
          .service-card:nth-child(2) {
            animation-delay: 0.4s;
          }
          .service-card:nth-child(3) {
            animation-delay: 0.6s;
          }
          .service-card:nth-child(4) {
            animation-delay: 0.8s;
          }

          .service-card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 0.5rem 0;
          }

          .service-card h2 {
            font-size: 1.2rem;
            margin: 0.5rem 0;
          }

          .service-card p {
            font-size: 0.9rem;
            color: #666;
            line-height: 1.6;
          }

          .service-card a {
            color: #5a67d8;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 0.5rem;
            transition: color 0.3s ease;
          }

          .service-card a:hover {
            color: #3b4ccc;
          }

          .scroll-animate {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }

          @keyframes fadeInUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .footer {
            margin-top: 2rem;
            color: #666;
          }
        `}</style>
        <Footer />
      </div>
    </>
  );
};

export default Home;
