import Link from "next/link";
import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { GoTools } from "react-icons/go";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import TrendingRepos from "./TrendingRepos";

const MainContent = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Home</h1>
        <div className="flex gap-5 flex-row-reverse items-center">
          <button className=" flex gap-2 items-center bg-[#212830] py-1 px-3 rounded-md border border-gray-700 text-sm">
            <IoFilterOutline /> Filter
          </button>
          <Link href="/" className="text-blue-400 text-sm">
            Send feedback
          </Link>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center mt-4">
            <div className="bg-gray-800 flex items-center justify-center w-fit p-2 rounded-full">
              <GoTools className="text-[18px]" />
            </div>
            <p className="text-gray-400 text-sm">Use tools of the trade</p>
          </div>
          <BiDotsHorizontalRounded className="text-[25px]" />
        </div>
      </div>

      <TrendingRepos />
    </div>
  );
};

export default MainContent;
