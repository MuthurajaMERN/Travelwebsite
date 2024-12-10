import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import wlogo from "../../assets/wlogo.png"


export const NavbarLinks = [
  { name: "Home", link: "/" },

 
  { name: "Our Services", link: "/services" },
  {name:"package", link:"/package"},

 
  { name: "BestPlaces", link: "/best-places" },
  { name: "Blogs", link: "/blogs" },

  { name: "About", link: "/about" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={wlogo}
              alt="Logo"
              className="w25 h-20"
            />
          </NavLink>
        </div>
        <div
          className={`lg:flex flex-col lg:flex-row items-center gap-5 ${
            showMenu ? "block" : "hidden  "
          }`}
        >
          {NavbarLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className="block py-2 px-4 text-gray-700  hover:bg-amber-400 hover:text-blue-500 font-medium"
              onClick={() => setShowMenu(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-xl focus:outline-none"
          >
            {showMenu ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
