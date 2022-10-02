import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { TbError404 } from "react-icons/tb";

import { Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 py-4  ">
        <Link
          to="/about"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48 h-14 bg-black "
        >
          <BsFillPersonFill className="w-10 h-10 ml-4 mt-1 text-white animate-pulse "></BsFillPersonFill>
          <span className="py-3 text-xl font-primary text-white ">About</span>
        </Link>
        <Link
          to="/portfolio"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black"
        >
          <MdWork className="w-10 h-10 ml-4 mt-1 text-white animate-pulse"></MdWork>
          <span className="py-3 text-xl font-primary text-white ">
            Portfolio
          </span>
        </Link>
        <a
          href="https://github.com/gustavopumachagua"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black"
        >
          <GoMarkGithub className="w-10 h-10 ml-4 mt-1 text-white animate-pulse"></GoMarkGithub>
          <span className="py-3 text-xl font-primary text-white ">GitHub</span>
        </a>
        <Link
          to="/404page"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black"
        >
          <TbError404 className="w-10 h-10 ml-4 mt-1 text-white animate-pulse"></TbError404>
          <span className="py-3 text-xl font-primary text-white ">
            404 Page
          </span>
        </Link>
        <div className="py-6 ">
          <div className="rounded-[36px] overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/playlist/6PruOhQcfMRGXEyofoRXIg"
              width="100%"
              height="380"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Hero;
//https://open.spotify.com/playlist/6PruOhQcfMRGXEyofoRXIg?si=e6f8bca1c6324673
