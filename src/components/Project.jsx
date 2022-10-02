import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center shadow-2xl rounded-2xl bg-slate-200 px-2 py-2"
    >
      <div className="mb-4">
        <img
          className="rounded-2xl h-36 w-36"
          src={item.image}
          alt="projects"
        />
      </div>
      <p className="capitalize text-sm mb-3 font-primary font-semibold">
        {item.category}
      </p>
      <h3 className="text-sm font-semibold capitalize mb-3">{item.name}</h3>
      <div>{item.modal}</div>
    </div>
  );
};

export default Project;
