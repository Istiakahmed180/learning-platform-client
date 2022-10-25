import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-100">
        <div className="container grid gap-6 mx-auto  lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full leading-10  px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
            <h1 className="text-center mb-6 text-2xl py-1 bg-sky-500 rounded-3xl text-gray-200 font-bold">
              Computer Science Category: {categories.length}
            </h1>
            {categories.map((category) => (
              <p
                className="hover:bg-red-500 rounded px-5 w-3/4"
                key={category.id}
              >
                <Link>{category.name}</Link>
              </p>
            ))}
          </div>
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Courses;
