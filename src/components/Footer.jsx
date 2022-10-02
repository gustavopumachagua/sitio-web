import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="  py-8 text-center text-white">
      <div className="container mx-auto flex justify-center">
        <img src={Logo} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
