import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecords } from "../TagSlice";
import Table from "../../../shared/components/Table";
import Modal from "../../../shared/components/Modal";
import Button from "../../../shared/components/Button";


export default function RecordsTable() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.records);

  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") dispatch(getRecords());
  }, [status, dispatch]);

  if (status === "failed") return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <Table
  columns={[
    "TAG Product", "Definition",
    "Store Ord", "Store Rec", "Store Ret", "Store Sal", "Store Str", "Store Tro", "Store Tri",
    "DC Ord", "DC Rec", "DC Ret", "DC Tro", "DC Tri",
    "Item Type",
  ]}
  data={data.map((r) => [
    r.tagProduct, r.definition,
    r.storeOrd, r.storeRec, r.storeRet, r.storeSal, r.storeStr, r.storeTro, r.storeTri,
    r.dcOrd, r.dcRec, r.dcRet, r.dcTro, r.dcTri,
    r.itemType,
  ])}
  loading={status === "loading"}
  onView={(row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  }}
  customHeader={({ columnWidths, startResizing }) => (
  <>
    {/* first row */}
    <tr >
      
      <th
        rowSpan={2}
        style={{
          width: columnWidths[0],
          minWidth: 80,
          maxWidth: 400,
          position: "relative",
        }}
        className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center"
        
      >
        TAG Product
        <div
          onMouseDown={(e) => startResizing(0, e.clientX)}
          className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-300"
        />
      </th>

      <th
        rowSpan={2}
        style={{
          width: columnWidths[1],
          minWidth: 80,
          maxWidth: 400,
          position: "relative",
        }}
        className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center"
      >
        Definition
        <div
          onMouseDown={(e) => startResizing(1, e.clientX)}
          className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-300"
        />
      </th>

      <th colSpan={7} className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center">
        Store
      </th>
      <th colSpan={5} className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center">
        DC
      </th>

      <th
        rowSpan={2}
        style={{
          width: columnWidths[15],
          minWidth: 80,
          maxWidth: 400,
          position: "relative",
        }}
        className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center"
      >
        Item Type
      </th>

      <th
        rowSpan={2}
        className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center bg-gray-100"
        style={{ position: "sticky", right: 0, zIndex: 40 }}
      >
        Action
      </th>
    </tr>

    {/* second row */}
    <tr>
      {["Ord", "Rec", "Ret", "Sal", "Str", "Tro", "Tri"].map((sub, idx) => (
        <th
          key={`store-${idx}`}
          style={{
            width: columnWidths[idx + 2],
            minWidth: 80,
            maxWidth: 400,
            position: "relative",
          }}
          className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center"
        >
          {sub}
          <div
            onMouseDown={(e) => startResizing(idx + 2, e.clientX)}
            className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-300"
          />
        </th>
      ))}

      {["Ord", "Rec", "Ret", "Tro", "Tri"].map((sub, idx) => (
        <th
          key={`dc-${idx}`}
          style={{
            width: columnWidths[idx + 9],
            minWidth: 80,
            maxWidth: 400,
            position: "relative",
          }}
          className="border-l border-r border-t border-b border-gray-400 px-2 py-1 text-center"
        >
          {sub}
          <div
            onMouseDown={(e) => startResizing(idx + 9, e.clientX)}
            className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-300"
          />
        </th>
      ))}
    </tr>
  </>
)}


/>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h2 className="text-lg font-bold mb-4">Record Details</h2>

      {selectedRow && (
        <div className="space-y-2">
          {[
            "TAG Product", "Definition", "Store Ord", "Store Rec", "Store Ret", "Store Sal",
            "Store Str", "Store Tro", "Store Tri", "DC Ord", "DC Rec", "DC Ret", "DC Tro", "DC Tri", "Item Type",
          ].map((col, idx) => (
            <p key={idx}>
              <strong>{col}:</strong> {selectedRow[idx]}
            </p>
          ))}
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

