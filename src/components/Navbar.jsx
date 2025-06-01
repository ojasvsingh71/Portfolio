import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/70 backdrop-blur-lg shadow-md fixed w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
          
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map(({ href, label }) => (

            <li key={href}>
              <a
                href={href}
                className="hover:text-blue-600 relative group transition"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <div
        className={`md:hidden bg-white transition-all duration-300 px-4 pt-2 pb-4 space-y-3 text-gray-700 font-medium ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={toggleMenu}
            className="block border-b pb-2 hover:text-blue-600"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;