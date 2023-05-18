import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideNav = ({ categories }) => {
  return (
    <div className="flex flex-col lg:w-72 h-screen bg-white dark:bg-[#1F2937] rounded-xl sticky top-28">
      <div className="flex items-center justify-center h-20 shadow-sm rounded-xl shadow-[#19C2A3]">
        <h1 className="lg:text-xl font-semibold uppercase text-[#19C2A3] text-sm  ">
          Course : {categories?.length}
        </h1>
      </div>

      <div className="ml-4">
        {categories.map((category, i) => (
          <ul key={i} className="flex flex-col py-4 text-sm">
            <li>
              <NavLink
                to={`/category/${category.id}`}
                activeClassName="active"
                style={({ isActive, isPending }) => {
                  const baseStyles = {
                    fontWeight: isActive ? "bold" : "normal",
                    color: isPending ? "green" : "#19C2A3",
                  };

                  if (isActive && isPending) {
                    baseStyles.backgroundColor = "";
                  }

                  return baseStyles;
                }}
              >
                {category.name}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
