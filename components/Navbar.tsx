"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { BsRecordCircle } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { menuItems, profileItems, profileMenu } from "@/constants/data";

interface Props {
  profile?: boolean;
}

const Navbar = ({profile}: Props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [profileNav, setProfileNav] = useState(false);
  return (
    <>
      {mobileNav && (
        <div className="z-50 bg-[#151b23] fixed top-0 -left-[0] w-[400px] border-r border-gray-700 rounded-lg h-full ">
          {/* Logo Area */}
          <div className="flex items-center justify-between mx-4 mt-4">
            <FaGithub className="text-[35px] text-white" />
            <div
              onClick={() => setMobileNav(false)}
              className="bg-gray-700 flex items-center justify-center w-fit p-2 rounded-lg text-gray-300 hover:text-white transition-all duration-250"
            >
              <IoMdClose className="text-[15px]" />
            </div>
          </div>

          {/* Menu Items */}
          <div className="mx-4 mt-5">
            {menuItems.map((link) => (
              <Link
                href={link.href}
                key={link.Label}
                className="flex gap-2 items-center text-sm py-[6px] hover:bg-[#212830] rounded-md px-2"
              >
                <img src={link.icon} alt="icon" className="w-5" />
                {link.Label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {profileNav && (
        <div className="z-50 bg-[#151b23] fixed top-0 -right-[0] w-[300px] border-r border-gray-700 rounded-lg h-full ">
          {/* Logo Area */}
          <div className="flex items-center justify-between mx-4 mt-4">
            <div className="flex items-center gap-2">
              <Image
                src="/profile.jpg"
                width={40}
                height={40}
                alt="profile photo"
                className="rounded-full"
              />
              <p className="font-semibold">Benjamin Alan</p>
            </div>

            <div
              onClick={() => setProfileNav(false)}
              className="bg-gray-700 flex items-center justify-center w-fit p-2 rounded-lg text-gray-300 hover:text-white transition-all duration-250"
            >
              <IoMdClose className="text-[15px]" />
            </div>
          </div>

          {/* Menu Items */}
          <div className="mx-4 mt-5">
            {profileItems.map((link) => (
              <Link
                href={link.href}
                key={link.Label}
                className="flex gap-2 items-center text-sm py-[6px] hover:bg-[#212830] rounded-md px-2"
              >
                <img src={link.icon} alt="icon" className="w-5" />
                {link.Label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav className="bg-black border-b border-gray-700 py-4">
        <div className="px-4 flex justify-between">
          <div className="flex items-center gap-3">
            <MdOutlineMenu
              onClick={() => setMobileNav(true)}
              className="text-[30px] border border-gray-700 rounded-md p-1"
            />
            <Link href="/">
              <FaGithub className="text-3xl" />
            </Link>
            <p className="font-semibold text-sm">Dashboard</p>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="flex gap-2 px-2 items-center rounded-xl border border-gray-600 max-md:py-2">
              <IoSearch />
              <input
                type="text"
                className="bg-black max-md:hidden rounded-lg py-1"
                placeholder="Type / to search"
              />
            </div>

            <div className="border border-gray-600 flex gap-2 p-2 text-md rounded-lg max-sm:hidden">
              <IoMdAdd />
              <FaCaretDown />
            </div>
            <div className="border border-gray-600 flex gap-2 p-2 text-md rounded-lg max-sm:hidden">
              <BsRecordCircle />
            </div>

            <div className="border border-gray-600 flex gap-2 p-2 text-md rounded-lg max-sm:hidden">
              <GoRepoForked />
            </div>
            <div className="border border-gray-600 flex gap-2 p-2 text-md rounded-lg">
              <FaInbox />
            </div>
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={35}
              height={35}
              className="rounded-full"
              onClick={() => {
                setProfileNav(true);
              }}
            />
          </div>
        </div>
        <div className="mx-4 mt-3 flex gap-4 max-md:hidden">
          {profile && profileMenu.map(({href, Label, icon}) => (
            <Link href={icon} className="flex gap-2 items-center" key={Label}><Image alt="icon" className="w-[20px]" src={icon} width={40} height={40} />{Label}</Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
