import React, { useContext } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li className="font-semibold text-sky-500">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold text-sky-500">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-semibold text-sky-500">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn-ghost font-semibold text-sky-500"
            >
              log out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold text-sky-500">
          <Link to="/login">Login</Link>
        </li>
      )}
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
              <li>
                <a>item-1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
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
