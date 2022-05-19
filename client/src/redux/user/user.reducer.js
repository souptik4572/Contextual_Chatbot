import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './user.types';

const initialState = {
	loading: false,
	error: false,
	message: '',
	token: '',
	data: [],
};

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_USER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USER_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				message: 'All the users has been fetched',
				data: payload,
			};
		case FETCH_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				message: payload,
				data: [],
			};
		default:
			return state;
	}
};

export default userReducer;
