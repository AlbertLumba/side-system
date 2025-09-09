import React from "react";
import { FaTachometerAlt, FaBox, FaClipboardList } from "react-icons/fa";
import RecordsFeature from "../features/records";

const routes = [
  {
    path: "/",
    element: <h1 className="text-2xl font-bold">Welcome Home</h1>,
    name: "Dashboard",
    icon: FaTachometerAlt,
  },
  {
    path: "/records",
    element: <RecordsFeature />,
    name: "Records",
    icon: FaClipboardList,
  },
];

export default routes;
