// src/features/prodManagement/index.jsx
import React from "react";
import ProdManagementViewTable from "./components/prodManagementViewTable";
import Button from "../../shared/components/Button";

export default function ProdManagementViewTableFeatures() {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      {/* Feature Header */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>

        {/* ✅ Use reusable Button */}
        <Button
          onClick={() => alert("Add Product")}
          className="bg-blue-600 text-white hover:bg-blue-500"
        >
          + Add Product
        </Button>
      </header>

      {/* Feature Body */}
      <ProdManagementViewTable />
    </section>
  );
}
