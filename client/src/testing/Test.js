import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adminLogin, getAllOrderTypes, getAllProductTypes } from '../redux';

const Test = () => {
	// const { token, adminType } = useSelector((state) => state.admin);
	const dispatch = useDispatch();
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
			<button onClick={fetchOrderTypes}>Submit</button>
		</div>
	);
};

export default Test;
