/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        alt="background Image"
        src="/hero.png"
        width={770}
        height={540}
        className="absolute -z-10 -right-[100px] top-0 max-lg:hidden"
      />
      <div className="mx-auto container mt-[100px] flex">
        <div className="flex flex-col items-center px-8">
          <div className="circle">
            <div className="w-[15px] h-[15px] rounded-full border-[3px] border-gray-500"></div>
          </div>
          <div className="mt-2">
            <div className="w-[4px] h-[220px]  bg-gradient-to-t from-[#7b72ff]"></div>
          </div>
          <div className="mt-2">
            <PiBracketsCurlyBold className="text-gray-200 text-3xl" />
          </div>
          <div className="mt-2">
            <div className="w-[4px] h-[450px]  bg-gradient-to-t from-[#7b72ff] to-red-400 mt-2"></div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-white text-8xl font-semibold max-md:text-4xl">
              Lets build from here
            </h1>
            <p className="text-lg text-gray-400">
              The worlds leading AI-powered developer platform.
            </p>
          </div>
          <div className="mt-[95px] flex flex-col">
            <label
              htmlFor="email"
              className="font-semibold text-white h-full w-full"
            >
              Email address
            </label>
            <div className="flex max-md:flex-col mr-4">
              <input
                type="text"
                className="pl-3 py-2 pr-[100px] rounded-l-md max-mx:pr-2 max-md:rounded-md"
                placeholder="you@company.com"
              />
              <button className="bg-[#753fc7] px-2 text-white font-semibold py-[10px] rounded-r-md max-md:mt-4 max-md:rounded-md">
                Sign up for GitHub
              </button>
            </div>
          </div>
          <div className="mt-[150px]">
            <h3 className="text-2xl text-gray-400">
              Trusted by the worlds leading Organizations
            </h3>
            <div className="flex gap-8 flex-wrap">
              <img src="/3m.svg" alt="" />
              <img src="/kpmg.svg" alt="" />
              <img src="/mercedes.svg" alt="" />
              <img src="/sap.svg" alt="" />
              <img src="/pg.svg" alt="" />
              <img src="/tellus.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
