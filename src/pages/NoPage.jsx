import React from "react";
import page404 from "../assets/page404.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const NoPage = () => {
  return (
    <div className="py-2 md:mb-60 xl:mb-auto">
      <div className="px-4 py-4 flex justify-center ">
        <div className="flex flex-col space-y-4 ">
          <div className=" flex justify-center ">
            <h2 className="text-7xl font-primary font-extrabold">404</h2>
          </div>

          <h2 className="text-4xl font-primary  text-center font-semibold">
            PAGE NOT FOUND
          </h2>

          <div className="text-lg font-primary font-semibold ">
            <p className="py-1 text-center">
              We looked everywhere for this page.
            </p>
            <p className="py-1 text-center">
              Are you sure the website URL is corret?
            </p>
            <p className="py-1 text-center">
              Get in touch with the site owner.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <LazyLoadImage
          width="100%"
          min-height="144"
          effect="blur"
          src={page404}
        />
      </div>
    </div>
  );
};

export default NoPage;
