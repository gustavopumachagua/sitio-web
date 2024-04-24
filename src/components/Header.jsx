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
        <div className="cursor-pointer hover:bg-slate-200 rounded-full h-9 w-9 flex justify-center  py-1 bg-slate-100">
          <Modal />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <figure className="rounded-full w-12 h-12 border-2 border-black bg-slate-200">
          <LazyLoadImage
            width="100%"
            min-height="144"
            effect="blur"
            className=" w-12 h-12"
            src={perfil}
          />
        </figure>
        <div>
          <span className="text-2xl  font-mono font-semibold text-white">
            GussDev
          </span>
          <div className="py-3">
            <div className="flex justify-center">
              <a
                href="mailto:rpumachaguahuertas@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer hover:bg-slate-200 rounded-full h-8 w-8 flex justify-center  py-1.5 bg-slate-100">
                <GrMailOption className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <figure className=" hidden py-8 lg:flex justify-center">
        <LazyLoadImage
          width="60%"
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
          <h2 className="font-bold text-xl font-mono text-white">
            Hola, soy Gustavo!
          </h2>
        </div>
        <div className="flex justify-center py-2 px-4">
          <p className="font-semibold text-sm font-mono text-white">
            Soy un Data Scientist con experiencia en la manipulación de datos y
            la creación de modelos predictivos para resolver problemas
            empresariales complejos.
          </p>
        </div>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
