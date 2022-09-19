import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  product: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchProduct = createAsyncThunk('product/fetchProduct', () => {
  return axios
    .get('https://123koin.com/wp-json/wc/v3/products?consumer_key=ck_e3277b1b5ea1fd74f0a3d65c5500894a15adf568&cunsumer_secret=cs_c9fe962981454ac13951e5fa111b8092a999a761')
    .then(response => response.data)
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false
      state.product = action.payload
      state.error = ''
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false
      state.product = []
      state.error = action.error.message
    })
  }
})

export const productReducer = productSlice.reducer;