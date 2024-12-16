import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { productSlice } from "./productSlice";

export const store = configureStore({
    reducer:  {
        users: userSlice.reducer, // Access the reducer from the slice
        product : productSlice.reducer,
      },
});