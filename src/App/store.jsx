import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from "../features/records/recordsSlice";
import productsReducer from "../features/prod-management-view/prodManagementViewSlice";

const store = configureStore({
  reducer: {
    records: recordsReducer,
    products: productsReducer,
  },
});

export default store;
