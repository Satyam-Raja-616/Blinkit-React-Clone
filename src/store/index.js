import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";
import categoriesSlice from "./categoriesSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export default store;
