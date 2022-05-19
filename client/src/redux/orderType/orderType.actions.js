import axios from '../../axios';
import {
	FETCH_ORDER_TYPE_FAILURE,
	FETCH_ORDER_TYPE_REQUEST,
	FETCH_ORDER_TYPE_SUCCESS,
} from './orderType.types';

export const fetchOrderTypeRequest = () => ({
	type: FETCH_ORDER_TYPE_REQUEST,
});

export const fetchOrderTypeSuccess = (orderTypes) => ({
	type: FETCH_ORDER_TYPE_SUCCESS,
	payload: orderTypes,
});

export const fetchOrderTypeFailure = (errorMessage) => ({
	type: FETCH_ORDER_TYPE_FAILURE,
	payload: errorMessage,
});

export const getAllOrderTypes = () => async (dispatch) => {
	dispatch(fetchOrderTypeRequest());
	try {
		const response = await axios.get('/order-types');
		const { data: orderTypes } = response.data;
		dispatch(fetchOrderTypeSuccess(orderTypes));
		return true;
	} catch (error) {
		dispatch(fetchOrderTypeFailure(error.response.data.message));
		return false;
	}
};
