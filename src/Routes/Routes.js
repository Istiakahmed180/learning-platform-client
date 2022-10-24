import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import HeroSection from "../Pages/HeroSection/HeroSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: "/",
        element: <HeroSection></HeroSection>,
      },
    ],
  },
]);

export default router;
