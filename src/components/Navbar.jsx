import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { CgShoppingCart } from "react-icons/cg";
import { AuthContext } from "../context/AuthContext";
import { LayoutContext } from "../context/LayoutContext";
import { RxAvatar } from "react-icons/rx";
import { BiDownArrow, BiHomeAlt, BiShoppingBag } from "react-icons/bi";
import ProfilePopUp from "./ProfilePopUp";

const Navbar = ({ cartProducts }) => {
  const Links = [
    { label: "Home", route: "/" },
    { label: "Shop", route: "/shop" },
  ];

  const { newUser, loginUser } = useContext(AuthContext);
  const { roots, toggleLayout } = useContext(LayoutContext);

  const [activeNav, setActiveNav] = useState(false);
  const [show, setShow] = useState(false);

  window.onscroll = () => {
    setActiveNav(window.pageYOffset > 0 ? true : false);
    return () => window.onscroll === null;
  };

  return (
    <header
      className={`nav-padding-x sm:py-4 xl:py-5 max-sm:h-20 fixed left-0 right-0 top-0 z-50 bg-white ${
        activeNav && "shadow-xl transition-all"
      }`}
    >
      <div className="container flex items-center justify-between relative">
        <Link to="/" className="flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="max-md:w-[100px] max-md:h-[100px]"
          />
        </Link>

        <nav className="flex items-center gap-5 ">
          {Links.map((link, index) => (
            <li
              key={index}
              className="!text-black text-xl info-text sm:flex hidden "
            >
              <Link to={link.route}>{link.label}</Link>
            </li>
          ))}

          <Link to="/" className="flex sm:hidden text-2xl">
            <BiHomeAlt />
          </Link>
          <Link to="/shop" className="flex sm:hidden text-2xl">
            <BiShoppingBag />
          </Link>

          {newUser || loginUser ? (
            <button
              className="flex items-center gap-1"
              onClick={() => setShow(!show)}
            >
              <RxAvatar className="text-3xl" />

              <p className="info-text hidden lg:flex">
                Hi,
                {newUser?.username} {loginUser?.email}
              </p>

              <BiDownArrow className={show ? "rotate-180" : ""} />
            </button>
          ) : (
            <Link
              to={"/login"}
              onClick={() => toggleLayout(false)}
              className="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 info-text !text-white !text-sm"
            >
              Login
            </Link>
          )}
          {cartProducts.length > 0 && (
            <ul>
              <li className="text-black text-xl font">
                <Link
                  to="/cart"
                  className="flex  justify-center gap-1 relative info-text"
                >
                  <CgShoppingCart className="text-3xl" />({cartProducts.length})
                </Link>
              </li>
            </ul>
          )}

          {show && (
            <ProfilePopUp
              show={show}
              setShow={setShow}
              toggleLayout={toggleLayout}
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
