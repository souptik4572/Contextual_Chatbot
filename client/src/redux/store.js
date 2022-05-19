import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import adminAuthReducer from './admin/admin.reducer';
import productTypeReducer from './productType/productType.reducer';
import orderTypeReducer from './orderType/orderType.reducer';
import orderStatusReducer from './orderStatus/orderStatus.reducer';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
	admin: adminAuthReducer,
	productType: productTypeReducer,
	product: productReducer,
	orderType: orderTypeReducer,
	orderStatus: orderStatusReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: composeWithDevTools,
	middleware: [logger, thunk],
});

export default store;
