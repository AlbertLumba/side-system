// src/features/prod-management-view/index.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProdManagementViewTable from "./components/ProdManagementTable";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import ProdManagementForm from "./components/ProdManagemenForm";
import { FaPlus } from "react-icons/fa6";
import {
  openAddProductModal,
  closeAddProductModal,
} from "./prodManagementSlice";

export default function ProdManagementViewTableFeatures() {
  const dispatch = useDispatch();
  const isAddModalOpen = useSelector((state) => state.products.isAddModalOpen);

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <Button
          onClick={() => dispatch(openAddProductModal())}
          variant="solid"
          icon={FaPlus}
          color="primary-blue"
        >
          Add Product
        </Button>
      </header>

      {/* Table */}
      <ProdManagementViewTable />

      {/* Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => dispatch(closeAddProductModal())}
        location={"justify-center"}
      >
        <ProdManagementForm onClose={() => dispatch(closeAddProductModal())} />
      </Modal>
    </section>
  );
}
