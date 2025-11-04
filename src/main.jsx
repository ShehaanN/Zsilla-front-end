import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import HomePage from "./pages/home.page.jsx";
import ShopPage from "./pages/shop.page.jsx";
import RootLayout from "./layouts/root.layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop">
            <Route index element={<ShopPage />} />
            <Route path=":category" element={<ShopPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
