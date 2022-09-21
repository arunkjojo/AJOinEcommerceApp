import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCategory from '../api/getAPI/getCategory';
import getAllProduct from '../api/getAPI/getAllProduct';

const initialState = {
  product: [],
  category:[],
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct', 
  () => {
    return getAllProduct()
    .then (
      (res) => {
        // console.log("res",res)
        return res;
      }
    )
  }
)

export const fetchCategory = createAsyncThunk(
  'product/fetchCategory', 
  () => {
    return getCategory()
    .then (
      (res) => {
        // console.log("res",res)
        return res;
      }
    )
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.product = [];
    },
    [fetchProduct.fulfilled]: (state, action) => {
      // console.log("pay",action.payload);
      state.product = action.payload;
    },
    [fetchProduct.rejected]: (state) => {
      state.product = [];
    },

    [fetchCategory.pending]: (state) => {
      state.category = [];
    },
    [fetchCategory.fulfilled]: (state, action) => {
      // console.log("pay",action.payload);
      state.category = action.payload;
    },
    [fetchCategory.rejected]: (state) => {
      state.category = [];
    }
  }
});
export const {} = productSlice.actions;

export const productReducer = productSlice.reducer;