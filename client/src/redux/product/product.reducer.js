import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from './product.types';

const initialState = {
	loading: false,
	error: false,
	message: '',
	data: [],
};

const productReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_PRODUCT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCT_SUCCESS:
			return {
				loading: false,
				error: false,
				message: 'All the product has been fetched successfully',
				data: payload,
			};
		case FETCH_PRODUCT_FAILURE:
			return {
				loading: false,
				error: true,
				message: payload,
				data: [],
			};
		default:
			return state;
	}
};

export default productReducer;
