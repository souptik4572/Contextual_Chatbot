import { StatusCodes } from 'http-status-codes';
import { prisma } from '../config/prismaConfig.js';
import { userLoginValidator, userRegistrationValidator } from '../validations/user.js';
import { handleError, handleSuccess } from '../helpers/responseHandlers.js';
import { createJwt } from '../helpers/jwtOperations.js';
import { hashPassword, isPasswordMatching } from '../helpers/passwordOperations.js';

export const registerUser = async (req, res) => {
	const { error } = userRegistrationValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		req.body.password = await hashPassword(req.body.password);
		const user = await prisma.user.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'New user has been registered successfully',
			data: user,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const loginUser = async (req, res) => {
	const { error } = userLoginValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		const { email, password } = req.body;
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!user)
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'User with given email does not exist',
			});
		if (!(await isPasswordMatching(password, user.password)))
			return handleError({
				res,
				status: StatusCodes.UNAUTHORIZED,
				message: 'Passwords do not match',
			});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'User has been successfully logged in',
			data: {
				name: user.name,
				isVerified: user.isVerified,
				token: createJwt({ uniqueId: user.id }),
			},
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await prisma.user.findMany();
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of all registered users',
			data: users,
		});
	} catch (error) {
		return handleError({
			res,
			message: error.message,
		});
	}
};

export const getAllOwnedOrders = async (req, res) => {
	try {
		const orders = await prisma.order.findMany({
			where: { userId: req.user.id },
			include: { product: 1, status: 1, type: 1 },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Required order details',
			data: orders,
		});
	} catch (error) {
		return handleError({
			res,
			message: error.message,
		});
	}
};
