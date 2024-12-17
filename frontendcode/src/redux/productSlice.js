import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    productList: [],
    cartItems: []
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.productList = [...action.payload];
        },
        addToCart: (state, action) => {
            const check = state.cartItems.some((el) => el._id == action.payload._id);
            if (check) {
                toast("Item already in cart!")
            }
            else {
                toast("Item added to the cart!")
                const total = action.payload.price;
                state.cartItems = [...state.cartItems, { ...action.payload, qty: 1, total: total }];
            }
        },
        deleteFromCart: (state, action) => {
            const index = state.cartItems.findIndex(el => el._id === action.payload);
            state.cartItems.splice(index, 1);
        },
        increaseQty: (state, action) => {
            const index = state.cartItems.findIndex(el => el._id === action.payload);
            let quantity = state.cartItems[index].qty;
            const increase = ++quantity;
            state.cartItems[index].qty = increase;
            const price = state.cartItems[index].price;
            let total = price * increase;
            state.cartItems[index].total = total;
        },
        decreaseQty: (state, action) => {
            const index = state.cartItems.findIndex(el => el._id === action.payload);

            let quantity = state.cartItems[index].qty;
            if (quantity > 1) {
                let decrease = --quantity;
                state.cartItems[index].qty = decrease;
                const price = state.cartItems[index].price;
                let total = price * decrease;
                state.cartItems[index].total = total;
            }
        }
    }
});


export const { setData, addToCart, deleteFromCart, increaseQty, decreaseQty } = productSlice.actions;
export default productSlice.reducer;