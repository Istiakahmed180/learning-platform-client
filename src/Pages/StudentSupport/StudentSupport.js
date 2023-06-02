import React from "react";

const StudentSupport = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-8 mt-32 mx-8 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-teal-600 font-semibold tracking-wide uppercase mb-6">
          Student Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between transition duration-300 transform hover:-translate-y-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Email Support
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-2">
                Contact our support team via email for any questions or
                concerns.
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-2">
                Email: support@example.com
              </p>
            </div>
            <div className="text-right">
              <a
                href="mailto:support@example.com"
                className="text-teal-600 underline"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between transition duration-300 transform hover:-translate-y-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Live Chat
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-2">
                Chat with our support team in real-time to get immediate
                assistance.
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-2">
                Hours: Mon-Fri, 9am-5pm
              </p>
            </div>
            <div className="text-right">
              <span className="text-teal-600 underline">Chat Now</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between transition duration-300 transform hover:-translate-y-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Help Center
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-2">
                Visit our Help Center for self-service resources and FAQs.
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-2">
                <a
                  href="https://example.com/help-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 underline"
                >
                  Visit Help Center
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSupport;
