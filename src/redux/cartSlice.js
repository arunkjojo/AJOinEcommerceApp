import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const fetchCart = createAsyncThunk('cart/fetchCart', () => {
  var localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
  return localStorageCart;
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload
    })
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.cart = []
    })
  }
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;