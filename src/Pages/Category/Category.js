import React from "react";
import CourseCard from "../CourseCard/CourseCard";

const Category = ({ CourseData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 ">
      {CourseData.map((data) => (
        <CourseCard key={data._id} data={data}></CourseCard>
      ))}
    </div>
  );
};

export default Category;
