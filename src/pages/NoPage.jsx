import React from "react";
import page404 from "../assets/page404.svg";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Link to="/404">
      <div className="px-4 py-4 flex justify-center ">
        <div className="flex flex-col space-y-4 ">
          <div className=" flex justify-center ">
            <h2 className="text-7xl font-primary font-extrabold">404</h2>
          </div>
          <h2 className="text-4xl font-primary font-semibold">
            PAGE NOT FOUND
          </h2>

          <div className="text-lg font-primary font-semibold ">
            <p className="py-1">We looked everywhere for this page.</p>
            <p className="py-1">Are you sure the website URL is corret?</p>
            <p className="py-1">Get in touch with the site owner.</p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <img src={page404} />
      </div>
    </Link>
  );
};

export default NoPage;
