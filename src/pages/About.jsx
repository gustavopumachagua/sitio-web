import React from "react";
import PerfilDesktop from "../assets/perfil-desktop.svg";
import CV from "../assets/pdf/Ansel-Cv.pdf";
import Skills from "../components/Skills";
import PerfilTablet from "../assets/perfil-table.svg";

const About = () => {
  return (
    <div className="font-primary">
      <div className="flex flex-col gap-y-4 ">
        <figure className="xl:hidden flex justify-center ">
          <img
            className="shadow-2xl rounded-2xl bg-slate-200"
            src={PerfilDesktop}
          />
        </figure>
        <figure className="hidden xl:flex justify-center ">
          <img
            className="shadow-2xl rounded-2xl bg-slate-200"
            src={PerfilTablet}
          />
        </figure>
        <div>
          <div className="py-4">
            <div className="flex justify-center py-2">
              <h2 className="font-bold text-2xl text-black ">
                Hi, I'm Gustavo! 👋
              </h2>
            </div>
            <div className="flex justify-center py-2">
              <p className="font-semibold text-lg text-black">
                Front-end Developer
              </p>
            </div>
            <div className="flex justify-center py-2 px-4">
              <p className="font-semibold text-lg text-black">
                Frontend developer, I create web pages with UI/UX user
                interface.
              </p>
            </div>
            <div className="flex justify-start px-4 py-2">
              <a
                href={CV}
                download
                className="text-white background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-black rounded-3xl hover:bg-slate-700"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
