import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import HomePage from "./pages/home.page.jsx";
import ShopPage from "./pages/shop.page.jsx";
import RootLayout from "./layouts/root.layout.jsx";
import ProductDetailsPage from "./pages/productDetails.page.jsx";
import CartPage from "./pages/cart.page.jsx";
import { Provider } from "react-redux";
import store from "./lib/store.js";
import CheckoutPage from "./pages/checkout.page.jsx";
import OrderSuccessPage from "./pages/ordersuccess.page";
import MyOrderPage from "./pages/myorder.page";
import OrderDetailsPage from "./pages/orderdetails.page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop">
              <Route index element={<ShopPage />} />
              <Route path=":category" element={<ShopPage />} />
              <Route path="product/:id" element={<ProductDetailsPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/orders" element={<MyOrderPage />} />
            <Route path="/orders/:id" element={<OrderDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
