export default function Table({ columns, data, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    <table className="border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} className="border p-2">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center p-4">
              No records found
            </td>
          </tr>
        ) : (
          data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
