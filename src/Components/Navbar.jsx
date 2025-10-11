import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-[#6F3CE7] font-semibold underline"
      : "hover:text-[#6F3CE7] transition";

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
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
        </div>

        <Link
          to="/"
          className="btn btn-ghost text-xl font-bold text-[#9156ef] flex items-center"
        >
          <img className="w-5 mr-2" src="/src/assets/logo.png" alt="Logo" />
          HERO.IO
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">
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
      </div>

      {/* ===== Right side button ===== */}
      <div className="navbar-end">
        <NavLink
          to="/contribute"
          className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90"
        >
          <i class="fa-brands fa-github"></i>
          Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
