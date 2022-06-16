import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from './product.types';
import axios from '../../axios';
import { notNullObject } from '../../helpers/createNonNullObjects';

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

export const getAllProducts = ({ productTypeId = null }) => async (dispatch) => {
	dispatch(fetchProductRequest());
	try {
		const filterProducts = notNullObject({
			productTypeId,
		});
		const response = await axios.get('/products', {
			params: filterProducts,
		});
		const { data: products } = response.data;
		dispatch(fetchProductSuccess(products));
		return true;
	} catch (error) {
		dispatch(fetchProductFailure(error.response.data.message));
		return false;
	}
};
