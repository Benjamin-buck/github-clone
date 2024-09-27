import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { cards } from "@/constants/data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="text-white">
      <Navbar />

      <div className="mx-[18%] max-xl:mx-6 mt-12">
        <div className="flex gap-6">
          <Image
            src="/profile.jpg"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
