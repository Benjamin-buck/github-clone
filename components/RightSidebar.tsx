import React from "react";
import { IoMdClose } from "react-icons/io";

const RightSidebar = () => {
  return (
    <div className="mx-4 mt-6">
      <div className="relative w-full rounded-lg bg-gradient-to-t from-purple-700 to-blue-500 px-4 py-4">
        <IoMdClose className="absolute top-3 right-3" />
        <h2 className="text-2xl font-bold text-gradient-to-t from-purple-200 to-white">
          GitHub Models
        </h2>
        <h3 className="font-semibold">Join the Limited Public Beta</h3>
        <p className="text-xs">
          Try, test, and deploy a range of popular AI models with an interactive
          playground, for free, right now on Github.
        </p>
        <button className="bg-white text-black text-xs font-semibold w-full py-2 mt-2 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
