// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ContactBanner from "../../components/ContactBanner";
// import Image from "next/image";
// import servicesData from "@/lib/services.json";

// const Services = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   return (
//     <>
//       <section className="py-16 text-center bg-gradient-to-r from-blue-800 to-blue-600">
//         <h1 className="text-5xl font-bold text-white">Our Expert Services</h1>
//         <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
//           We offer a wide range of services tailored to streamline global trade,
//           providing solutions that meet the needs of businesses of all sizes.
//           Explore our expertise.
//         </p>
//       </section>

//       <section className="py-16 px-6 lg:px-24 bg-white">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
//           {servicesData.map((service) => (
//             <div
//               key={service.id}
//               data-aos="fade-up"
//               className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out group"
//             >
//               <Image
//                 width={1000}
//                 height={1000}
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300 ease-in-out rounded-t-lg"
//               />
//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold text-blue-500">{service.title}</h2>
//                 <p className="text-gray-600 mt-2">{service.description}</p>
//                 <a
//                   href="#"
//                   className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition duration-200 ease-in-out"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <ContactBanner />
//     </>
//   );
// };

// export default Services;

// // pages/ShippingPage.js
// "use client";
// import { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import styles from "./ShippingPage.css"; // Import CSS Module for styling

// const sections = [
//   {
//     id: "logistics",
//     title: "Logistics",
//     description: "Simplify A3 Express Cargo offers efficient and reliable logistics management services.",
//     imgSrc: "/images/Logistics.jpg",
//     style: { backgroundColor: "#edf6fc" },
//     animation: "fade-up",
//   },
//   {
//     id: "international-shipping",
//     title: "International shipping",
//     description: "Ship across the border to 220+ countries and territories with end-to-end support.",
//     imgSrc: "/images/download1.png",
//     style: { backgroundColor: "#f3f2ff" },
//     animation: "fade-up",
//     reverse: true,
//   },
//   // Add other sections here
// ];

// export default function ShippingPage() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className={styles.container}>
//       {/* Navigation Header */}
//       <header className={styles.header}>
//         <div className={styles.logo}>Shiprocket Shipping</div>
//         <nav className={styles.navLinks}>
//           <Link href="#">Overview</Link>
//           <Link href="#">Same Day Delivery</Link>
//           <Link href="#">Doorstep Delivery</Link>
//           <Link href="#">Shipping Rate Calculator</Link>
//           <Link href="#">Blog</Link>
//           <Link href="#" className={styles.startBtn}>
//             Start Shipping Now
//           </Link>
//         </nav>
//       </header>

//       {/* Sections */}
//       {sections.map(({ id, title, description, imgSrc, style, animation, reverse }) => (
//         <section key={id} className={`${styles.section} ${reverse ? styles.reverse : ""}`} style={style} data-aos={animation}>
//           <div className={styles.text}>
//             <h1>{title}</h1>
//             <p>{description}</p>
//             <Link href="#">Know more &#8594;</Link>
//           </div>
//           <div className={styles.image}>
//             <Image src={imgSrc} alt={`${title} Image`} width={500} height={300} />
//           </div>
//         </section>
//       ))}

//       {/* Footer Button */}
//       <Link href="#" className={styles.footerBtn}>
//         Start Shipping
//       </Link>

//       {/* Scroll to Top Button */}
//       <button className={styles.scrollBtn} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
//         ↑
//       </button>
//     </div>
//   );
// }

"use client";
import { useEffect } from "react";

export default function ShippingPage() {
  useEffect(() => {
    // AOS Animation initialization
    const scriptAOS = document.createElement("script");
    scriptAOS.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    scriptAOS.async = true;
    scriptAOS.onload = () => {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    };
    document.body.appendChild(scriptAOS);

    // Scroll-to-Top functionality
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const scrollButton = document.querySelector(".scroll-btn");
    if (scrollButton) {
      scrollButton.addEventListener("click", scrollToTop);
    }

    // Section scroll animation logic
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }
        body {
          background-color: #fdfdfd;
          scroll-behavior: smooth;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #fff;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .logo {
          font-weight: bold;
          color: #333;
          font-size: 1.2rem;
        }
        .nav-links a {
          text-decoration: none;
          color: #333;
          margin: 0 15px;
          font-size: 14px;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #7a4bd8;
        }
        .start-btn {
          background-color: #7a4bd8;
          color: white;
          border-radius: 20px;
          padding: 5px 15px;
          text-decoration: none;
        }

        section {
          margin: 50px auto;
          max-width: 1100px;
          padding: 30px;
          border-radius: 10px;
          opacity: 0;
          transition: opacity 1s ease-out;
        }

        .image-left {
          transform: translateX(-100%);
          transition: transform 1s ease-out, opacity 1s ease-out;
          opacity: 0;
        }
        .image-right {
          transform: translateX(100%);
          transition: transform 1s ease-out, opacity 1s ease-out;
          opacity: 0;
        }
        .visible .image-left,
        .visible .image-right {
          transform: translateX(0);
          opacity: 1;
        }

        .returns,
        .shipping {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .returns .text,
        .shipping .text {
          max-width: 40%;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        p {
          color: #555;
          margin-bottom: 20px;
        }
        a {
          color: #7a4bd8;
          text-decoration: none;
          font-weight: bold;
        }
        img {
          max-width: 50%;
          border-radius: 15px;
        }

        .footer-btn {
          display: block;
          margin: 30px auto;
          text-align: center;
          background-color: #7a4bd8;
          color: white;
          padding: 10px 30px;
          text-decoration: none;
          border-radius: 20px;
          max-width: 200px;
          font-weight: bold;
        }

        .scroll-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #7a4bd8;
          color: white;
          padding: 10px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          z-index: 1000;
        }
      `}</style>

      {/* Header */}
      <header>
        <div className="logo">Shiprocket Shipping</div>
        <nav className="nav-links">
          <a href="#">Overview</a>
          <a href="#">Same Day Delivery</a>
          <a href="#">Doorstep Delivery</a>
          <a href="#">Shipping Rate Calculator</a>
          <a href="#">Blog</a>
          <a href="#" className="start-btn">
            Start Shipping Now
          </a>
        </nav>
      </header>

      {/* Sections */}
      <div>
        <section className="returns" style={{ backgroundColor: "#edf6fc" }}>
          <div className="text">
            <h1>Logistics</h1>
            <p>
              Simplify A3 Express Cargo offers efficient and reliable logistics
              management services.
            </p>
            <a href="#">Know more →</a>
          </div>
          <img src="/Logistics.jpg" alt="Logistics" className="image-left" />
        </section>

        <section className="shipping" style={{ backgroundColor: "#f3f2ff" }}>
          <div className="text">
            <h1>International shipping</h1>
            <p>
              Ship across the border to 220+ countries and territories with
              end-to-end support.
            </p>
            <a href="#">Know more →</a>
          </div>
          <img src="/download1.png" alt="International Shipping" className="image-right" />
        </section>
      </div>

      {/* Footer Button */}
      <a href="#" className="footer-btn">
        Start Shipping
      </a>

      {/* Scroll to Top Button */}
      <button className="scroll-btn">↑</button>
    </div>
  );
}
