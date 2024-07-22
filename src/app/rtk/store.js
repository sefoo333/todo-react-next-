"use client"

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import { darkMode } from "./slices/darkmode-slice";

export const store = configureStore({
    reducer: {
        todo: todoSlice,
        darker: darkMode,
    }
})