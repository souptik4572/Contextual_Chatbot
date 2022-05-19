import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import adminAuthReducer from './admin/admin.reducer';
import productTypeReducer from './productType/productType.reducer';

const rootReducer = combineReducers({
	admin: adminAuthReducer,
	productType: productTypeReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: composeWithDevTools,
	middleware: [logger, thunk],
});

export default store;
