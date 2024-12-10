import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom'; // import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed w-full bg-gradient-to-r bg-slate-900 shadow-lg z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          A3 Cargo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white text-sm hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-white text-sm hover:text-gray-200 transition duration-300">
            About Us
          </Link>
          <Link to="/services" className="text-white text-sm hover:text-gray-200 transition duration-300">
            Services
          </Link>
          <Link to="/products" className="text-white text-sm hover:text-gray-200 transition duration-300">
            Products
          </Link>
          <Link to="/contact" className="text-white text-sm hover:text-gray-200 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transform transition-transform duration-300"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transform transition-transform duration-300"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="bg-white md:hidden shadow-lg absolute top-0 left-0 right-0">
          <div className="flex flex-col items-center space-y-6 py-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-blue-600"
              onClick={toggleMenu}
            >
              ✕
            </button>
            
            <Link
              to="/"
              className="text-blue-600 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-blue-600 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-blue-600 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-blue-600 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
