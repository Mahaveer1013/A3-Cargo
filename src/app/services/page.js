// "use client";
// import React, { useEffect, useState } from 'react';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

// const ShippingServices = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });

//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       sections.forEach((section) => {
//         const sectionTop = section.getBoundingClientRect().top;
//         const sectionBottom = section.getBoundingClientRect().bottom;

//         if (sectionTop < window.innerHeight && sectionBottom > 0) {
//           section.classList.add('visible');
//         } else {
//           section.classList.remove('visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   const ServiceSection = ({ type, title, description, imageSrc, backgroundColor, imageClass }) => (
//     <div>
//       <section
//         className={type}
//         data-aos="fade-up"
//         style={{ backgroundColor, borderRadius: '15px' }}
//       >
//         <div className="text">
//           <h1>{title}</h1>
//           <p>{description}</p>
//           <a href="#">Know more &#8594;</a>
//         </div>
//         <img
//           src={imageSrc}
//           alt={`${title} Image`}
//           className={imageClass}
//           style={{ borderRadius: '15px', maxWidth: '50%' }}
//         />

//       </section>
//     </div>
//   );

//   return (
//     <div>
//       {/* Navigation Bar */}
//       {/* <header>
//         <div className="logo">Shiprocket Shipping</div>
//         <nav className="nav-links">
//           <a href="#">Overview</a>
//           <a href="#">Same Day Delivery</a>
//           <a href="#">Doorstep Delivery</a>
//           <a href="#">Shipping Rate Calculator</a>
//           <a href="#">Blog</a>
//           <a href="#" className="start-btn">Start Shipping Now</a>
//         </nav>
//       </header> */}

//       {/* Services Sections */}
//       <ServiceSection
//         type="returns"
//         title="Logistics"
//         description="Simplify A3 Express Cargo offers efficient and reliable logistics management services."
//         imageSrc="services/Logistics.jpg"
//         backgroundColor="#edf6fc"
//         imageClass="image-left"
//       />

//       <ServiceSection
//         type="shipping"
//         title="International Shipping"
//         description="Ship across the border to 220+ countries and territories with end-to-end support"
//         imageSrc="services/download1.png"
//         backgroundColor="#f3f2ff"
//         imageClass="image-right"
//       />

//       <ServiceSection
//         type="returns"
//         title="Warehousing"
//         description="We offers state-of-the-art warehousing solutions designed to meet the needs of modern businesses."
//         imageSrc="services/warehouse.jpg"
//         backgroundColor="#fcf3ed"
//         imageClass="image-left"
//       />

//       <ServiceSection
//         type="shipping"
//         title="Freight Forwarding"
//         description="A3 Express Cargo offers global freight forwarding services at competitive rates."
//         imageSrc="services/Freight Forwarding.png"
//         backgroundColor="#eafcf6"
//         imageClass="image-right"
//       />

//       <ServiceSection
//         type="returns"
//         title="Consulting"
//         description="Consulting services ensure that businesses navigate the complexities of international trade with ease."
//         imageSrc="services/consulting.jpg"
//         backgroundColor="#f8e8f7"
//         imageClass="image-left"
//       />

//       <ServiceSection
//         type="shipping"
//         title="Packing"
//         description="A3 Express Cargo offers superior packing services to ensure the safety of your products."
//         imageSrc="services/Packing.png"
//         backgroundColor="#fff7d4"
//         imageClass="image-right"
//       />

//       {/* Services Cards Section */}
//       <div className="container">
//         <h1 className="scroll-animate">
//           <img src="https://img.icons8.com/ios/50/000000/box.png" alt="icon" />
//           The Smart Choice for Your Needs
//         </h1>

        
//         <div className="footer scroll-animate">
//           &copy; 2024 Smart Shipping Services. All rights reserved.
//         </div>
//       </div>

//       {/* Global Styles */}
//       <style jsx global>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//           font-family: Arial, sans-serif;
//         }

//         body {
//           background-color: #fdfdfd;
//           scroll-behavior: smooth;
//         }

//         /* Navigation Bar Styles */
//         header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 10px 20px;
//           background-color: #fff;
//           box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//         }

//         .logo {
//           font-weight: bold;
//           color: #333;
//           font-size: 1.2rem;
//         }

//         .nav-links a {
//           text-decoration: none;
//           color: #333;
//           margin: 0 15px;
//           font-size: 14px;
//           transition: color 0.3s;
//         }

//         .nav-links a:hover {
//           color: #7a4bd8;
//         }

//         .start-btn {
//           background-color: #7a4bd8;
//           color: white;
//           border-radius: 20px;
//           padding: 5px 15px;
//           text-decoration: none;
//         }

//         /* Section Styles */
//         section {
//           margin: 50px auto;
//           max-width: 1100px;
//           padding: 30px;
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .returns .text, .shipping .text {
//           max-width: 40%;
//         }

//         section h1 {
//           font-size: 2.5rem;
//           margin-bottom: 10px;
//         }

//         section p {
//           color: #555;
//           margin-bottom: 20px;
//         }

//         section a {
//           color: #7a4bd8;
//           text-decoration: none;
//           font-weight: bold;
//         }

//         .image-left, .image-right {
//           transform: translateX(-100%);
//           opacity: 0;
//           transition: transform 1s ease-out, opacity 1s ease-out;
//         }

//         .visible .image-left {
//           transform: translateX(0);
//           opacity: 1;
//         }

//         .visible .image-right {
//           transform: translateX(0);
//           opacity: 1;
//         }

//         /* Footer and Scroll Button Styles */
//         .footer-btn {
//           display: block;
//           margin: 30px auto;
//           text-align: center;
//           background-color: #7a4bd8;
//           color: white;
//           padding: 10px 30px;
//           text-decoration: none;
//           border-radius: 20px;
//           max-width: 200px;
//           font-weight: bold;
//         }

//         .scroll-btn {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           background-color: #7a4bd8;
//           color: white;
//           padding: 10px;
//           border-radius: 50%;
//           font-size: 18px;
//           cursor: pointer;
//           z-index: 1000;
//         }


//         .services {
//           display: flex;
//           justify-content: space-around;
//           flex-wrap: wrap;
//           gap: 1rem;
//         }

//         .service-card {
//           background: white;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           width: 250px;
//           padding: 1rem;
//           text-align: left;
//           overflow: hidden;
//           transform: translateY(50px);
//           opacity: 0;
//           animation: fadeInUp 1.5s ease forwards;
//         }

//         .service-card:nth-child(1) { animation-delay: 0.2s; }
//         .service-card:nth-child(2) { animation-delay: 0.4s; }
//         .service-card:nth-child(3) { animation-delay: 0.6s; }
//         .service-card:nth-child(4) { animation-delay: 0.8s; }

//         .service-card img {
//           width: 50%;
//           height: auto;
//           border-radius: 10px 10px 0 0;
//           transition: transform 0.3s ease;
//         }

//         .service-card:hover img {
//           transform: scale(1.1);
//         }

//         .service-card h2 {
//           font-size: 1.2rem;
//           margin: 0.5rem 0;
//         }

//         .service-card p {
//           font-size: 0.9rem;
//           color: #666;
//           line-height: 1.6;
//         }

//         .service-card a {
//           color: #5A67D8;
//           text-decoration: none;
//           font-weight: bold;
//           display: inline-block;
//           margin-top: 0.5rem;
//           transition: color 0.3s ease;
//         }

//         .service-card a:hover {
//           color: #3B4CCC;
//         }

//         .scroll-animate {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }

//         .scroll-animate.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ShippingServices;

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
      description: "We offer state-of-the-art warehousing solutions designed to meet the needs of modern businesses.",
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
