import { alertText } from "@/constants/external";
import React from "react";

const Alert = () => {
  return (
    <div className="bg-slate-600 flex items-center justify-center max-md:hidden">
      {alertText.map(({ label, action, href }) => (
        <div className="flex gap-2 py-1 text-white" key={href}>
          <p>{label}</p>
          <a href={href} className="underline">
            {action}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Alert;
