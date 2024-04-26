import React from "react";

const MessageModal = ({ onClose, message, isSuccess }) => {
  const textColorClass = isSuccess ? "text-accentDark" : "text-red-600";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className={`text-xl font-bold mb-4 ${textColorClass}`}>
          {isSuccess ? "Success!" : "Error!"}
        </h2>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className={`mt-4 bg-page hover:bg-page-700 text-textDefault font-semibold py-1 px-2 rounded focus:outline-none focus:ring focus:ring-accentDark-200`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
