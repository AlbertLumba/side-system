import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="p-6">
      <nav className="mb-6">
        <Link to="/" className="mr-4 text-blue-600">
          Home
        </Link>
        <Link to="/records" className="text-blue-600">
          Production Records
        </Link>
      </nav>

      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
