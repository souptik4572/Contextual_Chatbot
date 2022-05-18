import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

const store = configureStore({
	reducer: rootReducer,
	devTools: composeWithDevTools,
	middleware: [logger, thunk],
});

export default store;
