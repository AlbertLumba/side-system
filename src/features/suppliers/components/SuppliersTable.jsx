// src/features/suppliers/components/SuppliersTable.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuppliers } from "../suppliersSlice";
import Table from "../../../shared/components/Table";

export default function SuppliersTable() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.suppliers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getSuppliers());
    }
  }, [status, dispatch]);

  if (status === "failed") {
    return <p className="text-red-500">Error: {error}</p>;
  }

  const columns = ["ID", "Code", "Name", "Status", "Created At", "Updated At"];
  const data = list.map((s) => [
    s.id,
    s.code,
    s.name,
    s.status,
    new Date(s.created_at).toLocaleString(),
    new Date(s.updated_at).toLocaleString(),
  ]);

  return <Table columns={columns} data={data} loading={status === "loading"} />;
}
