import Card from "@/components/Card";
import Contributions from "@/components/Contributions";
import Navbar from "@/components/Navbar";
import Repository from "@/components/Repository";
import { cards, trendingRepos } from "@/constants/data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="text-white">
      <Navbar profile={true} />

      <div className="mt-12 mx-10 flex flex-row">
        <div className="flex pr-12">
          <div>
            <Image
              src="/profile.jpg"
              width={300}
              height={300}
              className="rounded-full max-h-[300px]"
            />
            <h2 className="text-xl text-gray-500 mt-5">Benjamin Alan</h2>
            <button className="mt-4 bg-[#212830] w-full py-2 border border-gray-500 rounded-lg hover:">Edit Profile</button>
          </div>
          
        </div>
  
        <div className="flex flex-1 flex-col">
          <h2 className="text-lg">Popular Repositories</h2>
          <div className="flex flex-wrap justify-between max-lg:flex-col">
            {trendingRepos.map(() => (
              <Repository className="my-2 w-[49.5%] max-lg:w-auto" border={"true"} repo={"Github-Clone"} description={"Test"} language={"Javascript"} profileImage={"/profile.jpg"} starred={false}  />
            ))}
          </div>
          <div className="my-5">
            <h2>286 contributions in the last year</h2>
            <Contributions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
