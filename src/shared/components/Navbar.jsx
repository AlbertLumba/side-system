// src/shared/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../App/routes";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  const mainRoutes = routes.slice(0, -1); // all except last
  const lastRoute = routes[routes.length - 1]; // last one

  // helper to render icons with active state
  const renderIcon = (IconComponent, isActive) => {
    if (!IconComponent) return null;

    // React-icons (functions with render method)
    if (typeof IconComponent === "function" && IconComponent.render) {
      return (
        <IconComponent
          size={20}
          className={isActive ? "text-white" : "text-gray-700"}
        />
      );
    }

    // Custom wrapper (like <img>)
    return (
      <IconComponent
        className={`w-5 h-5 text-gray-700 ${
          isActive ? "filter invert brightness-0" : "filter-none"
        }`}
      />
    );
  };

  return (
    <nav className="p-2 h-full flex flex-col">
      {/* Main links */}
      <ul className="flex flex-col">
        {mainRoutes.map((route, i) => (
          <li key={i} className="mb-2 font-normal">
            <NavLink
              to={route.path}
              end
              onClick={() => {
                if (!isSidebarOpen) setIsSidebarOpen(true);
              }}
              className={({ isActive }) =>
                `flex items-center h-10 ${
                  isSidebarOpen ? "gap-3 px-3" : "justify-center"
                } rounded transition-colors duration-200 ${
                  isActive
                    ? "bg-primary-blue text-white shadow"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {renderIcon(route.icon, isActive)}
                  {isSidebarOpen && <span>{route.name}</span>}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Last link pinned at bottom */}
      <div className="mt-auto">
        <ul>
          <li className="font-normal">
            <NavLink
              to={lastRoute.path}
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
              {({ isActive }) => (
                <>
                  {renderIcon(lastRoute.icon, isActive)}
                  {isSidebarOpen && <span>{lastRoute.name}</span>}
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
