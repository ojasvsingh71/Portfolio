import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: 'https://drive.google.com/file/d/1c4mVEO_VTXDMfJVz4HL-v5aj5ZQMiqsm/view?usp=sharing', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-transparent backdrop-blur-lg shadow-md fixed w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10 object-contain" />
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">

        </div>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map(({ href, label }) => (

            <li key={href}>
              <a
                href={href}
                className="hover:text-[#BBFBFF] relative group transition"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#8DD8FF] transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </div>
      </div>

      <div
        className={`md:hidden bg-white transition-all duration-300 px-4 pt-2 pb-4 space-y-3 text-gray-700 font-medium ${isOpen ? 'block' : 'hidden'
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