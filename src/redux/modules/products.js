import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { filter, includes } from 'lodash';

import { getProducts } from '../../api/dhApi';

const PRODUCTS = '@@products';

export const fetchAllProducts = createAsyncThunk(`${PRODUCTS}/fetchAllProducts`, getProducts);

const productsSlice = createSlice({
	name: PRODUCTS,
	initialState: {
		loading: 'idle',
		error: null,
		products: [],
		searchResults: []
	},
	reducers: {
		updateSearchResults(state, action) {
			state.searchResults = action.payload;
		},
		resetProductsSearchResults(state) {
			state.searchResults = [];
		}
	},
	extraReducers: {
		[fetchAllProducts.fulfilled]: (state, action) => {
			state.products = action.payload;
		}
	}
});

const { actions, reducer } = productsSlice;

export const { updateSearchResults, resetProductsSearchResults } = actions;

export const searchProducts = (searchIds) => (dispatch, getState) => {
	const { products: { products } } = getState();
	const results = filter(products, (value) => {
		return value.ingredientIds.some((ingredientId) => includes(searchIds, ingredientId));
	});

	dispatch(updateSearchResults(results));
};

export { reducer as productsReducer };
