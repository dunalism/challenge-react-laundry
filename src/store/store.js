import { configureStore } from "@reduxjs/toolkit";
import authRducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authRducer,
  },
});

export default store;
