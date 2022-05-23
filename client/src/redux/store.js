import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import adminAuthReducer from './admin/admin.reducer';
import productTypeReducer from './productType/productType.reducer';
import orderTypeReducer from './orderType/orderType.reducer';
import orderStatusReducer from './orderStatus/orderStatus.reducer';
import productReducer from './product/product.reducer';
import orderReducer from './order/order.reducer';
import userReducer from './user/user.reducer';
import faqReducer from './faq/faq.reducer';

const rootReducer = combineReducers({
	admin: adminAuthReducer,
	user: userReducer,
	productType: productTypeReducer,
	product: productReducer,
	orderType: orderTypeReducer,
	orderStatus: orderStatusReducer,
	order: orderReducer,
	faq: faqReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: composeWithDevTools,
	middleware: [logger, thunk],
});

export default store;
