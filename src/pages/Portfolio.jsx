import React from "react";

// import components
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <section className="  flex items-center  xl:bg-cover xl:bg-center xl:bg-no-repea overflow-hidden py-4 ">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center py-4 space-y-4 ">
          <h2 className=" relative before:absolute  before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block font-primary text-3xl font-bold ">
            My Project List
          </h2>
          <p className="text-base font-primary font-semibold">
            Some projects made with Reactjs, tailwindcss, HTML, CSS, javascript.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
