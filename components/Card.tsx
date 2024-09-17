import React from "react";

interface Props {
  label: string;
  icon: string;
  description: string;
}
const Card = ({ label, icon, description }: Props) => {
  return (
    <div className="bg-[#151b23] flex-1 px-4 py-3 rounded-lg border border-gray-700">
      <h2 className="text-sm font-semibold">{label}</h2>
      <div className="flex gap-2 mt-2">
        <img src={icon} alt="Icon" className="w-8 h-8" />
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
