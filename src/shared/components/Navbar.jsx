// src/shared/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../App/routes";

export default function Navbar({ isSidebarOpen }) {
  return (
    <nav className="p-2">
      <ul>
        {routes.map((route, i) => {
          const IconComponent = route.icon;
          return (
            <li key={i} className="mb-2 font-normal">
              <NavLink
                to={route.path}
                end
                className={({ isActive }) =>
                  `flex items-center ${
                    isSidebarOpen ? "gap-3 px-6 py-2" : "justify-center py-2"
                  } rounded transition-colors duration-200 ${
                    isActive
                      ? "bg-primary-blue-600 text-white shadow"
                      : "text-gray-700 hover:bg-gray-200"
                  }`
                }
              >
                {IconComponent && <IconComponent size={20} />}
                {isSidebarOpen && <span>{route.name}</span>}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
