const generateFilters = (pathDataArray, reverseMapper) => {
	const filterParams = {};
	console.log(pathDataArray);
	const nLen = pathDataArray.length;
	if (!isNaN(pathDataArray[0])) {
		if (nLen === 2) {
			filterParams.productTypeId = reverseMapper[pathDataArray[1]];
			filterParams.productId = pathDataArray[0];
		} else if (nLen === 4) {
			filterParams.orderId = pathDataArray[0];
		}
	} else {
		if (nLen % 2 === 1 && pathDataArray[0] in reverseMapper) {
			filterParams.productTypeId = reverseMapper[pathDataArray[0]];
		}
	}
	console.log(filterParams);
	return filterParams;
};

export default generateFilters;
