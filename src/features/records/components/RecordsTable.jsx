import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecords } from "../recordsSlice";

export default function RecordsTable() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.records);

  useEffect(() => {
    if (status === "idle") dispatch(getRecords());
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
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
            {/* Store sub-columns */}
            {["Ord", "Rec", "Ret", "Sal", "Str", "Tro", "Tri"].map((sub, idx) => (
              <th
                key={`store-${idx}`}
                className="border border-gray-400 px-2 py-1 text-center"
              >
                {sub}
              </th>
            ))}
            
            {/* DC sub-columns */}
            {["Ord", "Rec", "Ret", "Tro", "Tri"].map((sub, idx) => (
              <th
                key={`dc-${idx}`}
                className="border border-gray-400 px-2 py-1 text-center"
              >
                {sub}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={15} className="text-center p-4 border border-gray-400">
                No records found
              </td>
            </tr>
          ) : (
            data.map((r, idx) => (
              <tr key={idx}>
                <td className="border border-gray-400 px-2 py-1">
                  {r.tagProduct}
                </td>
                <td className="border border-gray-400 px-2 py-1">
                  {r.definition}
                </td>
                <td className="border border-gray-400 px-2 py-1">{r.storeOrd}</td>
                <td className="border border-gray-400 px-2 py-1">{r.storeRec}</td>
                <td className="border border-gray-400 px-2 py-1">{r.storeRet}</td>
                <td className="border border-gray-400 px-2 py-1">{r.storeSal}</td>
                <td className="border border-gray-400 px-2 py-1">{r.storeStr}</td>
                <td className="border border-gray-400 px-2 py-1">{r.storeTro}</td>
                <td className="border border-gray-400 px-2 py-1">{r.storeTri}</td>
                <td className="border border-gray-400 px-2 py-1">{r.dcOrd}</td>
                <td className="border border-gray-400 px-2 py-1">{r.dcRec}</td>
                <td className="border border-gray-400 px-2 py-1">{r.dcRet}</td>
                <td className="border border-gray-400 px-2 py-1">{r.dcTro}</td>
                <td className="border border-gray-400 px-2 py-1">{r.dcTri}</td>
                <td className="border border-gray-400 px-2 py-1">{r.itemType}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}