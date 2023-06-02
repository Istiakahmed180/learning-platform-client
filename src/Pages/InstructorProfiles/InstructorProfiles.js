import React from "react";

const InstructorProfiles = () => {
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      expertise: "Web Development",
      qualifications: "BSc in Computer Science",
      bio: "John Doe is a seasoned web developer with over 10 years of experience. He specializes in front-end development using modern technologies such as React and Angular.",
      image: "https://tcfg.org/wp-content/uploads/2017/03/1-1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      expertise: "Data Analysis",
      qualifications: "MSc in Statistics",
      bio: "Jane Smith is a data analyst with a passion for uncovering insights from complex datasets. With her expertise in statistical analysis and data visualization, Jane has helped organizations make data-driven decisions.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjM3MjM3NTAxM15BMl5BanBnXkFtZTgwMTY0Nzg2OTE@._V1_.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      expertise: "UI/UX Design",
      qualifications: "BFA in Graphic Design",
      bio: "Alex Johnson is a talented UI/UX designer with a strong background in graphic design. With a keen eye for aesthetics and usability, Alex has created visually stunning and user-friendly interfaces for various digital products.",
      image:
        "https://pbs.twimg.com/profile_images/1211323188778422272/07kLc6D4_400x400.jpg",
    },
    // Add more instructors here...
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-8 mt-32 mx-8 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-indigo-600 font-semibold tracking-wide mb-6">
          Instructor Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white my-2">
                  {instructor.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {instructor.expertise}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
                  {instructor.qualifications}
                </p>

                <p className="text-gray-700 dark:text-gray-400 text-justify">
                  {instructor.bio}
                </p>
              </div>

              <div className="mt-4">
                <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfiles;
