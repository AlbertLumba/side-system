import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTable, FaEdit } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="p-4 flex flex-col gap-3 text-gray-700">
      <Link to="/" className="flex items-center gap-2 hover:text-blue-600">
        <FaHome /> Home
      </Link>
      <Link
        to="/records"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaTable /> Production Records
      </Link>
      <Link
        to="/edit-records"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaEdit /> Edit Records
      </Link>
    </nav>
  );
}
