export const convertToNumber = (req, res, next) => {
	Object.keys(req.params).forEach((uniqueKey) => {
		req.params[uniqueKey] = Number(req.params[uniqueKey]);
	});
	Object.keys(req.query).forEach((uniqueKey) => {
		req.query[uniqueKey] = Number(req.query[uniqueKey]);
	});
	next();
};
