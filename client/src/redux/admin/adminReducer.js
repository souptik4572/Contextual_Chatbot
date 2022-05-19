import { getWithExpiry } from '../../helpers/localStorage';
import { ADMIN_AUTH_REQUEST, ADMIN_AUTH_SUCCESS, ADMIN_AUTH_FAILURE } from './adminTypes';

const initialState = {
	loading: false,
	error: false,
	message: '',
	token: getWithExpiry('token'),
	adminType: getWithExpiry('adminType'),
};

const adminAuthReducer = async (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADMIN_AUTH_REQUEST:
			return { ...state, loading: true };
		case ADMIN_AUTH_SUCCESS:
			return {
				loading: false,
				error: false,
				message: 'Logged in successfully',
				token: payload.token,
				adminType: payload.adminType,
			};
		case ADMIN_AUTH_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				message: payload,
			};
		default:
			return state;
	}
};

export default adminAuthReducer;
