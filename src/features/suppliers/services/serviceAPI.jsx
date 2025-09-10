// src/features/suppliers/services/suppliersAPI.js
import axios from "axios";

// const API_URL = "http://10.27.1.42:2301/suppliers"; // replace with your real endpoint

export async function fetchSuppliers() {
    "ID", "Code", "Name", "Status", "Created At", "Updated At"
  try {
    const response = await axios.get(API_URL);
    // return response.data.data; // assuming API returns an array of suppliers
    console.log(response.data.data);
  } catch (error) {
    console.error("Failed to fetch suppliers:", error);
    throw error; // Let Redux thunk handle the error
  }
}
