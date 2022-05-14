export const convertToUniqueFormat = (data) => {
	return data.trim().split(' ').join('_').toLowerCase();
};
