import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const { setProducts } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await api.get('/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};

export default productsSlice.reducer;
