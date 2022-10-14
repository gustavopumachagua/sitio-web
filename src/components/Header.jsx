import React from "react";
//import components
import perfil from "../assets/perfil.svg";
import PerfilMobile from "../assets/perfil-mobile.svg";
import hero from "../assets/hero.svg";
import { GrMailOption } from "react-icons/gr";
import Modal from "./Modal";
import Hero from "./Hero";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  return (
    <header className="flex flex-col ">
      <div className="flex justify-end px-2 py-2 cursor-pointer">
        <Modal />
      </div>
      <div className="flex flex-row gap-4">
        <figure className="rounded-full w-20 h-20 border-2 border-black bg-white">
          <LazyLoadImage
            width="100%"
            min-height="144"
            effect="blur"
            className=" w-20 h-20 "
            src={perfil}
          />
        </figure>
        <div>
          <span className="text-2xl  font-primary font-semibold">GussDev</span>
          <div className="py-3">
            <div className="flex justify-center">
              <a
                href="mailto:rpumachaguahuertas@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <GrMailOption className="w-6 h-6 text-slate-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <figure className=" hidden py-9 lg:flex justify-center">
        <LazyLoadImage
          width="70%"
          min-height="144"
          effect="blur"
          src={hero}
          className=" shadow-2xl rounded-2xl bg-slate-200 xl:ml-16 lg:ml-20 "
        />
      </figure>
      <figure className=" lg:hidden py-9 flex justify-center">
        <LazyLoadImage
          width="95%"
          min-height="144"
          effect="blur"
          src={PerfilMobile}
          className=" shadow-2xl rounded-2xl bg-slate-200 ml-2 md:ml-3.5 "
        />
      </figure>
      <div>
        <div className="flex justify-center py-2">
          <h2 className="font-bold text-2xl text-black">Hi, I'm Gustavo! ✌</h2>
        </div>
        <div className="flex justify-center py-2">
          <p className="font-semibold text-lg text-black">
            Front-end Developer
          </p>
        </div>
        <div className="flex justify-center py-2 px-4">
          <p className="font-semibold text-lg text-black">
            I'm Creative designer based in Lima-Peru, and i'm very passionate
            and dedicated to my work.
          </p>
        </div>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
