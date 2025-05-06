import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);  
    },
    clearCart: (state) => {
        state.cartItems = [];
      },
      
  },
});

export const { addToCart ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
