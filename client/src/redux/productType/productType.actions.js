import {
	FETCH_PRODUCT_TYPE_REQUEST,
	FETCH_PRODUCT_TYPE_SUCCESS,
	FETCH_PRODUCT_TYPE_FAILURE,
} from './productType.types';
import axios from '../../axios';

export const fetchProductTypeRequest = () => ({
	type: FETCH_PRODUCT_TYPE_REQUEST,
});

export const fetchProductTypeSuccess = (productTypes, productTypesReverseMapping) => ({
	type: FETCH_PRODUCT_TYPE_SUCCESS,
	payload: { productTypes, productTypesReverseMapping },
});

export const fetchProductTypeFailure = (errorMessage) => ({
	type: FETCH_PRODUCT_TYPE_FAILURE,
	payload: errorMessage,
});

export const getAllProductTypes = () => async (dispatch) => {
	dispatch(fetchProductTypeRequest());
	try {
		const response = await axios.get('/product-types');
		const { data: productTypes } = response.data;
		const productTypesReverseMapping = {};
		productTypes.forEach((aProductType) => {
			productTypesReverseMapping[aProductType.name] = aProductType.id;
		});
		dispatch(fetchProductTypeSuccess(productTypes, productTypesReverseMapping));
		return true;
	} catch (error) {
		dispatch(fetchProductTypeFailure(error.response.data.message));
		return false;
	}
};
