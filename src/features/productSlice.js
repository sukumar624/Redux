import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('response', response);

        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})


const initialState = {
    product: [],
    loading: false,
    error: null
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong'
        })
    }

})

export default productSlice.reducer;