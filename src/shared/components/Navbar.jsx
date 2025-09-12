import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../App/routes";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <nav className="p-2 h-full">
      <ul className="flex flex-col h-full">
        {routes.map((route, i) => {
          const IconComponent = route.icon;
          const isLast = i === routes.length - 1; // ✅ check last item

          return (
            <li
              key={i}
              className={`mb-3 font-normal ${isLast ? "mt-auto mb-5" : ""}`} // ✅ push last item down
            >
              <NavLink
                to={route.path}
                end
                onClick={() => {
                  if (!isSidebarOpen) setIsSidebarOpen(true);
                }}
                className={({ isActive }) =>
                  `flex items-center h-10 ${
                    isSidebarOpen ? "gap-3 px-4" : "justify-center"
                  } rounded transition-colors duration-200 ${
                    isActive
                      ? "bg-primary-blue text-white shadow"
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
