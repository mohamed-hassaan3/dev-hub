import React from "react";

const CheckboxBtn = () => {
  return (
    <>
      <span className="relative w-4 h-4 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-100 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:scale-105">
        <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-100 peer-checked:animate-pulse"></span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="ml-3 text-[#717171] group-hover:text-blue-500 font-medium transition-colors duration-300">
        private and conditions
      </span>
    </>
  );
};

export default CheckboxBtn;
