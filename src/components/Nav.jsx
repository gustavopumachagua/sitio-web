import React, { useEffect, useState } from "react";
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
          bg ? "backdrop-blur-md bg-white/50 border-none px-2 rounded-2xl" : ""
        }  fixed  lg:w-[36.4rem] w-[15rem] sm:w-[22rem] md:w-[35rem] top-2 py-4  border-b  z-10 transition-all duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          <img src={Logo} alt="logo" />
          <div className="flex items-center gap-6"></div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
