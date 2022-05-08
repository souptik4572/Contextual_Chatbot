import { StatusCodes } from 'http-status-codes';
import { handleError } from '../helpers/responseHandlers.js';

export const isSuperAdmin = async (req, res, next) => {
	const { admin } = req;
	if (admin.type !== 'SUPER_ADMIN')
		return handleError({
			res,
			status: StatusCodes.UNAUTHORIZED,
			message: 'Access denied',
		});
	next();
};
