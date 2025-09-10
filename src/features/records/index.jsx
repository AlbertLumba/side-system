import React, { useState } from "react";
import RecordsTable from "./components/RecordsTable";
import Button from "../../shared/components/Button";
import ModalCenter from "../../shared/components/ModalCenter";
import Input from "../../shared/components/Input";

export default function RecordsFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Initialize all fields
  const [formData, setFormData] = useState({
    tagProduct: "",
    definition: "",
    storeOrd: "",
    storeRec: "",
    storeRet: "",
    storeSal: "",
    storeStr: "",
    storeTro: "",
    storeTri: "",
    dcOrd: "",
    dcRec: "",
    dcRet: "",
    dcTro: "",
    dcTri: "",
    itemType: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ TODO: Replace with Redux dispatch (e.g. dispatch(addRecord(formData)))
    console.log("New Record:", formData);

    setIsModalOpen(false);
    setFormData({
      tagProduct: "",
      definition: "",
      storeOrd: "",
      storeRec: "",
      storeRet: "",
      storeSal: "",
      storeStr: "",
      storeTro: "",
      storeTri: "",
      dcOrd: "",
      dcRec: "",
      dcRet: "",
      dcTro: "",
      dcTri: "",
      itemType: "",
    });
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      {/* Feature Header */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Production Management Records</h1>

        <Button
          onClick={() => setIsModalOpen(true)}
          color="primary-blue"
          variant="outline"
        >
          Add Tag
        </Button>
      </header>

      {/* Feature Body */}
      <RecordsTable />

      {/* ✅ Modal with full form */}
      <ModalCenter isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Add Tag</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grouped Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="TAG Product"
              value={formData.tagProduct}
              onChange={handleChange("tagProduct")}
              required
            />
            <Input
              label="Definition"
              value={formData.definition}
              onChange={handleChange("definition")}
              required
            />
            <Input
              label="Store Ord"
              value={formData.storeOrd}
              onChange={handleChange("storeOrd")}
            />
            <Input
              label="Store Rec"
              value={formData.storeRec}
              onChange={handleChange("storeRec")}
            />
            <Input
              label="Store Ret"
              value={formData.storeRet}
              onChange={handleChange("storeRet")}
            />
            <Input
              label="Store Sal"
              value={formData.storeSal}
              onChange={handleChange("storeSal")}
            />
            <Input
              label="Store Str"
              value={formData.storeStr}
              onChange={handleChange("storeStr")}
            />
            <Input
              label="Store Tro"
              value={formData.storeTro}
              onChange={handleChange("storeTro")}
            />
            <Input
              label="Store Tri"
              value={formData.storeTri}
              onChange={handleChange("storeTri")}
            />
            <Input
              label="DC Ord"
              value={formData.dcOrd}
              onChange={handleChange("dcOrd")}
            />
            <Input
              label="DC Rec"
              value={formData.dcRec}
              onChange={handleChange("dcRec")}
            />
            <Input
              label="DC Ret"
              value={formData.dcRet}
              onChange={handleChange("dcRet")}
            />
            <Input
              label="DC Tro"
              value={formData.dcTro}
              onChange={handleChange("dcTro")}
            />
            <Input
              label="DC Tri"
              value={formData.dcTri}
              onChange={handleChange("dcTri")}
            />
            <Input
              label="Item Type"
              value={formData.itemType}
              onChange={handleChange("itemType")}
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
      </ModalCenter>
    </section>
  );
}
