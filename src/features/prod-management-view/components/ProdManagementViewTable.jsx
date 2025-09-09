// src/features/products/components/ProductsTable.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../prodManagementViewSlice";
import Table from "../../../shared/components/Table";

export default function ProdManagementViewTable() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  if (status === "failed")
    return <p className="text-red-500">Error: {error}</p>;

  return (
    <Table
      columns={["ID", "Name", "Price", "Stock", "Status"]}
      data={items.map((p) => [p.id, p.name, `$${p.price}`, p.stock, p.status])}
      loading={status === "loading"}
    />
  );
}
