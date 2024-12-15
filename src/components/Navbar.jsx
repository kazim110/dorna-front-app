import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/dorna-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };

  return (
    <nav className="bg-customYellow text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold hover:text-gray-200 transition">
          <img
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-customGreen hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-customYellow md:static md:block md:w-auto md:flex-row md:space-x-8 p-4 md:p-0 md:border-0`}
        >
          <ul className="font-medium flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                className="text-base text-customGreen hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base text-customGreen hover:text-white transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-base text-customGreen hover:text-white transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base text-customGreen hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
