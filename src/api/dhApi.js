import axios from 'axios';

const BASE_URL = 'https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data';

export async function getIngredients() {
	const url = `${BASE_URL}/ingredients.json`;

	const { data } = await axios.get(url);
	return data;
}

export async function getProducts() {
	const url = `${BASE_URL}/products.json`;

	const { data } = await axios.get(url);
	return data;
}
