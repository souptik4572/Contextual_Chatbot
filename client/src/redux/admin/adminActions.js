import {
	ADMIN_AUTH_REQUEST,
	ADMIN_AUTH_SUCCESS,
	ADMIN_AUTH_FAILURE,
	ADMIN_AUTH_LOGOUT,
} from './adminTypes';
import axios from '../../axios';
import { setWithExpiry } from '../../helpers/localStorage';

export const adminLoginRequest = () => ({
	type: ADMIN_AUTH_REQUEST,
});

export const adminLoginSuccess = (token, adminType) => ({
	type: ADMIN_AUTH_SUCCESS,
	payload: {
		token,
		adminType,
	},
});

export const adminLoginFailure = (errorMessage) => ({
	type: ADMIN_AUTH_FAILURE,
	payload: errorMessage,
});

export const adminLogoutSuccess = () => ({
	type: ADMIN_AUTH_LOGOUT,
});

export const adminLogin = (email, password) => async (dispatch) => {
	dispatch(adminLoginRequest());
	try {
		const response = await axios.post('/admin/login', { email, password });
		const { token, adminType } = response.data.data;
		setWithExpiry('token', token);
		setWithExpiry('adminType', adminType);
		dispatch(adminLoginSuccess(token, adminType));
		return true;
	} catch (error) {
		dispatch(adminLoginFailure(error.response.data.error));
		return false;
	}
};

export const adminLogout = () => async (dispatch) => {
	dispatch(adminLogoutSuccess());
};
