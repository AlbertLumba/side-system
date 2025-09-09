import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecords } from "../recordsSlice";
import Table from "../../../shared/components/Table";

export default function RecordsTable() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.records);

  useEffect(() => {
    if (status === "idle") dispatch(getRecords());
  }, [status, dispatch]);

  return (
    <div>
      <Table
        columns={["ID", "Product", "Status", "Quantity"]}
        data={data.map((r) => [r.id, r.product, r.status, r.quantity])}
        loading={status === "loading"}
      />
    </div>
  );
}
