"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Info, Truck, Package, PhoneCall, ChevronRight } from "lucide-react";
import { usePathname } from 'next/navigation';

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
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        requestAnimationFrame(() => setIsScrolled(scrolled));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const isActivePath = (path) => {
    return pathname === path;
  };

  return (
    <div className="fixed w-full z-50 flex justify-center">
      <nav
        className={`w-full transform-gpu transition-all duration-500 ${
          isScrolled
            ? "h-16 bg-gradient-to-r from-blue-950/95 to-blue-800/95 shadow-lg backdrop-blur-lg"
            : "h-20 bg-gradient-to-r from-blue-900 to-blue-800"
        } ${
          isScrolled 
            ? "max-w-[96%] mt-2 rounded-2xl border border-white/10" 
            : "max-w-full"
        }`}
      >
        <div className={`h-full max-w-7xl mx-auto flex items-center justify-between ${
          isScrolled ? "px-5" : "px-6"
        }`}>
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center gap-4 hover:opacity-90 transition-opacity"
          >
            <div className={`relative ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}>

              <Image
                src="/A3-cargo-Logo.png"
                alt="A3 Cargo Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            <div className="hidden md:flex flex-col">
              <h1 className={`font-bold text-white tracking-wide ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>
                A3 Cargo
              </h1>
              <p className={`text-blue-200/90 font-medium ${
                isScrolled ? "text-xs" : "text-sm"
              }`}>
                Global Logistics
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-3 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
              {NAV_LINKS.map((link) => {
                const isActive = isActivePath(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`flex items-center gap-2 px-4 py-2 text-white rounded-full transition-colors duration-300 ${
                      isActive 
                        ? "bg-blue-500 shadow-md" 
                        : "hover:bg-white/10"
                    } ${isScrolled ? "text-sm" : "text-base"}`}
                  >
                    <link.icon
                      className={`${isScrolled ? "w-4 h-4" : "w-5 h-5"} ${
                        isActive ? "text-white" : "text-blue-200"
                      }`}
                    />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
            
            <button className="ml-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-300 text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-white/90 hover:text-white rounded-full transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter="transition-all duration-300"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] mt-2 bg-white/95 backdrop-blur-xl shadow-lg rounded-2xl border border-gray-100/20">
            {NAV_LINKS.map((link) => {
              const isActive = isActivePath(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 ${
                    isActive 
                      ? "bg-blue-500 text-white" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <link.icon className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`} />
                    <span className="font-medium">{link.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`} />
                </Link>
              );
            })}
            <div className="p-4 border-t border-gray-100">
              <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors duration-300">
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