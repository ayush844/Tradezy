import { createSlice } from "@reduxjs/toolkit";

// Check if there's a logged-in user. If there is, load the cart from local storage; otherwise, start with an empty cart.
const initialState = JSON.parse(localStorage.getItem('user')) 
                      ? (JSON.parse(localStorage.getItem('cart')) ?? []) 
                      : [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const itemExists = state.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.push(action.payload); // Push the new item (from action.payload) if it doesn't already exist.
            }
            // Update the cart in local storage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteFromCart(state, action){
            const updatedCart = state.filter(item => item.id !== action.payload.id);  // Remove the item with the matching ID.
            // Update the cart in local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        },
        updateCartQuantity(state, action) {
            let { id, quantity } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;  // Update the quantity of the item
            }
            // Update the cart in local storage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart() {
            localStorage.removeItem('cart'); // Remove cart from local storage when clearing the cart.
            return []; // Return an empty cart state.
        }
    }
});

// Export the cart actions
export const { addToCart, deleteFromCart, updateCartQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
