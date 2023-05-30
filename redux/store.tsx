import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "./slices";

const Store = configureStore({
  reducer: {
    base: baseReducer,
  },
});

export default Store;
