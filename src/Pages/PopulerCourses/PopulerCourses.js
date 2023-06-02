import React from "react";
import { Link } from "react-router-dom";

const PopulerCourses = () => {
  const courses = [
    {
      title: "Web Development Bootcamp",
      description:
        "Master the art of web development with our comprehensive bootcamp. Learn HTML, CSS, JavaScript, and more.",
      imageUrl:
        "https://www.classcentral.com/report/wp-content/uploads/2021/07/bootcamp-banner-6000.png",
    },
    {
      title: "Data Science Fundamentals",
      description:
        "Unlock the power of data science. Dive into statistical analysis, machine learning, and data visualization.",
      imageUrl:
        "https://cdn.corporatefinanceinstitute.com/assets/Data-Science-and-Machine-Learning-Fundamentals.png",
    },
    {
      title: "Graphic Design Essentials",
      description:
        "Discover the principles of graphic design and learn how to create visually stunning designs using industry-standard tools.",
      imageUrl:
        "https://resources.reed.co.uk/courses/coursemedia/428971/8a22ce99-2ced-45b0-8892-7fcaf87ab090_cover.jpg",
    },
    // Add more courses as needed
  ];

  return (
    <div>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 text-center">
            Popular Courses
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="object-cover object-center h-48 w-full"
                  src={course.imageUrl}
                  alt={course.title}
                />
                <div className="p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-600 dark:text-gray-400">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <Link className="text-base leading-6 font-medium text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopulerCourses;
