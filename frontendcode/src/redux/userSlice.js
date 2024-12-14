import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        loginReducer: (state, action) => {
            const { _id, firstName, lastName, email, password, confirmPassword } = action.payload.data;
            state._id = _id;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.password = password;
            state.confirmPassword = confirmPassword;
        },
        logoutReducer: (state, action) => {
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.password = "";
            state.confirmPassword = "";
        },
    },
});
export const { loginReducer, logoutReducer } = userSlice.actions;
export default userSlice.reducer;
