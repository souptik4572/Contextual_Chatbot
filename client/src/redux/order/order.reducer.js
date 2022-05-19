import { FETCH_ORDER_FAILURE, FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS } from './order.types';

const initialState = {
	loading: false,
	error: false,
	message: '',
	data: [],
};

const orderReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_ORDER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ORDER_SUCCESS:
			return {
				loading: false,
				error: false,
				message: 'All the orders has been fetched successfully',
				data: payload,
			};
		case FETCH_ORDER_FAILURE:
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

export default orderReducer;
