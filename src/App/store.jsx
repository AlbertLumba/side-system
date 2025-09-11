import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from "../features/records/recordsSlice";
import productsReducer from "../features/prod-management/prodManagementSlice";

const store = configureStore({
  reducer: {
    records: recordsReducer,
    products: productsReducer,
  },
});

export default store;
