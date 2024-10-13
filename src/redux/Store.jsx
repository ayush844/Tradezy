import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";



export const store = configureStore({
    reducer:{
        cart: CartSlice
    },
    devTools: true //enable the Redux DevTools Extension
})