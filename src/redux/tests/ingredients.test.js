import { pickMatchingIngredentsByTerms } from '../modules/ingredients';
import { testIngredientsData } from './testData';

test('returns correct list of items', () => {
	expect(pickMatchingIngredentsByTerms(testIngredientsData, [ 'Hemp Protein' ])).toStrictEqual({
		'Hemp Protein': { id: 1, name: 'Hemp Protein' }
	});
});

test('returns empty object', () => {
	expect(pickMatchingIngredentsByTerms(testIngredientsData, [ 'Hemp protean' ])).toStrictEqual({});
});
