//import components
import perfil from "../assets/perfil.svg";
import PerfilMobile from "../assets/perfil-mobile.svg";
import hero from "../assets/hero.svg";
import { GrMailOption } from "react-icons/gr";
import Hero from "./Hero";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Modal from "./Modal";

const Header = () => {
  return (
    <header className="flex flex-col mt-10">
      <div className="flex justify-end px-2 py-2 cursor-pointer">
        <div className="cursor-pointer hover:bg-slate-200 rounded-full h-11 w-11 flex justify-center  py-2 bg-slate-300">
          <Modal />
        </div>
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
                className="cursor-pointer hover:bg-slate-200 rounded-full h-11 w-11 flex justify-center  py-2 bg-slate-300">
                <GrMailOption className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <figure className=" hidden py-8 lg:flex justify-center">
        <LazyLoadImage
          width="70%"
          min-height="144"
          effect="blur"
          src={hero}
          className=" shadow-2xl rounded-2xl bg-slate-200 xl:ml-16 lg:ml-20 "
        />
      </figure>
      <figure className=" lg:hidden py-8 flex justify-center">
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
          <h2 className="font-bold text-2xl text-black">
            Hola, soy Gustavo! ✌
          </h2>
        </div>
        <div className="flex justify-center py-2 px-4">
          <p className="font-semibold text-lg text-black">
            Soy un Data Scientist con experiencia en la manipulación de datos y
            la creación de modelos predictivos para resolver problemas
            empresariales complejos 🤓.
          </p>
        </div>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
