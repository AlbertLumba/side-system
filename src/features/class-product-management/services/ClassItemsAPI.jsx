// Dummy API service for Class Items
const ClassItemsAPI = {
  fetchAll: async () => {
    // simulate delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // ✅ Dummy data aligned with ClassItemsTable.jsx
    return [
      {
        id: 1,
        classProduct: "Product A",
        storeA: 120,
        storeB: 85,
        storeC: 60,
        storeD: 40,
      },
      {
        id: 2,
        classProduct: "Product B",
        storeA: 200,
        storeB: 150,
        storeC: 100,
        storeD: 75,
      },
      {
        id: 3,
        classProduct: "Product C",
        storeA: 50,
        storeB: 25,
        storeC: 15,
        storeD: 10,
      },
    ];
  },
};

export default ClassItemsAPI;
