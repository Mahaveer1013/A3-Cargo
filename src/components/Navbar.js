"use client";

import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
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

  return (
    <nav 
      className={`
        fixed w-full z-50 
        ${isScrolled 
          ? 'bg-blue-900 shadow-md' 
          : 'bg-blue-900'}
      `}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Simplified Logo Section */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12">
            <Image
              src="/backgroundlogo.png"
              alt="A3 Cargo Logo"
              fill
              className="object-contain"
              priority
              sizes="48px"
            />
          </div>
          <div>
            
            <p className="hidden sm:block text-xs text-blue-200">
              Global Logistics
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center space-x-1 px-2 py-1 text-white text-sm hover:text-blue-200"
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <link.icon className="w-5 h-5 text-blue-600" />
                  <span>{link.label}</span>
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