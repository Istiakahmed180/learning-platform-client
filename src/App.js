import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="bg-teal-100 dark:bg-gray-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
