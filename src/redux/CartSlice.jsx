import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            state.push(action.payload); // Push the new item (from action.payload) to the state array.
        },
        deleteFromCart(state, action){
            return state.filter(item => item.id != action.payload.id);  // // Remove the item with the matching ID.
        }
    }
})


export const {addToCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;