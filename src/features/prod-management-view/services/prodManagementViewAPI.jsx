// src/features/products/services/productsAPI.js
export async function fetchProducts() {
  // Mock data (replace later with real API call)
  return Promise.resolve([
    { id: 1, name: "Laptop", price: 1200, stock: 10, status: "In Stock" },
    { id: 2, name: "Phone", price: 800, stock: 4, status: "Low Stock" },
    { id: 3, name: "Keyboard", price: 50, stock: 0, status: "Out of Stock" },
  ]);
}
