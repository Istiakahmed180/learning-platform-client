import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
  const { image_url, title, details, _id, rating, price } = data;
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-xl hover:bg-[#21FFD6] dark:hover:bg-[#438074] duration-300 hover:scale-95 dark:bg-gray-800 mx-5">
      <img className="object-cover w-full h-44" src={image_url} alt="avatar" />

      <div className="py-3 text-center">
        <span className="block text-xl font-bold text-gray-800 dark:text-white">
          {title ? title.slice(0, 20) + "..." : ""}
        </span>
      </div>
      <div className="flex justify-between mx-3 mb-3 dark:text-gray-300">
        <span>
          <span className="font-semibold">Beginner</span>: {price.Beginner}
        </span>
        <span>
          <span className="font-semibold">Team</span>: {price.Team}
        </span>
      </div>
      <Link to={`/course-details/${_id}`}>
        <button className="bg-[#19C2A3] text-white rounded px-2 py-1 ml-2 mb-2">
          Explore Now
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
