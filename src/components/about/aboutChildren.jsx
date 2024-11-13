import React from "react";
import PropTypes from "prop-types";
export default function AboutChildren({ name, age ,isActive}) {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-500 text-slate-400 justify-center items-center">
      <h1 className="text-3xl font-bold ">Your name {name}</h1>
      <p  className="text-xl font-bold ">Your age {2024 - age}</p>
    </div>
  );
}

AboutChildren.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isActive: PropTypes.bool,
};
