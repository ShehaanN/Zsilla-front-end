import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { productsApi } from "./features/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
