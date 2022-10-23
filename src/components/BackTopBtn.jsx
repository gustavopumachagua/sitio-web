import React, { useState, useEffect } from "react";

// import link
import { animateScroll as scroll } from "react-scroll";
// import icon
import { BsArrowUpSquareFill } from "react-icons/bs";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 100 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className=" text-white bg-black rounded-xl hover:text-slate-300  fixed xl:right-20 lg:right-16 right-1 bottom-24 cursor-pointer flex justify-center items-center transition-all"
      >
        <BsArrowUpSquareFill className="md:text-4xl text-2xl" />
      </button>
    )
  );
};

export default BackTopBtn;
