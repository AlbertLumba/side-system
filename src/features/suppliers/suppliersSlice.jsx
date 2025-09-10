// src/features/suppliers/suppliersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSuppliers } from "./services/serviceAPI";

export const getSuppliers = createAsyncThunk(
  "suppliers/fetchSuppliers",
  async () => {
    const response = await fetchSuppliers();
    return response;
  }
);

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuppliers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSuppliers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getSuppliers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default suppliersSlice.reducer;
