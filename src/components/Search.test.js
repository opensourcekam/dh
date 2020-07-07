import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Search } from './Search';

const setup = () => {
	const utils = render(<Search />);
	const input = utils.getByLabelText('search-input');
	return {
		input,
		...utils
	};
};

test('It should render the given search term', () => {
	const { input } = setup();
	fireEvent.change(input, { target: { value: 'Organic Coconut' } });
	expect(input.value).toBe('Organic Coconut');
});

test('It should render the given search term on change', () => {
	const { input } = setup();
	fireEvent.change(input, { target: { value: 'Organic Coconut Water' } });
	expect(input.value).toBe('Organic Coconut Water');
});

test('It should allow the value to be deleted', () => {
	const { input } = setup();
	fireEvent.change(input, { target: { value: 'Organic Coconut' } });
	expect(input.value).toBe('Organic Coconut'); // need to make a change so React registers "" as a change
	fireEvent.change(input, { target: { value: '' } });
	expect(input.value).toBe('');
});
