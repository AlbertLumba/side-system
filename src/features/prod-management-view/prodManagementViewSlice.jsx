// src/features/product/recordsSlice.js
import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./services/prodManagementViewAPI";

// async thunks
export const getProducts = createAsyncThunk("products/fetchAll", fetchProducts);
export const addProduct = createAsyncThunk("products/add", createProduct);
export const editProduct = createAsyncThunk(
  "products/edit",
  async ({ id, updates }) => {
    return await updateProduct(id, updates);
  }
);
export const removeProduct = createAsyncThunk("products/delete", deleteProduct);

const prodManagementViewSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    isAddModalOpen: false,
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
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const idx = state.items.findIndex((p) => p.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter((p) => p.id !== action.payload);
      })

      // re-useable loading/error handling
      .addMatcher(
        isPending(getProducts, addProduct, editProduct, removeProduct),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )
      .addMatcher(
        isRejected(getProducts, addProduct, editProduct, removeProduct),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const { openAddProductModal, closeAddProductModal } =
  prodManagementViewSlice.actions;

export default prodManagementViewSlice.reducer;
