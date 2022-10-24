import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
  },
]);

export default router;
