import PropTypes from 'prop-types';

export const productType = {
	id: PropTypes.number,
	name: PropTypes.string,
	collection: PropTypes.string,
	ingredientIds: PropTypes.arrayOf(PropTypes.number),
	image: PropTypes.shape({ url: PropTypes.string })
};
