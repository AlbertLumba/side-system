import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecords } from "./services/recordsAPI";

export const getRecords = createAsyncThunk("records/fetch", async () => {
  return await fetchRecords();
});

const recordsSlice = createSlice({
  name: "records",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getRecords.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default recordsSlice.reducer;
