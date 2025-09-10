import React from "react";
import { FaTachometerAlt, FaBox, FaClipboardList } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import RecordsFeature from "../features/records";
import ProdManagementViewTableFeatures from "../features/prod-management-view";

const routes = [
  {
    path: "/",
    element: <h1 className="text-2xl font-bold">Welcome Home</h1>,
    name: "Dashboard",
    icon: FaTachometerAlt,
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
];

export default routes;
