import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from "../features/records/recordsSlice";

const store = configureStore({
  reducer: {
    records: recordsReducer,
  },
});

export default store;
