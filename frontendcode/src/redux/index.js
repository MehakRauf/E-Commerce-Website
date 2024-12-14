import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer:  {
        users: userSlice.reducer, // Access the reducer from the slice
      },
});