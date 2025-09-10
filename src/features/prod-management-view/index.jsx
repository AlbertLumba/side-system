// src/features/prod-management-view/index.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProdManagementViewTable from "./components/prodManagementViewTable";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import Input from "../../shared/components/Input";
import { FaPlus } from "react-icons/fa6";
import {
  openAddProductModal,
  closeAddProductModal,
} from "./prodManagementViewSlice";

export default function ProdManagementViewTableFeatures() {
  const dispatch = useDispatch();
  const isAddModalOpen = useSelector((state) => state.products.isAddModalOpen);

  // Local state for inputs
  const [formData, setFormData] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving product:", formData); // Later: dispatch(addProduct(formData))
    dispatch(closeAddProductModal());
  };

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
      >
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
          <Input
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
          <Button
            type="submit"
            className="bg-green-600 text-white hover:bg-green-500 w-full"
          >
            Save Product
          </Button>
        </form>
      </Modal>
    </section>
  );
}
