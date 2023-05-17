import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import SideNav from "../SideNav/SideNav";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const CourseData = useLoaderData();

  useEffect(() => {
    fetch("https://assignment-project-fake-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="my-16">
      <div class=" flex  ">
        <SideNav categories={categories}></SideNav>
        <div className="w-full">
          <Category CourseData={CourseData} key={CourseData._id}></Category>
        </div>
      </div>
    </section>
  );
};

export default Courses;
