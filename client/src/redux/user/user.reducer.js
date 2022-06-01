import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILURE,
	USER_AUTH_LOGOUT,
} from './user.types';
import { getWithExpiry } from '../../helpers/localStorage';

const initialState = {
	loading: false,
	error: false,
	message: '',
	name: getWithExpiry('user-name'),
	token: getWithExpiry('user-token'),
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
		case USER_AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				message: 'User had been logged in successfully',
				token: payload.token,
				name: payload.name,
			};
		case USER_AUTH_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				message: payload,
				token: null,
				name: null,
			};
		case USER_AUTH_LOGOUT:
			return {
				...state,
				loading: false,
				error: false,
				message: 'Logged out successfully',
				token: null,
				name: null,
			};
		default:
			return state;
	}
};

export default userReducer;
