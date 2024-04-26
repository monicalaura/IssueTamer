import React from "react";

const ProgressBar = ({ progress }) => {
  // Log the progress prop value
  console.log("Progress value:", progress);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-cyan-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
