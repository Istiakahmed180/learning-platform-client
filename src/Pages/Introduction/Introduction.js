import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div>
      <section className="bg-teal-500 dark:bg-teal-700 py-12 px-4 sm:px-6 lg:px-8 container mx-auto rounded mt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl leading-10 font-extrabold text-white dark:text-gray-200 sm:text-5xl sm:leading-none md:text-5xl">
            Welcome to our Learning Platform
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-200 dark:text-gray-400 sm:mt-4">
            Expand your knowledge and discover new skills with our wide range of
            courses.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-teal-500 dark:text-teal-400 bg-white dark:bg-gray-700 hover:text-teal-600 hover:bg-teal-100 dark:hover:bg-teal-800 focus:outline-none focus:shadow-outline-teal active:bg-teal-200 dark:active:bg-teal-900 transition ease-in-out duration-150"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
