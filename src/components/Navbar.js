"use client"

import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Truck, 
  Package, 
  PhoneCall 
} from 'lucide-react';

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Truck },
  { href: "/products", label: "Products", icon: Package },
  { href: "/contact", label: "Contact", icon: PhoneCall }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`
        fixed w-full z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-md shadow-xl' 
          : 'bg-gradient-to-r from-blue-900 to-indigo-900'}
      `}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-white hover:text-blue-200 transition duration-300 transform hover:scale-105"
        >
          <Truck className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold tracking-wider">A3 Cargo</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                group flex items-center space-x-2 
                text-white text-sm font-medium 
                hover:text-blue-300 transition duration-300
                relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] 
                after:bg-blue-300 after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              <link.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-200 transition" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="
              text-white focus:outline-none 
              hover:text-blue-300 transition duration-300
            "
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div 
          className="
            md:hidden absolute top-full left-0 right-0 
            bg-gradient-to-br from-blue-50 to-white 
            shadow-2xl border-b border-blue-100
          "
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center space-x-4 
                    bg-white hover:bg-blue-50 
                    px-4 py-3 rounded-lg 
                    shadow-md hover:shadow-xl 
                    transition duration-300 
                    group
                  "
                >
                  <link.icon 
                    className="
                      w-6 h-6 text-blue-600 
                      group-hover:text-blue-800 
                      transition
                    " 
                  />
                  <span 
                    className="
                      text-blue-800 font-semibold 
                      group-hover:text-blue-900 
                      transition
                    "
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;