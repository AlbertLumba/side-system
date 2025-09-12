import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ClassItemsAPI from "./services/ClassItemsAPI";

// async thunks
export const fetchClassItems = createAsyncThunk(
  "classItems/fetchAll",
  async () => {
    return await ClassItemsAPI.fetchAll();
  }
);

const classItemsSlice = createSlice({
  name: "classItems",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClassItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchClassItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default classItemsSlice.reducer;
