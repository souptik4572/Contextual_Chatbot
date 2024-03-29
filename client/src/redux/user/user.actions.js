import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILURE,
	USER_AUTH_LOGOUT,
} from './user.types';
import axios from "../../helpers/axios";
import { setWithExpiry } from '../../helpers/localStorage';

export const fetchUserRequest = () => ({
	type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (users) => ({
	type: FETCH_USER_SUCCESS,
	payload: users,
});

export const fetchUserFailure = (errorMessage) => ({
	type: FETCH_USER_FAILURE,
	payload: errorMessage,
});

export const userLoginRequest = () => ({
	type: USER_AUTH_REQUEST,
});

export const userLoginSuccess = (token, name, isVerified) => ({
	type: USER_AUTH_SUCCESS,
	payload: {
		token,
		name,
		isVerified,
	},
});

export const userLoginFailure = (errorMessage) => ({
	type: USER_AUTH_FAILURE,
	payload: errorMessage,
});

export const userLogoutSuccess = () => ({
	type: USER_AUTH_LOGOUT,
});

export const getAllUsers = () => async (dispatch, getState) => {
	dispatch(fetchUserRequest());
	try {
		const {
			admin: { token },
		} = getState();
		const response = await axios.get('/users', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const { data: users } = response.data;
		dispatch(fetchUserSuccess(users));
		return true;
	} catch (error) {
		dispatch(fetchUserFailure(error.response.data.message));
		return false;
	}
};

export const userLogin = (email, password) => async (dispatch) => {
	dispatch(userLoginRequest());
	try {
		const response = await axios.post('/users/login', { email, password });
		const { name, token, isVerified } = response.data.data;
		setWithExpiry('user-token', token);
		setWithExpiry('user-name', name);
		setWithExpiry('user-is-verified', isVerified);
		dispatch(userLoginSuccess(token, name, isVerified));
		return true;
	} catch (error) {
		dispatch(userLoginFailure(error.response.data.message));
		return false;
	}
};

export const userLogout = () => async (dispatch) => {
	dispatch(userLogoutSuccess());
	setWithExpiry('user-token', null);
	setWithExpiry('user-name', null);
	setWithExpiry('user-is-verified', null);
};
