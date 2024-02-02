"use client";
import { useState } from "react";

const Categories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="bg-[#1FA45B] rounded-t-md p-2">
        <h2 className="text-center text-xl font-semibold text-white">
          Categories
        </h2>
      </div>
      <div className="relative m-2">
        <input
          type="text"
          className="px-10 py-2 pr-8 min-w-full bg-white text-black rounded border outline-offset-2 outline-1 focus:outline-[#1FA45B]"
          placeholder="Search by Categories"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-18 p-2 rounded-md text-gray-400 absolute left-0 top-1/2 transform -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.2-5.2"
          ></path>
          <circle cx="10" cy="10" r="8"></circle>
        </svg>
      </div>
      <div className="p-2 relative">
        {/* button1 start */}
        <button
          className="bg-[#E8F0F5] p-2 my-5 w-full rounded-md flex items-center justify-between"
          onClick={handleDropdownToggle}
        >
          {/* Your existing button content */}
          <div className="flex items-center">
            <img
              src="/images/fever.png"
              alt="Profile"
              className="w-16 h-16 rounded-md p-2 cursor-pointer bg-[#CFE0E5]"
            />
            <div className="ml-2">
              <h3 className="text-lg font-semibold text-[#1FA45B]">
                Introduction to Dua
              </h3>
              <h6 className="text-sm text-gray-600 text-start">
                Subcategory: 11
              </h6>
            </div>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-bold text-gray-800">15</h5>
            <p className="text-xl text-gray-600">Duas</p>
          </div>
        </button>

        {isDropdownOpen && (
          <ol className="relative ml-5 border-l border-dotted border-[#1FA45B]">
            <li className="mb-8 ml-4">
              <div className="absolute w-2 h-2 bg-[#1FA45B] rounded-full -left-1 top-2 border border-[#1FA45B]"></div>
              <h3 className="text-sm text-[#1FA45B]">What is Dua</h3>
            </li>
            <li className="mb-8 ml-4">
              <div className="absolute w-2 h-2 bg-[#1FA45B] rounded-full -left-1 border-dotted border-[#1FA45B]"></div>
              <h3 className="text-sm text-[#1FA45B]">
                Condition for Dua to be seccessful
              </h3>
            </li>
            <li className="mb-8 ml-4">
              <div className="absolute w-2 h-2 bg-[#1FA45B] rounded-full -left-1 border-dotted border-[#1FA45B]"></div>
              <h3 className="text-sm text-[#1FA45B]">The Method of Dua</h3>
            </li>
          </ol>
        )}
        {/* button2 start */}
        <button className="bg-[#E8F0F5] p-2 my-5 w-full rounded-md flex items-center justify-between">
          {/* Your existing button content */}
          <div className="flex items-center">
            <img
              src="/images/fever.png"
              alt="Profile"
              className="w-16 h-16 rounded-md p-2 cursor-pointer bg-[#CFE0E5]"
            />
            <div className="ml-2">
              <h3 className="text-lg font-semibold text-[#1FA45B]">
                Introduction to Dua
              </h3>
              <h6 className="text-sm text-gray-600 text-start">
                Subcategory: 11
              </h6>
            </div>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-bold text-gray-800">15</h5>
            <p className="text-xl text-gray-600">Duas</p>
          </div>
        </button>
        {/* button3 start */}
        <button className="bg-[#E8F0F5] p-2 my-5 w-full rounded-md flex items-center justify-between">
          {/* Your existing button content */}
          <div className="flex items-center">
            <img
              src="/images/fever.png"
              alt="Profile"
              className="w-16 h-16 rounded-md p-2 cursor-pointer bg-[#CFE0E5]"
            />
            <div className="ml-2">
              <h3 className="text-lg font-semibold text-[#1FA45B]">
                Introduction to Dua
              </h3>
              <h6 className="text-sm text-gray-600 text-start">
                Subcategory: 11
              </h6>
            </div>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-bold text-gray-800">15</h5>
            <p className="text-xl text-gray-600">Duas</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default Categories;
