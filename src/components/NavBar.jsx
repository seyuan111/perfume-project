import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { PiShoppingCart } from 'react-icons/pi';
import { FaRegCircleUser } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <nav className="max-w-[1400px] mx-auto px-6 py-6 md:px-12 flex items-center justify-between">
      {/* Left: Navigation Links */}
      <ul className="hidden md:flex flex-1 list-none items-center gap-6 text-gray-900 font-medium">
        <li className="hover:text-rose-500 duration-100">
          <Link to="/" className="hover:text-rose-500 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li className="hover:text-rose-500 duration-100">
          <Link to="/about" className="hover:text-rose-500 transition-colors duration-200">
            About
          </Link>
        </li>
        <li className="hover:text-rose-500 duration-100">
          <Link to="/shop" className="hover:text-rose-500 transition-colors duration-200">
            Shop
          </Link>
        </li>
        <li className="hover:text-rose-500 duration-100">
          <Link to="/contact" className="hover:text-rose-500 transition-colors duration-200">
            Contact
          </Link>
        </li>
      </ul>

      {/* Center: Logo */}
      <div className="flex-1 text-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-rose-500 tracking-tight"
        >
          Isabella Perfume
        </Link>
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex justify-end items-center gap-4 md:gap-6 text-gray-900">
        <Link
          to="/search"
          aria-label="Search"
          className="text-xl md:text-2xl hover:text-rose-500 transition-colors duration-200"
        >
          <IoSearch />
        </Link>
        <div className="relative">
          <button
            aria-label="Shopping Cart"
            className="text-xl md:text-2xl hover:text-rose-500 transition-colors duration-200"
          >
            <PiShoppingCart />
          </button>
          <span className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-rose-500 rounded-full px-1.5 py-0.5">
            0
          </span>
        </div>
        <Link
          to="/login"
          aria-label="User Login"
          className="text-xl md:text-2xl hover:text-rose-500 transition-colors duration-200"
        >
          <FaRegCircleUser />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;