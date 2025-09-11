import React from "react";
import { FaTachometerAlt, FaClipboardList } from "react-icons/fa";
import { MdProductionQuantityLimits, MdClass } from "react-icons/md";

import RecordsFeature from "../features/records";
import ProdManagementViewTableFeatures from "../features/prod-management";

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
  {
    path: "/class-product",
    element: <ProdManagementViewTableFeatures />,
    name: "Class Product",
    icon: MdClass,
  },
];

export default routes;
