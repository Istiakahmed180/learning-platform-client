import React from "react";

const EnrollmentProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description:
        "Sign up for an account on our website by providing your email and creating a password.",
    },
    {
      id: 2,
      title: "Choose a Course",
      description:
        "Browse through our available courses and select the one you want to enroll in.",
    },
    {
      id: 3,
      title: "Complete Payment",
      description:
        "Proceed to the payment page and choose your preferred payment method to complete the enrollment.",
    },
    {
      id: 4,
      title: "Access Course Materials",
      description:
        "Once the payment is successful, you will gain access to the course materials, including video lectures, assignments, and resources.",
    },
    {
      id: 5,
      title: "Attend Live Sessions",
      description:
        "Some courses may include live sessions or webinars. Join the scheduled sessions to interact with instructors and fellow learners.",
    },
    {
      id: 6,
      title: "Track Your Progress",
      description:
        "Use the learning dashboard to track your progress, complete quizzes, and monitor your course completion status.",
    },
  ];

  return (
    <div className="bg-teal-50 dark:bg-gray-900 py-8 mt-32 mx-8 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-green-700 font-semibold tracking-wide uppercase mb-6">
          Enrollment Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between transition duration-300 transform hover:-translate-y-2"
            >
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-green-700 dark:text-gray-400 mb-2">
                  {step.description}
                </p>
              </div>
              <div className="text-right">
                <span className="text-green-700 underline">Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentProcess;
