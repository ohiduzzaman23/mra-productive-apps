import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-[#6F3CE7] font-semibold underline underline-offset-4"
      : "hover:text-[#6F3CE7] transition";

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* ===== Left side (Logo) ===== */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-[#9156ef]"
        >
          <img className="w-7 mr-2" src="/src/assets/logo.png" alt="Logo" />
          HERO.IO
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={activeLink}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={activeLink}>
              Installation
            </NavLink>
          </li>
        </ul>

        {/* ===== Right side button ===== */}
        <div className="hidden md:flex">
          <a
            href="https://github.com/ohiduzzaman23/Hero-Apps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90 flex items-center gap-2"
          >
            <i className="fa-brands fa-github"></i>
            Contribute
          </a>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          className="md:hidden flex items-center text-gray-700 hover:text-[#6F3CE7] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <div className="md:hidden bg-base-100 border-t border-gray-200">
          <ul className="flex flex-col py-3 space-y-2 text-center font-medium">
            <li>
              <NavLink
                to="/"
                className={activeLink}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={activeLink}
                onClick={() => setIsOpen(false)}
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={activeLink}
                onClick={() => setIsOpen(false)}
              >
                Installation
              </NavLink>
            </li>
            <li>
              <a
                href="https://github.com/ohiduzzaman23/Hero-Apps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90 mt-2 w-[80%] mx-auto flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-brands fa-github"></i>
                Contribute
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
