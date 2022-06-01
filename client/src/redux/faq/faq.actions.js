import axios from '../../axios';
import { notNullObject } from '../../helpers/createNonNullObjects';
import { FETCH_FAQ_REQUEST, FETCH_FAQ_SUCCESS, FETCH_FAQ_FAILURE } from './faq.types';

export const fetchFaqRequest = () => ({
	type: FETCH_FAQ_REQUEST,
});

export const fetchFaqSuccess = (faqs) => ({
	type: FETCH_FAQ_SUCCESS,
	payload: faqs,
});

export const fetchFaqFailure = (errorMessage) => ({
	type: FETCH_FAQ_FAILURE,
	payload: errorMessage,
});

export const getAllFaqs = ({
	orderId = null,
	productId = null,
	orderStatusId = null,
	orderTypeId = null,
	userId = null,
	productTypeId = null,
	parentFaqId = null,
}) => async (dispatch, getState) => {
	dispatch(fetchFaqRequest());
	try {
		const filterFaqs = notNullObject({
			orderId,
			productId,
			orderStatusId,
			orderTypeId,
			userId,
			productTypeId,
			parentFaqId,
		});
		const response = await axios.get('/faqs', {
			params: filterFaqs,
		});
		const { data: faqs } = response.data;
		dispatch(fetchFaqSuccess(faqs));
		return true;
	} catch (error) {
		dispatch(fetchFaqFailure(error.response.data.message));
		return false;
	}
};
