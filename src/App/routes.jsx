// src/App/routes.jsx
import React from "react";
import { FaClipboardList } from "react-icons/fa";
import {
  MdProductionQuantityLimits,
  MdClass,
  MdLogout,
  MdDashboard,
} from "react-icons/md";

import RecordsFeature from "../features/tag-product-management";
import ProdManagementViewTableFeatures from "../features/prod-management";
import ClassProductManagementFeatures from "../features/class-product-management";
import planogramIcon from "../assets/images/icons8-rack-50 (1).png";

const routes = [
  {
    path: "/",
    element: <h1 className="text-2xl font-bold">Welcome Home</h1>,
    name: "Dashboard",
    icon: MdDashboard,
  },
  {
    path: "/tag-management",
    element: <RecordsFeature />,
    name: "Records",
    icon: FaClipboardList,
  },
  {
    path: "/products",
    element: <ProdManagementViewTableFeatures />,
    name: "Products",
    icon: MdProductionQuantityLimits,
  },
  {
    path: "/class-product",
    element: <ClassProductManagementFeatures />,
    name: "Class Product",
    icon: MdClass,
  },
  {
    path: "/planogram",
    element: <ProdManagementViewTableFeatures />,
    name: "Planogram",
    icon: (props) => (
      <img
        src={planogramIcon}
        alt="Planogram"
        className={`w-5 h-5 ${props.className || ""}`}
      />
    ),
  },
  {
    path: "/logout",
    element: <ProdManagementViewTableFeatures />,
    name: "Logout",
    icon: MdLogout,
  },
];

export default routes;
