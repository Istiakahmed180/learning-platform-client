import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const { user, signOutUser } = useContext(AuthContext);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  return (
    <div className="px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 shadow-2xl rounded-b-xl shadow-[#18C1A2]">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8"
          >
            <i className="ri-pantone-line text-2xl text-teal-500"></i>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-100 uppercase">
              Coursera
            </span>
          </Link>
          <ul className="flex items-center  space-x-8 lg:flex ">
            <li>
              <Link
                to="/home"
                aria-label="Our product"
                title="Our product"
                className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300 hidden lg:block"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                aria-label="Our product"
                title="Our product"
                className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300 hidden lg:block"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300 hidden lg:block"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="About us"
                title="About us"
                className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300 hidden lg:block"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`flex items-center justify-center mr-5 w-10 h-10 duration-300 hover:bg-[#98e0d3] hover:dark:bg-gray-700 rounded-full focus:outline-none ${
              theme ? "shadow-md" : ""
            }`}
            onClick={() => setTheme((prevMode) => !prevMode)}
          >
            <i
              className={`${
                theme ? "text-yellow-300" : "text-black"
              } transition-colors duration-300 text-2xl`}
            >
              {theme ? <RiMoonLine /> : <RiSunLine />}
            </i>
          </button>

          <ul className="flex items-center hidden space-x-8 lg:flex">
            {user?.uid ? (
              <>
                <Tippy content={user.displayName}>
                  <img
                    alt=""
                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                    src={user?.photoURL && user.photoURL}
                  />
                </Tippy>
                <li>
                  <Link
                    onClick={signOutUser}
                    aria-label="Log Out"
                    title="Log Out"
                    className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300"
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  aria-label="Log In"
                  title="Log In"
                  className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300"
                >
                  Log In
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="lg:hidden z-10">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white dark:bg-[#1F2937] border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <i className="ri-pantone-line text-2xl text-teal-500"></i>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-white">
                        Coursera
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/home"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/courses"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300 "
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300 "
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="About us"
                        title="About us"
                        className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300"
                      >
                        Blog
                      </Link>
                    </li>
                    {user?.uid ? (
                      <>
                        <Tippy content={user.displayName}>
                          <img
                            alt=""
                            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            src={user?.photoURL}
                          />
                        </Tippy>
                        <li>
                          <Link
                            onClick={signOutUser}
                            aria-label="Log Out"
                            title="Log Out"
                            className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300"
                          >
                            Log Out
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link
                          to="/login"
                          aria-label="Log In"
                          title="Log In"
                          className="font-medium hover:underline hover:text-teal-600 hover:transition-colors duration-300 tracking-wide text-gray-700 dark:text-teal-300 dark:text-teal-300 dark:text-teal-300"
                        >
                          Log In
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
