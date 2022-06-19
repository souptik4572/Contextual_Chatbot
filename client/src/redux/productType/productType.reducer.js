import {
	FETCH_PRODUCT_TYPE_REQUEST,
	FETCH_PRODUCT_TYPE_SUCCESS,
	FETCH_PRODUCT_TYPE_FAILURE,
} from './productType.types';

const initialState = {
	loading: false,
	error: false,
	message: '',
	data: [],
	reverseMapper: {},
};

const productTypeReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_PRODUCT_TYPE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCT_TYPE_SUCCESS:
			return {
				loading: false,
				error: false,
				message: 'All the product types has been fetched successfully',
				data: payload.productTypes,
				reverseMapper: payload.productTypesReverseMapping,
			};
		case FETCH_PRODUCT_TYPE_FAILURE:
			return {
				loading: false,
				error: true,
				message: payload,
				data: [],
				reverseMapper: {},
			};
		default:
			return state;
	}
};

export default productTypeReducer;
