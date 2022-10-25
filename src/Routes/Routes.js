import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Courses from "../Pages/Courses/Courses";
import HeroSection from "../Pages/HeroSection/HeroSection";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

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
        element: <Courses></Courses>,
      },
    ],
  },
]);

export default router;
