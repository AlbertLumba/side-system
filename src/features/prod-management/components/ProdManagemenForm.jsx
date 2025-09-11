// src/features/prod-management-view/components/ProductForm.jsx
import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";

export default function ProdManagementForm({ onClose }) {
  const { create } = useProducts();

  const [form, setForm] = useState({
    id: "",
    name: "",
    barcode: "",
    stock_no: "",
    reference_code: "",
    retail_price: "",
    ordering_cost: "",
    landed_cost: "",
    status: "",
    brand_id: "",
    sub_brand_id: "",
    unit_id: "",
    division_id: "",
    department_id: "",
    section_id: "",
    category_id: "",
    color_id: "",
    intro_date: "",
    supplier_code: "",
    supplier_id: "",
    extras: "",
    product_line_id: "",
    size_id: "",
    product_group_id: "",
    created_at: "",
    updated_at: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // transform numeric/date fields properly
    const productData = {
      ...form,
      retail_price: Number(form.retail_price) || 0,
      ordering_cost: Number(form.ordering_cost) || 0,
      landed_cost: Number(form.landed_cost) || 0,
      intro_date: form.intro_date
        ? new Date(form.intro_date).toISOString()
        : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    create(productData);
    onClose?.(); // close modal after save
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <Input
        label="Product Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Barcode"
        name="barcode"
        value={form.barcode}
        onChange={handleChange}
      />
      <Input
        label="Stock No"
        name="stock_no"
        value={form.stock_no}
        onChange={handleChange}
      />
      <Input
        label="Reference Code"
        name="reference_code"
        value={form.reference_code}
        onChange={handleChange}
      />

      <Input
        label="Retail Price"
        type="number"
        name="retail_price"
        value={form.retail_price}
        onChange={handleChange}
      />
      <Input
        label="Ordering Cost"
        type="number"
        name="ordering_cost"
        value={form.ordering_cost}
        onChange={handleChange}
      />
      <Input
        label="Landed Cost"
        type="number"
        name="landed_cost"
        value={form.landed_cost}
        onChange={handleChange}
      />
      <Input
        label="Status"
        name="status"
        value={form.status}
        onChange={handleChange}
      />

      <Input
        label="Brand ID"
        name="brand_id"
        value={form.brand_id}
        onChange={handleChange}
      />
      <Input
        label="Sub Brand ID"
        name="sub_brand_id"
        value={form.sub_brand_id}
        onChange={handleChange}
      />
      <Input
        label="Unit ID"
        name="unit_id"
        value={form.unit_id}
        onChange={handleChange}
      />
      <Input
        label="Division ID"
        name="division_id"
        value={form.division_id}
        onChange={handleChange}
      />
      <Input
        label="Department ID"
        name="department_id"
        value={form.department_id}
        onChange={handleChange}
      />
      <Input
        label="Section ID"
        name="section_id"
        value={form.section_id}
        onChange={handleChange}
      />
      <Input
        label="Category ID"
        name="category_id"
        value={form.category_id}
        onChange={handleChange}
      />
      <Input
        label="Color ID"
        name="color_id"
        value={form.color_id}
        onChange={handleChange}
      />

      <Input
        label="Intro Date"
        type="date"
        name="intro_date"
        value={form.intro_date}
        onChange={handleChange}
      />
      <Input
        label="Supplier Code"
        name="supplier_code"
        value={form.supplier_code}
        onChange={handleChange}
      />
      <Input
        label="Supplier ID"
        name="supplier_id"
        value={form.supplier_id}
        onChange={handleChange}
      />
      <Input
        label="Extras"
        name="extras"
        value={form.extras}
        onChange={handleChange}
      />

      <Input
        label="Product Line ID"
        name="product_line_id"
        value={form.product_line_id}
        onChange={handleChange}
      />
      <Input
        label="Size ID"
        name="size_id"
        value={form.size_id}
        onChange={handleChange}
      />
      <Input
        label="Product Group ID"
        name="product_group_id"
        value={form.product_group_id}
        onChange={handleChange}
      />
      {/* created_at & updated_at are auto set on submit */}

      <div className="col-span-2 flex justify-end gap-2 mt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Save Product</Button>
      </div>
    </form>
  );
}
