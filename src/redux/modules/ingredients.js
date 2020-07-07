import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { pickBy, some } from 'lodash';

import { getIngredients } from '../../api/dhApi';
import { formatTerm } from '../../utils/formatTerm';

const INGREDIENTS = '@@ingredients';

const ingredientsEntity = new schema.Entity(INGREDIENTS, {}, { idAttribute: 'name' });

export const fetchAllIngredients = createAsyncThunk(`${INGREDIENTS}/fetchingredients`, async () => {
	const data = await getIngredients();

	const normalized = normalize(data, [ ingredientsEntity ]);
	return normalized.entities[INGREDIENTS];
});

// We normalize by name of ingredient for efficancy of selecting ingredents from ingredent list
// This will enable us not to have to search a sorted array for any given ids
// We also wont have to create a map of objects when searching
// We can search our object by keys with the input of users

const productsSlice = createSlice({
	name: INGREDIENTS,
	initialState: {
		loading: 'idle',
		error: null,
		ingredients: {},
		searchResults: []
	},
	reducers: {
		updateSearchResults(state, action) {
			state.searchResults = action.payload;
		},
		resetIngredientsSearchResults(state) {
			state.searchResults = [];
		}
	},
	extraReducers: {
		[fetchAllIngredients.fulfilled]: (state, action) => {
			state.ingredients = action.payload;
		}
	}
});

const { actions, reducer } = productsSlice;
export const { updateSearchResults, resetIngredientsSearchResults } = actions;

//TODO: test with jest pass sample data
/**
 * 
 * @param {Object} ingredients 
 * object of ingredietns keyed by ingredent name
 * 
 * @param {string[]} terms 
 * array of strings that may match key of ingredients
 * 
 * @return {Object} 
 * returns an object of ingredents 
 * 
 */
export const pickMatchingIngredentsByTerms = (ingredients, terms) =>
	pickBy(ingredients, (_value, key) =>
		some(terms, (str) => {
			// if we want to match an inclusion of the term ~ fuzz search we can
			// return includes(formatTerm(key), formatTerm(str));

			// if we only want to match exact as in the spec we can match with equality
			return formatTerm(key) === formatTerm(str);
		})
	);

export const searchIngredients = (term) => (dispatch, getState) => {
	// set searchResults to array of ids that match

	const { ingredients } = getState();

	const terms = term.split(',').filter((x) => !!x);

	const searchResults = pickMatchingIngredentsByTerms(ingredients.ingredients, terms);

	const searchResultIds = Object.values(searchResults).map(({ id }) => id);

	dispatch(updateSearchResults(searchResultIds));
};

export { reducer as ingredientsReducer };
