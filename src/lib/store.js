import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { productsApi } from "./features/productSlice";
import { categoriesApi } from "./features/categorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware),
});

export default store;
