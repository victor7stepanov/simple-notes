import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        toggleAuth: (state) => {
            state.isAuth = !state.isAuth;
        }
    }
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;