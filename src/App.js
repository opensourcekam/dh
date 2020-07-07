import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// REDUX
import { fetchAllProducts, searchProducts, resetProductsSearchResults } from './redux/modules/products';
import { fetchAllIngredients, searchIngredients, resetIngredientsSearchResults } from './redux/modules/ingredients';

// COMPONENTS - FEATURES
import { Search } from './components/Search';
import { ProductList } from './features/products/ProductList';

const Container = styled.main`
	padding: 1rem;

	display: flex;
	flex-direction: column;
`;

function App() {
	const [ searchTerm, setSearchTerm ] = useState(null);
	const handleSearch = (e) => setSearchTerm(e.target.value);

	const dispatch = useDispatch();
	const products = useSelector(({ products }) => products.searchResults);
	const ingredients = useSelector(({ ingredients }) => ingredients.ingredients);
	const ingredientsSearchResults = useSelector(({ ingredients }) => ingredients.searchResults);

	// init data
	useEffect(
		() => {
			if (!products.length) dispatch(fetchAllProducts());
			if (!ingredients.length) dispatch(fetchAllIngredients());
		},
		[ dispatch, ingredients.length, products.length ]
	);

	// search term related effects
	useEffect(
		() => {
			if (searchTerm) {
				dispatch(searchIngredients(searchTerm));
			}

			if (searchTerm === '') {
				dispatch(resetIngredientsSearchResults());
				dispatch(resetProductsSearchResults());
			}
		},
		[ dispatch, searchTerm ]
	);

	// search product list when we have results for ingredients
	useEffect(
		() => {
			if (ingredientsSearchResults.length) {
				dispatch(searchProducts(ingredientsSearchResults));
			}
		},
		[ dispatch, ingredientsSearchResults ]
	);

	return (
		<Container>
			<Search onChange={handleSearch} placeholder="Search ingredients" />
			<ProductList products={products} />
		</Container>
	);
}

export default App;
