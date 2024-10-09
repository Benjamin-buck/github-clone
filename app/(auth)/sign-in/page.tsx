import { signInLinks } from "@/constants/external";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <main>
      <div className="w-[100vw] flex flex-col mt-8 items-center">
        <FaGithub className="text-white text-5xl" />
        <h1 className="text-white text-2xl mt-8">Sign in to GitHub</h1>
      </div>
      <div className="w-full flex justify-center mt-5">
        <form className="w-[300px] max-sm:w-[85%] border rounded-md border-gray-700">
          <div className="flex flex-col bg-[#161B22] px-4 py-6 rounded-md">
            <label htmlFor="" className="text-white font-semibold">
              Username or email address
            </label>
            <input
              type="text"
              className="bg-[#0D1117] px-2 rounded-md focus:ring-2 focus:border-none ring-white mt-2 py-1"
            />

            <div className="flex justify-between items-center pt-4">
              <label htmlFor="" className="text-white font-semibold">
                Password
              </label>
              <Link href="/sign-in" className="text-blue-400 text-sm">
                Forgot password?
              </Link>
            </div>
            <input
              type="text"
              className="bg-[#0D1117] px-2 py-1 mt-2 rounded-md"
            />

            <button className="bg-[#448440] w-full font-semibold rounded-md text-white py-1 mt-4">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-full justify-center mt-4">
        <div className="w-[300px] max-sm:w-[85%] border border-gray-700 rounded-md py-4 text-center">
          <Link href="/" className="text-blue-400">
            Sign in with a passkey
          </Link>
          <p className="text-white">
            New to GitHub?{" "}
            <Link href="/" className="text-blue-400">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <div className="text-gray-400 text-sm flex gap-4 w-full justify-center mt-[100px] max-md:flex-col max-md:items-center max-md:mt-2">
        {signInLinks.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default page;
