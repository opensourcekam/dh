import React from 'react';
import PropTypes from 'prop-types';

import { ProductCard } from './ProductCard';
import { productType } from './types';

const ProductList = ({ products }) => <dib>{Object.values(products).map(ProductCard)}</dib>;

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape(productType)).isRequired
};

export { ProductList };
