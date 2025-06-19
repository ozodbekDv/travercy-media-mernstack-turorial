import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import AuthReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
