import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === newItem._id && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === id && item.size === size
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(
          (item) => item._id !== id && item.size !== size
        );
      }
    },
    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === id && item.size === size
      );
      if (existingItem && quantity > 0) {
        const quantityDiff = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += quantityDiff;
      } else if (existingItem && quantity <= 0) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(
          (item) => item._id !== id && item.size !== size
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
