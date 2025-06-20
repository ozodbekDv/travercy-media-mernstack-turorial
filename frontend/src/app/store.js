import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import AuthReducer from "./auth/authSlice";
import GoalReducer from "./features/goals/goalSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    goals: GoalReducer,
  },
});
