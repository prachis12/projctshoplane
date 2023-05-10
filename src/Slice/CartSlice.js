import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishListItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },

    removeFromCart(state, action) {
      state.cartItems.map(() => {
        const filteredCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = filteredCartItems;
      });
    },
    addToWishlist(state, action) {
      state.wishListItems.push(action.payload);
    },
    removeFromWishlist(state, action) {
      const filteredWishItems = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishListItems = filteredWishItems;
    },
  },
});

export const { addToCart, removeFromCart, addToWishlist, removeFromWishlist } =
  cartSlice.actions;
export default cartSlice.reducer;
