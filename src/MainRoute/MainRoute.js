import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";

const MainRoute = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoute;
