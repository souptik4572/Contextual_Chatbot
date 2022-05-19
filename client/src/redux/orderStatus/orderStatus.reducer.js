import {
	FETCH_ORDER_STATUS_REQUEST,
	FETCH_ORDER_STATUS_SUCCESS,
	FETCH_ORDER_STATUS_FAILURE,
} from './orderStatus.types';

const initialState = {
	loading: false,
	error: false,
	message: '',
	data: [],
};

const orderStatusReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_ORDER_STATUS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ORDER_STATUS_SUCCESS:
			return {
				loading: false,
				error: false,
				message: 'All the order statuses has been fetched successfully',
				data: payload,
			};
		case FETCH_ORDER_STATUS_FAILURE:
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

export default orderStatusReducer;
