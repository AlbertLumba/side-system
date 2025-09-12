import React from "react";
import { FaTachometerAlt, FaClipboardList } from "react-icons/fa";
import { MdProductionQuantityLimits, MdClass } from "react-icons/md";
import DialogModal from "../shared/components/DialogModal";

import RecordsFeature from "../features/tag-product-management";
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

  //   {
  //     path: "/class-product",
  //     element: (
  //       <DialogModal
  //         title="Delete Item"
  //         message="Are you sure you want to delete this item? This action cannot be undone."
  //         positiveLabel="Save"
  //         showNegative={true}
  //       />
  //     ),
  //     name: "Class Product",
  //     icon: MdClass,
  //   },
  // ];
  
  
];
export default routes;
