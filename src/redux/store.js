import { configureStore } from '@reduxjs/toolkit';

import { ingredientsReducer } from './modules/ingredients';
import { productsReducer } from './modules/products';

const store = configureStore({
	reducer: {
		ingredients: ingredientsReducer,
		products: productsReducer
	}
});

export { store };
