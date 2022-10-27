import React from "react";
import Image from "../../Assests/Image/hero-img1.png";
import Company from "../Company/Company";

const HeroSection = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 ">
        <div className="mx-auto">
          <h2 className="font-semibold text-center lg:text-start text-3xl leading-snug mb-6">
            Computer Science: <br /> Programming with a Purpose
          </h2>
          <p className="text-[#AAA6AA]">
            The basic for education <br /> in the last millennium was “reading,
            writing, and arithmetic <br /> now it is reading, writing, and
            computing
          </p>
          <form className="mt-10">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative w-3/4 mx-auto lg:mx-0">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="mx-auto block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto">
          <img className="w-full" src={Image} alt="" />
        </div>
      </div>
      <Company></Company>
    </div>
  );
};

export default HeroSection;
