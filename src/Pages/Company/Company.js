import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <section className="py-6 sm:py-12 dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Anytime Anywhere</h2>
          <p className="font-serif text-sm dark:dark:text-gray-400">
            Learn On Your Suitable Schedule
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:dark:bg-gray-900">
            <Link
              rel="noopener noreferrer"
              to="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:dark:bg-gray-500"
                src="https://media.istockphoto.com/photos/online-education-concept-picture-id636332456?k=20&m=636332456&s=612x612&w=0&h=ckwh8_U-ET3QSyJUAaceejX6WGdljVy-E87PWO-Sok8="
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                to="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                rel="noopener noreferrer"
                to="#"
                className="text-xs tracking-wider uppercase hover:underline dark:dark:text-red-400"
              >
                Courses
              </Link>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Computer algebra
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400">
                <span>June 1, 2022</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:dark:bg-gray-900">
            <Link
              rel="noopener noreferrer"
              to="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:dark:bg-gray-500"
                src="https://c8.alamy.com/comp/E65412/stressed-computer-engineer-working-on-broken-cables-E65412.jpg"
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                to="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                rel="noopener noreferrer"
                to="#"
                className="text-xs tracking-wider uppercase hover:underline dark:dark:text-red-400"
              >
                Courses
              </Link>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Computer engineering
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400">
                <span>June 2, 2022</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:dark:bg-gray-900">
            <Link
              rel="noopener noreferrer"
              to="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:dark:bg-gray-500"
                src="https://addons-media.operacdn.com/media/CACHE/images/themes/45/190745/1.1-rev1/images/467ea70021b6eac5d3a136bf93c4e40f/d0f43ddeb7ed7abe6e460269d4b36448.jpg"
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                to="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                rel="noopener noreferrer"
                to="#"
                className="text-xs tracking-wider uppercase hover:underline dark:dark:text-red-400"
              >
                Courses
              </Link>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Computer hardware
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400">
                <span>June 3, 2022</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:dark:bg-gray-900">
            <Link
              rel="noopener noreferrer"
              to="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:dark:bg-gray-500"
                src="https://csforallmnv2.files.wordpress.com/2022/03/rectangle-29-1.png"
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                to="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                rel="noopener noreferrer"
                to="#"
                className="text-xs tracking-wider uppercase hover:underline dark:dark:text-red-400"
              >
                Courses
              </Link>
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
