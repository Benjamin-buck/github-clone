import { repos } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdBookmarkAdded } from "react-icons/md";

const TopRepos = () => {
  return (
    <div className="mt-14 mx-4">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold">Top Repositories</h2>
        <button className="bg-[#238636] text-white px-2 py-1 rounded-md flex gap-2 items-center text-sm">
          <MdBookmarkAdded /> New
        </button>
      </div>
      <form action="" className="flex my-3">
        <input
          type="text"
          className="w-full px-3 py-1 rounded-md bg-[#151b23] border border-gray-700 text-sm"
          placeholder="Find a repository"
        />
      </form>
      <div className="flex flex-col">
        {repos.map(({ label, href }) => (
          <Link
            href={href}
            key={label}
            className="text-sm flex items-center gap-2 py-1 hover:underline"
          >
            <Image
              src="/profile.jpg"
              width={15}
              height={15}
              className="rounded-full"
              alt="profile photo"
            />
            {label}
          </Link>
        ))}
        <p className="text-xs text-gray-400 py-2">Show more</p>
      </div>
    </div>
  );
};

export default TopRepos;
