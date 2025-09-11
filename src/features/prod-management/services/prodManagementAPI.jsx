// src/features/products/services/productsAPI.js

// --- Mock database (in-memory)
let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10, status: "In Stock" },
  { id: 2, name: "Phone", price: 800, stock: 4, status: "Low Stock" },
  { id: 3, name: "Keyboard", price: 50, stock: 0, status: "Out of Stock" },
  { id: 4, name: "Keyboard", price: 50, stock: 0, status: "Out of Stock" },
  { id: 5, name: "Keyboard", price: 50, stock: 0, status: "Out of Stock" },
];

// --- Fetch all
export async function fetchProducts() {
  return Promise.resolve(products);
}

// --- Create
export async function createProduct(product) {
  const newProduct = {
    id: Date.now(), // fake ID
    ...product,
  };
  products.push(newProduct);
  return Promise.resolve(newProduct);
}

// --- Update
export async function updateProduct(id, updates) {
  let updatedProduct = null;
  products = products.map((p) => {
    if (p.id === id) {
      updatedProduct = { ...p, ...updates };
      return updatedProduct;
    }
    return p;
  });
  return Promise.resolve(updatedProduct);
}

// --- Delete
export async function deleteProduct(id) {
  products = products.filter((p) => p.id !== id);
  return Promise.resolve(id);
}
