import React, { useState, useMemo, useEffect } from "react";
import Button from "../../shared/components/Button";
import { BsEyeFill } from "react-icons/bs";

export default function Table({
  columns,
  data,
  loading,
  perPageOptions = [10, 20],
  defaultPerPage = 10,
  customHeader = null,
  onView = () => {},
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(defaultPerPage);

  // --- Pagination ---
  const totalPages = Math.ceil(data.length / perPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return data.slice(start, start + perPage);
  }, [data, currentPage, perPage]);

  // --- Column widths ---
  const [columnWidths, setColumnWidths] = useState([]);

  useEffect(() => {
    if (columns?.length) {
      const initial = columns.map((header, colIndex) => {
        const headerLength = header?.toString().length || 0;
        const maxCellLength = data.reduce((max, row) => {
          const cell = row[colIndex];
          return Math.max(max, cell?.toString().length || 0);
        }, 0);

        const charLength = Math.max(headerLength, maxCellLength);
        const calculatedWidth = charLength * 8 + 34;

        return Math.min(Math.max(calculatedWidth, 80), 400); // clamp
      });
      setColumnWidths(initial);
    }
  }, [columns, data]);

  // --- Resize logic with visible guideline ---
  const startResizing = (index, startX) => {
    const startWidth = columnWidths[index];

    // Create vertical guideline
    const guide = document.createElement("div");
    guide.style.position = "fixed";
    guide.style.top = "0";
    guide.style.left = `${startX}px`;
    guide.style.height = "100%";
    guide.style.width = "2px";
    guide.style.background = "#3b82f6"; // Tailwind blue-500
    guide.style.zIndex = "9999";
    document.body.appendChild(guide);

    const onMouseMove = (e) => {
      const delta = e.clientX - startX;
      const newWidth = Math.min(Math.max(startWidth + delta, 80), 400);
      guide.style.left = `${e.clientX}px`; // move guideline
      setColumnWidths((prev) => {
        const updated = [...prev];
        updated[index] = newWidth;
        return updated;
      });
    };

    const onMouseUp = () => {
      guide.remove(); // remove guideline
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full">
      <div className="overflow-x-auto overflow-y-auto max-h-[557px] relative">
        <table className="w-full min-w-max border-separate border-spacing-0">
          <thead className="sticky top-0 bg-gray-200 z-20">
            {customHeader ? (
              customHeader({ columnWidths, startResizing })
            ) : (
              <tr>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className="p-2 text-left relative border-b border-gray-300"
                    style={{
                      width: columnWidths[i],
                      minWidth: 80,
                      maxWidth: 400,
                    }}
                  >
                    {col}
                    {/* resize handle */}
                    <div
                      onMouseDown={(e) => startResizing(i, e.clientX)}
                      className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-400"
                    />
                  </th>
                ))}
                <th
                  rowSpan={2}
                  className="px-2 py-1 text-center bg-gray-100 border-b border-gray-300 "
                  style={{ position: "sticky", right: 0, zIndex: 40 }}
                >
                  Action
                </th>
              </tr>
            )}
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center p-4">
                  No records found
                </td>
              </tr>
            ) : (
              paginatedData.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="p-2 border-b border-gray-200 text-size-all-data-12"
                      style={{
                        width: columnWidths[j],
                        minWidth: 80,
                        maxWidth: 400,
                      }}
                      title={cell}
                    >
                      {cell}
                    </td>
                  ))}
                  {/* Action column */}
                  <td
                    className={`p-2 text-center${
                      i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                    style={{
                      position: "sticky",
                      right: 0,
                      zIndex: 1,
                      minWidth: "90px",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <Button
                      onClick={() => onView(row)}
                      color="primary-blue"
                      variant="text"
                    >
                      <BsEyeFill />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-3 text-sm">
        <div className="flex items-center gap-6 text-size-all-data-12">
          <div className="flex items-center gap-2">
            <span>Items:</span>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1"
            >
              {perPageOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <p>
            Showing {(currentPage - 1) * perPage + 1}–
            {Math.min(currentPage * perPage, data.length)} of {data.length}{" "}
            records
          </p>
        </div>

        <div className="flex items-center gap-1 text-size-all-data-12">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="px-2 py-1 disabled:opacity-50"
          >
            {"<<"}
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-2 py-1 disabled:opacity-50"
          >
            {"<"}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 ${
                currentPage === page ? "bg-primary-blue text-white rounded" : ""
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-2 py-1 disabled:opacity-50"
          >
            {">"}
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className="px-2 py-1 disabled:opacity-50"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
