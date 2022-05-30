export const notNullObject = (inputObject) => {
	const outputObject = {};
	Object.keys(inputObject).forEach((aKey) => {
		if (inputObject[aKey]) outputObject[aKey] = inputObject[aKey];
	});
	return outputObject;
};
