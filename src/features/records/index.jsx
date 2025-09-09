import React from "react";
import RecordsTable from "./components/RecordsTable";

export default function RecordsFeature() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Production Management Records</h1>
      <RecordsTable />
    </div>
  );
}
