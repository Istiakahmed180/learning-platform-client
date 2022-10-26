import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Category = ({ CourseData }) => {
  return (
    <div className="grid grid-cols-2 gap-10 ">
      {CourseData.map((data) => (
        <CourseCard key={data._id} data={data}></CourseCard>
      ))}
    </div>
  );
};

export default Category;
