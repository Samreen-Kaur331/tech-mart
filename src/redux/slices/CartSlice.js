import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], 
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((i) => i.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }

      state.totalQuantity = state.cartItems.reduce((s, i) => s + i.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (s, i) => s + i.price * i.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== id);
      state.totalQuantity = state.cartItems.reduce((s, i) => s + i.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (s, i) => s + i.price * i.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) item.quantity = quantity;

      state.totalQuantity = state.cartItems.reduce((s, i) => s + i.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (s, i) => s + i.price * i.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
