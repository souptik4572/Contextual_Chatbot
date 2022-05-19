import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './user.types';
import axios from '../../axios';

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
