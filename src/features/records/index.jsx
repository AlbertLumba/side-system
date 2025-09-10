import React, { useState } from "react";
import RecordsTable from "./components/RecordsTable";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal"; // ✅ Import your Modal

export default function RecordsFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    tagProduct: "",
    definition: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ TODO: Replace with Redux dispatch (e.g. dispatch(addRecord(formData)))
    console.log("New Product:", formData);

    setIsModalOpen(false);
    setFormData({ tagProduct: "", definition: "" }); // reset form
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      {/* Feature Header */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Production Management Records</h1>

        <Button
          onClick={() => setIsModalOpen(true)} // ✅ open modal
          color="primary-blue"
          variant="outline"
        >
          Add Tag
        </Button>
      </header>

      {/* Feature Body */}
      <RecordsTable />

      {/* ✅ Modal for adding product */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Add Product</h2>

        <form onSubmit={handleSubmit}>
          {/* TAG Product */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">TAG Product</label>
            <input
              type="text"
              name="tagProduct"
              value={formData.tagProduct}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>

          {/* Definition */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Definition</label>
            <input
              type="text"
              name="definition"
              value={formData.definition}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2">
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
  );
}
