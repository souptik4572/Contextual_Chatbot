import {
	FETCH_ORDER_TYPE_FAILURE,
	FETCH_ORDER_TYPE_REQUEST,
	FETCH_ORDER_TYPE_SUCCESS,
} from './orderType.types';

const initialState = {
	loading: false,
	error: false,
	message: '',
	data: [],
};

const orderTypeReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_ORDER_TYPE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ORDER_TYPE_SUCCESS:
			return {
				loading: false,
				error: false,
				message: 'All the order types has been fetched successfully',
				data: payload,
			};
		case FETCH_ORDER_TYPE_FAILURE:
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

export default orderTypeReducer;
