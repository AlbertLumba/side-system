import React, { useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import classItemsReducer from "./classItemsSlice";
import ClassItemsTable from "../class-product-management/components/ClassProductTable";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import Input from "../../shared/components/Input";

// ✅ Redux Store
const store = configureStore({
  reducer: {
    classItems: classItemsReducer,
  },
});

export default function ClassItemsManagementFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Initialize all fields (customize for Class Items)
  const [formData, setFormData] = useState({
    classCode: "",
    className: "",
    description: "",
    status: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ TODO: Replace with Redux dispatch (e.g. dispatch(addClassItem(formData)))
    console.log("New Class Item:", formData);

    setIsModalOpen(false);
    setFormData({
      classCode: "",
      className: "",
      description: "",
      status: "",
    });
  };

  return (
    <Provider store={store}>
      <section className="p-6 bg-white rounded-lg shadow-md">
        {/* Feature Header */}
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Class Items Management</h1>

          <Button
            onClick={() => setIsModalOpen(true)}
            color="primary-blue"
            variant="outline"
          >
            Add Class Item
          </Button>
        </header>

        {/* Feature Body */}
        <ClassItemsTable />

        {/* ✅ Modal with form */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          location={"justify-center"}
        >
          <h2 className="text-xl font-bold mb-4">Add Class Item</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Grouped Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Class Code"
                value={formData.classCode}
                onChange={handleChange("classCode")}
                required
              />
              <Input
                label="Class Name"
                value={formData.className}
                onChange={handleChange("className")}
                required
              />
              <Input
                label="Description"
                value={formData.description}
                onChange={handleChange("description")}
              />
              <Input
                label="Status"
                value={formData.status}
                onChange={handleChange("status")}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-black hover:bg-gray-400"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 text-white hover:bg-blue-500"
              >
                Save
              </Button>
            </div>
          </form>
        </Modal>
      </section>
    </Provider>
  );
}
