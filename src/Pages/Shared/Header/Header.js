import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const menuItems = (
    <>
      <li className="font-semibold text-sky-500">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold text-sky-500">
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar h-20 mb-10 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" btn-btn-ghost lg:hidden"></label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn-btn-ghost normal-case text-xl text-sky-500 font-semibold"
          >
            HomeFlavorFooD
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>

        <div className="navbar-end text-sky-500 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <FaFacebookF></FaFacebookF>
          <FaInstagram />
          <FaYoutube />
          <FaWhatsapp />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Header;
