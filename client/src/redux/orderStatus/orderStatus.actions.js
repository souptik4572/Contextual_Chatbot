import axios from '../../axios';
import {
	FETCH_ORDER_STATUS_FAILURE,
	FETCH_ORDER_STATUS_REQUEST,
	FETCH_ORDER_STATUS_SUCCESS,
} from './orderStatus.types';

export const fetchOrderStatusRequest = () => ({
	type: FETCH_ORDER_STATUS_REQUEST,
});

export const fetchOrderStatusSuccess = (orderStatuses) => ({
	type: FETCH_ORDER_STATUS_SUCCESS,
	payload: orderStatuses,
});

export const fetchOrderStatusFailure = (errorMessage) => ({
	type: FETCH_ORDER_STATUS_FAILURE,
	payload: errorMessage,
});

export const getAllOrderStatuses = () => async (dispatch) => {
	dispatch(fetchOrderStatusRequest());
	try {
		const response = await axios.get('/order-statuses');
		const { data: orderStatuses } = response.data;
		dispatch(fetchOrderStatusSuccess(orderStatuses));
		return true;
	} catch (error) {
		dispatch(fetchOrderStatusFailure(error.response.data.message));
		return false;
	}
};
