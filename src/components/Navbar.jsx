import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => (
  <nav className="bg-blue-600 text-white">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold hover:text-gray-200 transition">
        AdCompany
      </Link>
      
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link 
          to="/" 
          className="text-base hover:text-gray-200 transition"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-base hover:text-gray-200 transition"
        >
          About
        </Link>
        <Link 
          to="/services" 
          className="text-base hover:text-gray-200 transition"
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          className="text-base hover:text-gray-200 transition"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
