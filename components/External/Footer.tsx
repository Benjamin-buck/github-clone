import {
  footerColumn1,
  footerColumn2,
  footerColumn3,
  footerColumn4,
  footerText,
} from "@/constants/external";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 w-full bg-[#0D1117]">
      <div className="flex mx-auto container text-white justify-between max-lg:flex-col pt-4">
        <div className="max-lg:text-center mb-8">
          {footerText.map(({ logo, heading, description, buttonLabel }) => (
            <div key="1">
              <h2 className="text-2xl font-bold">{logo}</h2>
              <h3 className="mt-5 text-sm font-bold">{heading}</h3>
              <p className="text-sm text-gray-400">{description}</p>
              <button className="border border-gray-600 px-4 py-2 rounded-md mt-4">
                {buttonLabel}
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-around flex-1 flex-wrap">
          <div className="flex flex-col text-sm text-gray-400 gap-2">
            {footerColumn1.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-sm text-gray-400 gap-2">
            {footerColumn2.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-sm text-gray-400 gap-2">
            {footerColumn3.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-sm text-gray-400 gap-2">
            {footerColumn4.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 mt-4 text-white">
        <div className="mx-auto container py-3 text-xs text-gray-500 max-md:px-8">
          <div>
            <p>2024 Github, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
