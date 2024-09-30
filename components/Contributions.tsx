import React from "react";

function showContributions() {
  const results = [];
  for (let i = 0; i <= 52; i++) {
    results.push(i);
  }
  return results;
}

const Contributions = () => {
  return (
    <div className="w-full border-gray-500 border rounded-lg flex gap-1 mt-2 max-lg:hidden">
      <div className="m-2 justify-between">
        <div className="flex justify-between">
          <p>Oct</p>
          <p>Nov</p>
          <p>Dec</p>
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>Apr</p>
          <p>May</p>
          <p>Jun</p>
          <p>Jul</p>
          <p>Aug</p>
          <p>Sept</p>
        </div>
        <div className="flex gap-1">
          {showContributions().map((day) => (
            <div
              key={day}
              className="bg-gray-800 rounded-sm h-[12px] w-[12px]"
            ></div>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          {showContributions().map((day) => (
            <div
              key={day}
              className="bg-gray-800 rounded-sm h-[12px] w-[12px]"
            ></div>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          {showContributions().map((day) => (
            <div
              key={day}
              className="bg-gray-800 rounded-sm h-[12px] w-[12px]"
            ></div>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          {showContributions().map((day) => (
            <div
              key={day}
              className="bg-gray-800 rounded-sm h-[12px] w-[12px]"
            ></div>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          {showContributions().map((day) => (
            <div
              key={day}
              className="bg-gray-800 rounded-sm h-[12px] w-[12px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contributions;
