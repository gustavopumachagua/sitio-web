import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 20 ? setBg(true) : setBg(false);
    });
  });
  return (
    <div className="flex justify-center">
      <header
        className={`${
          bg
            ? "backdrop-blur-md bg-white/30 border-none px-2 rounded-2xl"
            : "h-24"
        }  fixed  lg:w-[36.4rem] w-[15rem] sm:w-[22rem] md:w-[35rem] top-0 py-6  border-b  z-10 transition-all duration-300  `}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              className="shadow-2xl shadow-black/50 bg-black hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition"
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
