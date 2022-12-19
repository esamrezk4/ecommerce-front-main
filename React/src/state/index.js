import { configureStore } from "@reduxjs/toolkit";
import categories from "./categorySlice";
import items from "./itemSlice";
import cart from "./CartSlice";

const store = configureStore({
  reducer: {
    categories,
    items,
    cart,
  },
});
export default store;
