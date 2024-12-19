"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Info, Truck, Package, PhoneCall, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Truck },
  { href: "/products", label: "Products", icon: Package },
  { href: "/contact", label: "Contact", icon: PhoneCall },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 flex justify-center">
      <nav
        className={`w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "h-16 bg-gradient-to-r from-blue-950 to-blue-800 shadow-lg backdrop-blur-md"
            : "h-20 bg-gradient-to-r from-blue-900 to-blue-800"
        } ${isScrolled ? "max-w-[96%] mt-2 rounded-2xl border border-white/10" : "max-w-full"}`}
      >
        <div
          className={`h-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled ? "px-5" : "px-6"
          }`}
        >
          {/* Logo Section */}
          <Link 
            href="/" 
            className="group flex items-center gap-4 transition-all duration-300 hover:opacity-90"
          >
            <div
              className={`relative transition-all duration-500 ease-in-out ${
                isScrolled ? "w-10 h-10" : "w-12 h-12"
              }`}
            >
              <Image
                src="/backgroundlogo.png"
                alt="A3 Cargo Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            <div className="hidden md:flex flex-col">
              <h1
                className={`font-bold text-white tracking-wide transition-all duration-500 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
              >
                A3 Cargo
              </h1>
              <p
                className={`text-blue-200 font-medium transition-all duration-500 ${
                  isScrolled ? "text-xs" : "text-sm"
                }`}
              >
                Global Logistics
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-3 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white font-medium rounded-full transition-all duration-300 overflow-hidden ${
                    activeLink === link.href 
                      ? "bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-white/10" 
                      : "hover:bg-white/10"
                  } ${isScrolled ? "text-sm" : "text-base"}`}
                >
                  <link.icon
                    className={`transition-all duration-300 ${
                      isScrolled ? "w-4 h-4" : "w-5 h-5"
                    } ${activeLink === link.href || hoveredLink === link.href ? "text-blue-200" : ""}`}
                  />
                  <span className="relative z-10">{link.label}</span>
                  {hoveredLink === link.href && (
                    <div className="absolute inset-0 bg-white/5 transform transition-transform duration-300 translate-x-0"></div>
                  )}
                </Link>
              ))}
            </div>
            
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-white/90 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 active:bg-white/20"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter="transition-all duration-300 ease-out"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all duration-200 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] mt-2 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-100/20 overflow-hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 text-gray-600 hover:text-blue-600 transition-all duration-300 group ${
                  activeLink === link.href ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <link.icon
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeLink === link.href ? "text-blue-500" : "text-gray-400 group-hover:text-blue-500"
                    }`}
                  />
                  <span className="font-medium">{link.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
            <div className="p-4 border-t border-gray-100">
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;