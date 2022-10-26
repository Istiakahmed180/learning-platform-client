import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HeroSection from "../Pages/HeroSection/HeroSection";
import LogIn from "../Pages/LogIn/LogIn";
import PremiumCourses from "../Pages/PremiumCourses/PremiumCourses";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HeroSection></HeroSection>,
      },
      {
        path: "/home",
        element: <HeroSection></HeroSection>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        loader: () =>
          fetch("https://assignment-project-fake-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-project-fake-server.vercel.app/category/${params.id}`
          ),
        element: <Courses></Courses>,
      },
      {
        path: "/course-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-project-fake-server.vercel.app/course-details/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },

      {
        path: "/course-details",
        loader: () =>
          fetch("https://assignment-project-fake-server.vercel.app/courses"),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/premium-courses",
        loader: () =>
          fetch("https://assignment-project-fake-server.vercel.app/courses"),
        element: (
          <PrivateRoute>
            <PremiumCourses></PremiumCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/premium-courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-project-fake-server.vercel.app/premium-courses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PremiumCourses></PremiumCourses>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
