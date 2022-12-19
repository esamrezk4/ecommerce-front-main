import { configureStore } from "@reduxjs/toolkit";
import categories from "./categorySlice";
import items from "./itemSlice";

const store = configureStore({
  reducer: {
    categories,
    items,
  },
});
export default store;
