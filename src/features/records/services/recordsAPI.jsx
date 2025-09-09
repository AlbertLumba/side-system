// Temporary mock service
export const fetchRecords = async () => {
  return Promise.resolve([
    { id: 1, product: "Widget A", status: "In Progress", quantity: 50 },
    { id: 2, product: "Widget B", status: "Completed", quantity: 120 },
    { id: 3, product: "Widget C", status: "Pending", quantity: 75 },
  ]);
};
