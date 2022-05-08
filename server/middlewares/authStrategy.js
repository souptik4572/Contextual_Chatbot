import { StatusCodes } from 'http-status-codes';
import { verifyJwt } from '../helpers/jwtOperations.js';
import { prisma } from '../config/prismaConfig.js';
import { handleError } from '../helpers/responseHandlers.js';

export const authProtection =
	(isAdmin = false) =>
	async (req, res, next) => {
		try {
			const token = req.header('Authorization').split(' ')[1];
			if (!!!token) {
				return handleError({
					res,
					message: 'Access denied without access token',
					status: StatusCodes.UNAUTHORIZED,
				});
			}
			const tableInstance = isAdmin ? prisma.admin : prisma.user;
			const loggedInEntry = await tableInstance.findUnique({
				where: { id: verifyJwt(token).uniqueId },
			});
			if (!loggedInEntry)
				return handleError({
					res,
					status: StatusCodes.NOT_FOUND,
					message: `${isAdmin ? 'Admin' : 'User'} with given credentials does not exist`,
				});
			if (isAdmin) req.admin = loggedInEntry;
			else req.user = loggedInEntry;
			next();
		} catch (error) {
			if (error instanceof TypeError) {
				return handleError({
					res,
					status: StatusCodes.BAD_REQUEST,
					message: "Didn't receive JSON Web Token for authorization",
				});
			}
			return handleError({
				res,
				status: StatusCodes.INTERNAL_SERVER_ERROR,
				message: error.message,
			});
		}
	};
