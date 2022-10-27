import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
  const { image_url, title, details, _id } = data;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto mt-8 lg:mt-0">
      <img
        src={image_url}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {title.slice(0, 12)}
          </h2>
          <p className="dark:text-gray-100">{details.slice(0, 120)}</p>
        </div>
        <button
          type="button"
          className="bg-[#F87171] flex items-center justify-center w-3/4 p-1 mx-auto font-semibold tracking-wide rounded-md dark:bg-red-400 dark:text-gray-900"
        >
          <Link to={`/course-details/${_id}`}>Read more</Link>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
