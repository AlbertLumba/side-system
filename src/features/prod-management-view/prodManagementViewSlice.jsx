// src/features/prod-management-view/prodManagementViewSlice.jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./services/prodManagementViewAPI";

// Async thunk
export const getProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await fetchProducts();
  return response;
});

const prodManagementViewSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    isAddModalOpen: false, // 👈 UI state
  },
  reducers: {
    openAddProductModal: (state) => {
      state.isAddModalOpen = true;
    },
    closeAddProductModal: (state) => {
      state.isAddModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { openAddProductModal, closeAddProductModal } =
  prodManagementViewSlice.actions;

export default prodManagementViewSlice.reducer;
