// src/App/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { FaBars } from "react-icons/fa";
import Navbar from "../shared/components/Navbar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col font-poppins">
      {/* Header */}
      <header className="bg-primary-blue text-white flex items-center px-4 py-3 shadow">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mr-4 p-2 rounded hover:bg-primary-blue"
        >
          <FaBars size={20} />
        </button>
        <h1 className="font-semibold text-lg">Production Manager</h1>
      </header>

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`shadow-md bg-white transition-[width] duration-300 ease-in-out 
    ${isSidebarOpen ? "w-60" : "w-16"}`}
        >
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            {routes.map(({ path, element }, i) => (
              <Route key={i} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
}
