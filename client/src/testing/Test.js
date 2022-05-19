import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	adminLogin,
	getAllOrderStatuses,
	getAllOrderTypes,
	getAllProducts,
	getAllProductTypes,
} from '../redux';

const Test = () => {
	// const { token, adminType } = useSelector((state) => state.admin);
	const dispatch = useDispatch();
	const fetchProducts = async () => {
		const result = await dispatch(getAllProducts());
		console.log(result);
	};
	const fetchOrderStatuses = async () => {
		const result = await dispatch(getAllOrderStatuses());
		console.log(result);
	};
	const fetchOrderTypes = async () => {
		const result = await dispatch(getAllOrderTypes());
		console.log(result);
	};
	const fetchProductTypes = async () => {
		const result = await dispatch(getAllProductTypes());
		console.log(result);
	};
	const submitLoginCredentials = async () => {
		const result = await dispatch(adminLogin('admin@gmail.com', 'password'));
		console.log(result);
	};
	return (
		<div className='Test'>
			<h1>This is for sample testing</h1>
			<button onClick={fetchProducts}>Submit</button>
		</div>
	);
};

export default Test;
