import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecords } from "../recordsSlice";
import Table from "../../../shared/components/Table";
import Modal from "../../../shared/components/Modal"; // ✅ assuming you have the modal

export default function RecordsTable() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.records);

  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") dispatch(getRecords());
  }, [status, dispatch]);

  // Prepare columns for the Table component (no "Action")
  const columns = [
    "TAG Product",
    "Definition",
    "Store Ord",
    "Store Rec",
    "Store Ret",
    "Store Sal",
    "Store Str",
    "Store Tro",
    "Store Tri",
    "DC Ord",
    "DC Rec",
    "DC Ret",
    "DC Tro",
    "DC Tri",
    "Item Type"
  ];

  // Prepare data for the Table component
  const tableData = data.map(r => [
    r.tagProduct,
    r.definition,
    r.storeOrd,
    r.storeRec,
    r.storeRet,
    r.storeSal,
    r.storeStr,
    r.storeTro,
    r.storeTri,
    r.dcOrd,
    r.dcRec,
    r.dcRet,
    r.dcTro,
    r.dcTri,
    r.itemType
  ]);

  // ✅ Custom header with Action column
  const renderCustomHeader = () => (
    <>
      <tr>
        <th
          rowSpan={2}
          className="border border-gray-400 px-2 py-1 text-center bg-gray-100"
          style={{ position: "sticky", left: 0, zIndex: 40 }}
        >
          Action
        </th>
        <th rowSpan={2} className="border border-gray-400 px-2 py-1 text-center">
          TAG Product
        </th>
        <th rowSpan={2} className="border border-gray-400 px-2 py-1 text-center">
          Definition
        </th>
        <th colSpan={7} className="border border-gray-400 px-2 py-1 text-center">
          Store
        </th>
        <th colSpan={5} className="border border-gray-400 px-2 py-1 text-center">
          DC
        </th>
        <th rowSpan={2} className="border border-gray-400 px-2 py-1 text-center">
          Item Type
        </th>
      </tr>
      <tr>
        {["Ord", "Rec", "Ret", "Sal", "Str", "Tro", "Tri"].map((sub, idx) => (
          <th
            key={`store-${idx}`}
            className="border border-gray-400 px-2 py-1 text-center"
          >
            {sub}
          </th>
        ))}
        {["Ord", "Rec", "Ret", "Tro", "Tri"].map((sub, idx) => (
          <th
            key={`dc-${idx}`}
            className="border border-gray-400 px-2 py-1 text-center"
          >
            {sub}
          </th>
        ))}
      </tr>
    </>
  );

  return (
    <div className="overflow-x-auto">
      <Table 
        columns={columns} 
        data={tableData} 
        loading={status === "loading"}
        customHeader={renderCustomHeader}
        onView={(row) => {
          setSelectedRow(row);
          setIsModalOpen(true);
        }}
      />

      {/* ✅ Modal for viewing details */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Record Details</h2>
        {selectedRow && (
          <div className="space-y-2">
            {columns.map((col, idx) => (
              <p key={idx}>
                <strong>{col}:</strong> {selectedRow[idx]}
              </p>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
}
