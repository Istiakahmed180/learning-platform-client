import React from "react";

const Company = () => {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-300">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Anytime Anywhere</h2>
          <p className="font-serif text-sm dark:dark:text-gray-400">
            Learn On Your Suitable Schedule
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-900 hover:bg-[#21ffd6] duration-300 dark:hover:bg-gray-700 rounded-lg shadow-md hover:scale-105">
            <div className="relative">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-lg"
                src="https://media.istockphoto.com/photos/online-education-concept-picture-id636332456?k=20&m=636332456&s=612x612&w=0&h=ckwh8_U-ET3QSyJUAaceejX6WGdljVy-E87PWO-Sok8="
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 py-1 text-sm bg-gray-800 text-white rounded-full">
                  New
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs tracking-wider uppercase text-[#16BA97]  font-semibold">
                Courses
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Computer algebra
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2022</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>

          <article className="flex flex-col dark:bg-gray-900  duration-300 hover:bg-[#21ffd6] dark:hover:bg-gray-700 rounded-lg shadow-md hover:scale-105">
            <img
              alt=""
              className="object-cover w-full h-52 dark:dark:bg-gray-500 rounded-t-lg"
              src="https://c8.alamy.com/comp/E65412/stressed-computer-engineer-working-on-broken-cables-E65412.jpg"
            />
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs tracking-wider uppercase text-[#16BA97] font-semibold ">
                Courses
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Computer engineering
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400">
                <span>June 2, 2022</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 hover:bg-[#21ffd6]  duration-300 dark:hover:bg-gray-700 rounded-lg shadow-md hover:scale-105">
            <img
              alt=""
              className="object-cover w-full h-52 dark:dark:bg-gray-500 rounded-t-lg"
              src="https://addons-media.operacdn.com/media/CACHE/images/themes/45/190745/1.1-rev1/images/467ea70021b6eac5d3a136bf93c4e40f/d0f43ddeb7ed7abe6e460269d4b36448.jpg"
            />
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs tracking-wider uppercase text-[#16BA97] font-semibold ">
                Courses
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Computer hardware
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400">
                <span>June 3, 2022</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 hover:bg-[#21ffd6]  duration-300 dark:hover:bg-gray-700 rounded-lg shadow-md hover:scale-105">
            <img
              alt=""
              className="object-cover w-full h-52 dark:dark:bg-gray-500 rounded-t-lg"
              src="https://csforallmnv2.files.wordpress.com/2022/03/rectangle-29-1.png"
            />
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs tracking-wider uppercase text-[#16BA97] font-semibold ">
                Courses
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Computer science education
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400">
                <span>June 4, 2022</span>
                <span>2.4K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Company;
