import React from "react";

const StatusUI = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-pageLighter";
    switch (status.toLowerCase()) {
      case "not started":
        return color;
      case "in progress":
        color = "bg-accentDark";
        return color;
      case "completed":
        color = "bg-accent";
        return color;
      default:
        return color;
    }
  };
  return (
    <span
      className={`inline-block px-2 py-1 text-xs text-textDefault rounded-full ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusUI;
