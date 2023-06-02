import React from "react";
import { Link } from "react-router-dom";

const LearningResources = () => {
  const resources = [
    {
      id: 1,
      title: "E-Book: Mastering React",
      description: "A comprehensive guide to mastering React development.",
      link: "https://example.com/ebook-mastering-react",
    },
    {
      id: 2,
      title: "Article: Best Practices for React Component Design",
      description:
        "Learn about the best practices for designing React components.",
      link: "https://example.com/article-react-component-design",
    },
    {
      id: 3,
      title: "Video Tutorial: Building a React App from Scratch",
      description:
        "Follow along with this video tutorial to build a React app from scratch.",
      link: "https://example.com/video-tutorial-react-app",
    },
    // Add more resources here...
  ];

  return (
    <div className="bg-teal-100 dark:bg-gray-900 py-8 mt-32 mx-8 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-green-700 font-semibold tracking-wide uppercase mb-6">
          Learning Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between transition duration-300 transform hover:-translate-y-2"
            >
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-white my-2">
                  {resource.title}
                </h3>
                <p className="text-green-700 dark:text-gray-400 mb-2">
                  {resource.description}
                </p>
              </div>
              <div className="text-right">
                <span className="text-green-700 underline">Read More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningResources;
