import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: []
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.productList = [...action.payload];
        }
    }
});


export const {setData} = productSlice.actions;
export default productSlice.reducer;