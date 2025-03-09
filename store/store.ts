import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import planReducer from "./features/planSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    plan: planReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
