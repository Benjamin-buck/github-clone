import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import TopRepos from "@/components/TopRepos";
import React from "react";

const Dashboard = () => {
  return (
    <div className="text-white">
      <Navbar />

      <div className="flex flex-row max-md:flex-col">
        <div className=" flex-1 h-[100vh] border-r border-gray-700">
          <TopRepos />
        </div>
        <div className="w-[50%] mt-6 ml-[100px]">
          <h1 className="text-2xl font-semibold">Home</h1>
        </div>
        <div className="flex-1 max-xl:hidden">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
