import React from "react";
import { IoMdMedical } from "react-icons/io";

const Skills = () => {
  return (
    <div className="py-8 ">
      <div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 ">
            <h2 className="px-10 font-primary font-bold text-3xl text-black">
              Skills
            </h2>
            <p className="font-primary font-semibold text-xl text-slate-800">
              My technical level
            </p>
          </div>
        </div>
        <div>
          <div className="py-10">
            <div className="flex flex-col px-8 md:px-20">
              <div className="flex justify-center py-4">
                <h3 className="font-primary font-semibold text-xl">
                  Frontend developer
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 shadow-2xl rounded-2xl bg-slate-200  px-4 ">
                <div className="flex flex-row space-x-4 ">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      HTML
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Advanced
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      CSS
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Advanced
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      JavaScript
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      React
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      Tailwind
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Advanced
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      Git
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col px-8 md:px-20">
              <div className="flex justify-center py-4">
                <h3 className="font-primary font-semibold text-xl">
                  Backend developer
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 shadow-2xl rounded-2xl bg-slate-200 px-4">
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      NodeJS
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      Mongo DB
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      SQL
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      GraphQL
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      ExpressJS
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <IoMdMedical />
                  </div>
                  <div>
                    <p className="font-primary font-semibold text-base text-black">
                      FireBase
                    </p>
                    <p className="font-primary text-sm font-medium text-slate-800">
                      Intermediate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
