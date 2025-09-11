// src/features/product/hooks/useProducts.js
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  addProduct,
  editProduct,
  removeProduct,
} from "../prodManagementSlice";

export default function useProducts() {
  const dispatch = useDispatch();
  const { items, status, error, isAddModalOpen } = useSelector(
    (state) => state.products
  );

  return {
    // state
    products: items,
    status,
    error,
    isAddModalOpen,

    // actions
    fetchAll: () => dispatch(getProducts()),
    create: (product) => dispatch(addProduct(product)),
    update: (id, updates) => dispatch(editProduct({ id, updates })),
    remove: (id) => dispatch(removeProduct(id)),
  };
}
