import React from 'react';

import { productType } from './types';

const ProductCard = ({ id, name, image }) => {
	return (
		<div key={id}>
			<p>{name}</p>
		</div>
	);
};

ProductCard.propTypes = productType;

export { ProductCard };
