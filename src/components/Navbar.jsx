import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => (
  <nav className="bg-customYellow text-white">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <Link to="/" className="text-xl font-bold hover:text-gray-200 transition">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold text-customGreen whitespace-nowrap dark:text-white">Flowbite</span>
      </Link>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
          <Link 
            to="/" 
            className="text-base text-customGreen hover:text-gray-200 transition"
          >
            Home
          </Link>
          </li>
          <li>
          <Link 
            to="/about" 
            className="text-base text-customGreen hover:text-gray-200 transition"
          >
            About
          </Link>
          </li>
          <li>
          <Link 
            to="/services" 
            className="text-base text-customGreen hover:text-gray-200 transition"
          >
            Services
          </Link>
          </li>
          <li>
          <Link 
            to="/contact" 
            className="text-base text-customGreen hover:text-gray-200 transition"
          >
            Contact
          </Link>
          </li>
        </ul>
        </div>
    </div>
  </nav>
);

export default Navbar;
