import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from './product.types';
import axios from '../../axios';

export const fetchProductRequest = () => ({
	type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (products) => ({
	type: FETCH_PRODUCT_SUCCESS,
	payload: products,
});

export const fetchProductFailure = (errorMessage) => ({
	type: FETCH_PRODUCT_FAILURE,
	payload: errorMessage,
});

export const getAllProducts = () => async (dispatch) => {
	dispatch(fetchProductRequest());
	try {
		const response = await axios.get('/products');
		const { data: products } = response.data;
		dispatch(fetchProductSuccess(products));
		return true;
	} catch (error) {
		dispatch(fetchProductFailure(error.response.data.error));
		return false;
	}
};
