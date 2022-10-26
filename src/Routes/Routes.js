import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import HeroSection from "../Pages/HeroSection/HeroSection";
import LogIn from "../Pages/LogIn/LogIn";
import PremiumCourses from "../Pages/PremiumCourses/PremiumCourses";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
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
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Courses></Courses>,
      },
      {
        path: "/course-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course-details/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },

      {
        path: "/course-details",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/premium-courses",
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
