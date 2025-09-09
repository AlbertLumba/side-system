import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../App/routes"; // ✅ adjust path if needed

export default function Navbar() {
  return (
    <nav className="p-4">
      <ul>
        {routes.map((route, i) => {
          const IconComponent = route.icon;
          return (
            <li key={i} className="mb-2">
              <NavLink
                to={route.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-700 hover:bg-gray-200"
                  }`
                }
              >
                {IconComponent && <IconComponent size={18} />}
                <span>{route.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
