"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { trendingRepos } from "@/constants/data";

interface Props {
  repo: string;
  description: string;
  language: string;
  profileImage: string;
  starred: boolean;
  border: boolean;
  className: string;
}

const Repository = ({
  repo,
  description,
  language,
  profileImage,
  starred,
  border,
  className
}: Props) => {
  let [favorite, setFavorite] = useState();
  return (
    <div className={`${border && 'border border-gray-700 rounded-lg'} ${className}`}>
      <div className="border-b last:border-none border-gray-700 mt-5">
        <div className="mb-5 mx-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <Image
                src={profileImage}
                width={20}
                height={20}
                className="rounded-full"
                alt="Profile photo"
              />
              <p className="text-sm">{repo}</p>
            </div>
            <div className="bg-[#212830] px-3 py-1 flex items-center justify-between hover:bg-gray-600 rounded-lg border-gray-700 border max-md:hidden">
              <div className="flex items-center gap-2 border-r border-gray-700  pr-2">
                {favorite ? (
                  <FaStar
                    onClick={() => {
                      setFavorite = true;
                    }}
                  />
                ) : (
                  <FaRegStar />
                )}

                <p className="text-sm">Star</p>
              </div>
              <div className="pl-2">
                <IoCaretDown />
              </div>
            </div>
          </div>
          <p className="text-sm">{description}</p>
          <div className="my-2 flex items-center gap-2 text-sm text-gray-400">
            <div className="bg-blue-400 w-3 h-3 rounded-full border-gray-400 border" />
            <p>{language}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Repository;
