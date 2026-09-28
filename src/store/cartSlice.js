import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity < 5) {
          existingItem.quantity += 1;
        }
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity < 5) {
        existingItem.quantity += 1;
      }
    },

    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return state.filter((item) => item.id !== action.payload);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
