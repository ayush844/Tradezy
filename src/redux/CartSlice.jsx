import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const itemExists = state.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.push(action.payload); // Push the new item (from action.payload) if it doesn't already exist.
            }
        },
        deleteFromCart(state, action){
            return state.filter(item => item.id != action.payload.id);  // // Remove the item with the matching ID.
        },
        updateCartQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;  // Update the quantity of the item
            }
        }
    }
})


export const {addToCart, deleteFromCart, updateCartQuantity} = cartSlice.actions;

export default cartSlice.reducer;