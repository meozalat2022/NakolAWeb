"use client";
import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./reducers/mealSlice";
import categoryReducer from "./reducers/categorySlice";

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    category: categoryReducer,
  },
});
