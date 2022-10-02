import React, { useState } from "react";
import { projectsModal5 } from "../../data";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="font-bold px-2 py-1 bg-blue-200  text-black flex items-center justify-center rounded-full  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Demo
      </button>
      {showModal ? (
        <>
          {projectsModal5.map((item, index) => {
            const {
              name,
              hrefModal,
              description,
              modalimage,
              icon,
              iconModal,
              iconReport,
              hrefReport,
            } = item;
            return (
              <div
                key={index}
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-grayscale-0 bg-black/60"
              >
                <div className="relative w-auto my-6  mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
                  <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white/90 outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5">
                      <button
                        className="float-left ml-auto "
                        onClick={() => setShowModal(false)}
                      >
                        <div className="text-black h-8 w-6 text-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 hover:text-pink-800 duration-300 ">
                          {icon}
                        </div>
                      </button>
                      <div className="flex flex-col md:flex-row space-x-4">
                        <div className="pl-3 md:w-96">
                          <img
                            className="rounded-2xl h-96 w-64 "
                            src={modalimage}
                            alt="imagen modal"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-3xl font-semibold text-black">
                              {name}
                            </h2>
                          </div>
                          <div>
                            <p className="capitalize text-accent text-xl font-normal mb-3">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative p-2 flex justify-center space-x-20  ml-8 ">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="text-black h-8 w-6 text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 hover:text-pink-800 duration-300"
                        href={hrefModal}
                      >
                        {iconModal}
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className=" text-black h-8 w-6 text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 hover:text-pink-800 duration-300"
                        href={hrefReport}
                      >
                        {iconReport}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default Modal;
