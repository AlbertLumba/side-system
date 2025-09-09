import React from "react";
import RecordsFeature from "../features/records";

const routes = [
  {
    path: "/",
    element: <h1 className="text-2xl font-bold">Welcome Home</h1>,
  },
  {
    path: "/records",
    element: <RecordsFeature />,
  },
];

export default routes;
