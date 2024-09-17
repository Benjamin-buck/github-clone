import Link from "next/link";
import React from "react";
import { FaChartLine } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Repository from "./Repository";
import { trendingRepos } from "@/constants/data";
const TrendingRepos = () => {
  return (
    <div className="bg-[#151b23] rounded-lg border border-gray-700 mt-4">
      <div className="flex justify-between my-2 mx-4 items-center">
        <div className="flex gap-2 items-center ">
          <FaChartLine className="text-gray-500" />
          <p className="text-gray-500 text-md max-md:text-xs">
            Trending Repositories
          </p>
          <Link href="/" className="text-blue-400 text-sm max-md:text-xs">
            See More
          </Link>
        </div>
        <BsThreeDots />
      </div>
      <div className="">
        {trendingRepos.map(({ repo, description, language, profileImage }) => (
          <Repository
            repo={repo}
            description={description}
            language={language}
            profileImage={profileImage}
            key={repo}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingRepos;
