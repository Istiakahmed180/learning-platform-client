import React from "react";

const CourseContact = () => {
  return (
    <div className="bg-teal-100 dark:bg-gray-900 py-8 mt-32 mx-8 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-teal-600 dark:text-white font-semibold tracking-wide uppercase mb-6">
          Course Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Course Instructor
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              Contact the instructor for any course-specific questions or
              clarifications.
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://www.freeths.co.uk/wp-content/uploads/2020/01/Alex-Johnson-1.jpg"
                alt="Instructor Avatar"
              />
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  John Doe
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  Email: john.doe@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Technical Support
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              For technical issues or difficulties accessing course materials,
              contact our support team.
            </p>
            <div>
              <p className="text-gray-900 dark:text-white font-semibold">
                Email Support
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                Email: support@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContact;
