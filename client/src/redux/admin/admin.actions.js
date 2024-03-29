import {
	ADMIN_AUTH_REQUEST,
	ADMIN_AUTH_SUCCESS,
	ADMIN_AUTH_FAILURE,
	ADMIN_AUTH_LOGOUT,
} from './admin.types';
import axios from "../../helpers/axios";
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
		const response = await axios.post('/admins/login', { email, password });
		const { token, adminType } = response.data.data;
		setWithExpiry('admin-token', token);
		setWithExpiry('adminType', adminType);
		dispatch(adminLoginSuccess(token, adminType));
		return true;
	} catch (error) {
		dispatch(adminLoginFailure(error.response.data.message));
		return false;
	}
};

export const adminLogout = () => async (dispatch) => {
	dispatch(adminLogoutSuccess());
	setWithExpiry('admin-token', null);
	setWithExpiry('adminType', null);
};
