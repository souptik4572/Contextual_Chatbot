export const convertToNumber = (req, res, next) => {
	Object.keys(req.params).forEach((uniqueKey) => {
		req.params[uniqueKey] = Number(req.params[uniqueKey]);
	});
	next();
};
