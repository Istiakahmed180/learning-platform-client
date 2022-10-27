import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const CourseData = useLoaderData();

  useEffect(() => {
    fetch("https://assignment-project-fake-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-100">
        <div className="    grid grid-cols-1 lg:grid-cols-2 ">
          <div className="w-full  leading-10  px-6 py-16 rounded-md sm:px-12 md:px-16  bg-gray-900 ">
            <h1 className="text-center mb-6 text-2xl py-1 bg-sky-500 rounded-3xl text-gray-200 font-bold">
              Computer Science Category: {categories.length}
            </h1>
            {categories.map((category) => (
              <p
                className="hover:bg-red-500 rounded px-5 w-3/4"
                key={category.id}
              >
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </p>
            ))}
          </div>
          <div className="w-full">
            <Category CourseData={CourseData} key={CourseData._id}></Category>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
