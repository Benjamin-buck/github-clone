import { navLinks } from "@/constants/external";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between text-white py-3 mx-auto container max-md:mx-4">
      <div className="flex items-center gap-6 ">
        <FaGithub className="text-[32px]" />
        {navLinks.map(({ label, href }) => (
          <Link
            href={href}
            key={label}
            className="hover:text-slate-400 max-md:hidden"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <IoSearchSharp className="relative left-12 max-xl:hidden" />
        <input
          type="text"
          className="bg-slate-700 border border-slate-400 rounded-md text-slate-200 text-sm py-1.5 pl-8 pr-[100px] max-xl:hidden"
          placeholder="Search or jump to..."
        />

        <Link href="/sign-in">Sign in</Link>
        <Link href="/sign-up" className="border rounded-md px-3 py-1">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
