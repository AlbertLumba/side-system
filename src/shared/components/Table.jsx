import React, { useState, useMemo } from "react";

export default function Table({
  columns,
  data,
  loading,
  perPageOptions = [10, 20, 50],
  defaultPerPage = 10,
  customHeader = null,
  onView = () => {}, // ✅ callback for view button
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(defaultPerPage);

  // ✅ Pagination logic
  const totalPages = Math.ceil(data.length / perPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return data.slice(start, start + perPage);
  }, [data, currentPage, perPage]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full">
      {/* Table Wrapper with scroll */}
      <div className="overflow-x-auto overflow-y-auto max-h-[557px] relative">
        <table className="border-collapse border border-gray-300 w-full min-w-max">
          <thead className="sticky top-0 bg-gray-100 z-20">
            {customHeader ? (
              customHeader()
            ) : (
              <tr>
                {/* ✅ Fixed View Column */}
                <th
                  className="border border-black border-r-2 p-2 bg-gray-100 text-center"
                  style={{
                    position: "sticky",
                    left: 0,
                    zIndex: 50,
                    minWidth: "90px",
                    background: "#f9fafb",
                  }}
                >
                  Action
                </th>

                {/* Other columns */}
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className="border p-2 bg-gray-100"
                    style={{
                      minWidth: "150px",
                    }}
                  >
                    {col}
                  </th>
                ))}
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
                <tr key={i}>
                  {/* Fixed View button column */}
                  <td
                    className="border border-black p-2 bg-white text-center"
                    style={{
                      position: "sticky",
                      left: 0,

                      background: "white",
                      zIndex: 40,
                      minWidth: "60px", // shrink since icon only
                    }}
                  >
                    <button
                      onClick={() => onView(row)}
                      className="p-2 rounded flex items-center justify-center bg-transparent hover:bg-blue-600 group"
                      title="View"
                    >
                      {/* <Eye className="w-4 h-4 text-blue-600 group-hover:text-white" /> */}
                    </button>
                  </td>

                  {/* Data cells */}
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border p-2 bg-white"
                      style={{
                        minWidth: "150px",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-3 text-sm">
        {/* Left side: Items + Records */}
        <div className="flex items-center gap-6">
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

        {/* Right side: Pagination controls */}
        <div className="flex items-center gap-1">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="px-2 py-1 disabled:opacity-50 focus:outline-none focus:ring-0"
          >
            {"<<"}
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-2 py-1 disabled:opacity-50 focus:outline-none focus:ring-0"
          >
            {"<"}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 focus:outline-none focus:ring-0 ${
                currentPage === page ? "bg-blue-500 text-white rounded" : ""
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-2 py-1 disabled:opacity-50 focus:outline-none focus:ring-0"
          >
            {">"}
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className="px-2 py-1 disabled:opacity-50 focus:outline-none focus:ring-0"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
