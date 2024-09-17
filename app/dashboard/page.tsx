import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import TopRepos from "@/components/TopRepos";

const Dashboard = () => {
  return (
    <div className="text-white">
      <Navbar />

      <div className="flex flex-row max-md:flex-col">
        <div className=" flex-1 h-[100vh] ">
          <TopRepos />
        </div>
        <div className="w-[65%] border-l border-gray-700  pl-[100px] max-xl:px-5 max-md:w-[100%]">
          <MainContent />
        </div>
        <div className="flex-1 max-xl:hidden">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
