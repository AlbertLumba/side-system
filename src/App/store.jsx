import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from "../features/tag-product-management/TagSlice";
import productsReducer from "../features/prod-management/prodManagementSlice";

const store = configureStore({
  reducer: {
    records: recordsReducer,
    products: productsReducer,
  },
});

export default store;
