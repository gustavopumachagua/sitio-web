import React from "react";

import { CgExport } from "react-icons/cg";
import perfil from "../assets/perfil.svg";
import { GrClose } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { SiNotion } from "react-icons/si";
import { SiPlatzi } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <CgExport
        className="w-6 h-6"
        type="button"
        onClick={() => setShowModal(true)}></CgExport>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none backdrop-grayscale-0 bg-black/70 z-50">
            <div className="relative w-auto my-6  mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-end py-2 px-4">
                  <GrClose
                    className="text-black"
                    onClick={() => setShowModal(false)}></GrClose>
                </div>
                {/*header*/}
                <div className="flex justify-center px-2 ">
                  <div className="flex items-start justify-between p-2 ">
                    <div className="flex flex-col gap-y-2 justify-center">
                      <div className="flex justify-center">
                        <figure className="rounded-full w-16 h-16 border-2 border-black bg-white">
                          <LazyLoadImage
                            width="100%"
                            min-height="144"
                            effect="blur"
                            className="w-16 h-16"
                            src={perfil}
                          />
                        </figure>
                      </div>
                      <h3 className="text-xl font-semibold font-primary">
                        @Gussdev
                      </h3>
                    </div>
                  </div>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-y-4 ">
                    <a
                      href="https://github.com/gustavopumachagua"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border-2 border-white flex space-x-10  h-9 w-full bg-black">
                      <GoMarkGithub className="w-5 h-5 ml-4 mt-1 text-white animate-pulse"></GoMarkGithub>
                      <span className="py-1 text-base font-primary text-white ">
                        Share on GitHub
                      </span>
                    </a>
                    <a
                      href="https://twitter.com/Gussdev"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border-2 border-white flex space-x-10 h-9 w-60 bg-black ">
                      <ImTwitter className="w-5 h-5 ml-4 mt-1 text-white animate-pulse "></ImTwitter>
                      <span className="py-1 text-base font-primary text-white ">
                        Share on Twitter
                      </span>
                    </a>
                    <a
                      href="mailto:rpumachaguahuertas@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border-2 border-white flex space-x-10  h-9 w-full bg-black">
                      <MdEmail className="w-5 h-5 ml-4 mt-1 text-white animate-pulse"></MdEmail>
                      <span className="py-1 text-base font-primary text-white ">
                        Share on Email
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/guss.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border-2 border-white flex space-x-10  h-9 w-full bg-black">
                      <BsInstagram className="w-5 h-5 ml-4 mt-1 text-white animate-pulse"></BsInstagram>
                      <span className="py-1 text-base font-primary text-white ">
                        Share on Instagram
                      </span>
                    </a>
                    <a
                      href="https://www.notion.so/gussdev/Apuntes-3abec46a55c04b92ba7ea40f0ab117ba"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border-2 border-white flex space-x-10  h-9 w-full bg-black">
                      <SiNotion className="w-5 h-5 ml-4 mt-1 text-white animate-pulse"></SiNotion>
                      <span className="py-1 text-base font-primary text-white ">
                        Share on Notion
                      </span>
                    </a>
                    <a
                      href="https://platzi.com/p/gustavopumachagua/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border-2 border-white flex space-x-10   h-9 w-full bg-black">
                      <SiPlatzi className="w-5 h-5 ml-4 mt-1 text-white animate-pulse"></SiPlatzi>
                      <span className="py-1 text-base font-primary text-white ">
                        Share on Platzi
                      </span>
                    </a>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2  ">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-black rounded-3xl hover:bg-slate-700"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
