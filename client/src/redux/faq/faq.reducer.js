import { FETCH_FAQ_REQUEST, FETCH_FAQ_SUCCESS, FETCH_FAQ_FAILURE } from './faq.types';

const initialState = {
	loading: false,
	error: false,
	message: '',
	data: [],
};

const faqReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_FAQ_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_FAQ_SUCCESS:
			return {
				loading: false,
				error: false,
				message: 'All the faqs has been fetched successfully',
				data: payload,
			};
		case FETCH_FAQ_FAILURE:
			return {
				loading: false,
				error: true,
				message: payload,
				data: [],
			};
		default:
			return state;
	}
};

export default faqReducer;
