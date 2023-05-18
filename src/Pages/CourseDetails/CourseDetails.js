import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { image_url, title, details, _id, rating, price } = courseDetails;
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-gray-400 uppercase rounded-full bg-teal-accent-400">
                Badge: {rating.badge}
              </p>
            </div>
            <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              {title}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              <span className="text-2xl font-semibold underline text-[#18C1A2]">
                Available Packages
              </span>
              <div className="flex text-[#9adbd1] items-center mt-4 text-2xl font-semibold justify-between">
                <span>{price.Beginner}</span> | <span>Pro</span> |
                <span>Team</span>
              </div>
            </p>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={image_url}
              alt=""
            />
          </div>
          <p className="max-w-xl mb-4 text-justify mx-auto text-gray-700 dark:text-gray-300">
            {details}
          </p>
          <Link to={`/premium-courses/${_id}`}>
            <button
              type="button"
              className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 bg-[#18C1A2] dark:text-gray-900 text-gray-100"
            >
              Get Premium Access
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400 bg-orange-400">
                New
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
