import React from 'react';
import PropTypes from 'prop-types';

import { ProductCard } from './ProductCard';
import { productType } from './types';

const ProductList = ({ products }) => <div>{Object.values(products).map(ProductCard)}</div>;

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape(productType)).isRequired
};

export { ProductList };
