// features/class-item-management/components/ClassItemsTable.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassItems } from "../classItemsSlice";

import Table from "../../../shared/components/Table";
import Modal from "../../../shared/components/Modal";
import Button from "../../../shared/components/Button";

export default function ClassItemsTable() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.classItems);

  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchClassItems());
  }, [dispatch]);

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <Table
        columns={[
          "Class Product",
          "Store A",
          "Store B",
          "Store C",
          "Store D",
        ]}
        data={items.map((p) => [
          p.classProduct,
          p.storeA,
          p.storeB,
          p.storeC,
          p.storeD,
        ])}
        loading={loading}
        onView={(row) => {
          setSelectedRow(row);
          setIsModalOpen(true);
        }}
        customHeader={({ columnWidths, startResizing }) => (
          <>
            {/* First row */}
            <tr>
              <th
                rowSpan={2}
                style={{
                  width: columnWidths[0],
                  minWidth: 120,
                  maxWidth: 400,
                  position: "relative",
                }}
                className="border px-2 py-1 text-center"
              >
                Class Product
                <div
                  onMouseDown={(e) => startResizing(0, e.clientX)}
                  className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-300"
                />
              </th>

              <th
                colSpan={4}
                className="border px-2 py-1 text-center"
              >
                Store Type
              </th>

              <th
                rowSpan={2}
                className="border px-2 py-1 text-center bg-gray-100"
                style={{ position: "sticky", right: 0, zIndex: 40 }}
              >
                Action
              </th>
            </tr>

            {/* Second row */}
            <tr>
              {["A", "B", "C", "D"].map((label, idx) => (
                <th
                  key={idx}
                  style={{
                    width: columnWidths[idx + 1],
                    minWidth: 80,
                    maxWidth: 200,
                    position: "relative",
                  }}
                  className="border px-2 py-1 text-center"
                >
                  {label}
                  <div
                    onMouseDown={(e) => startResizing(idx + 1, e.clientX)}
                    className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-300"
                  />
                </th>
              ))}
            </tr>
          </>
        )}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Class Item Details</h2>

        {selectedRow && (
          <div className="space-y-2">
            {["Class Product", "Store A", "Store B", "Store C", "Store D"].map(
              (col, idx) => (
                <p key={idx}>
                  <strong>{col}:</strong> {selectedRow[idx]}
                </p>
              )
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <Button
            onClick={() => console.log("Edit clicked", selectedRow)}
            color="primary-blue"
            variant="solid"
          >
            Edit
          </Button>
          <Button
            onClick={() => console.log("Delete clicked", selectedRow)}
            color="primary-blue"
            variant="outline"
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}
