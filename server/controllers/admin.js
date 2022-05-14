import { StatusCodes } from 'http-status-codes';
import { ADMIN, SUPER_ADMIN } from '../../constants/adminTypes.js';
import { prisma } from '../config/prismaConfig.js';
import { createJwt } from '../helpers/jwtOperations.js';
import { hashPassword, isPasswordMatching } from '../helpers/passwordOperations.js';
import { handleError, handleSuccess } from '../helpers/responseHandlers.js';
import { adminLoginValidator, adminRegistrationValidator } from '../validations/admin.js';
import { doesAdminExist, doesUserExist } from '../helpers/searchModels.js';

export const registerAdmin = async (req, res) => {
	const { error } = adminRegistrationValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		req.body.password = await hashPassword(req.body.password);
		const admin = await prisma.admin.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'New admin has been registered successfully',
			data: admin,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const loginAdmin = async (req, res) => {
	const { error } = adminLoginValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		const { email, password } = req.body;
		const admin = await prisma.admin.findUnique({
			where: {
				email,
			},
		});
		if (!admin)
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Admin with given email does not exist',
			});
		if (!(await isPasswordMatching(password, admin.password)))
			return handleError({
				res,
				status: StatusCodes.UNAUTHORIZED,
				message: 'Passwords do not match',
			});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Admin has been successfully logged in',
			data: { adminType: admin.type, token: createJwt({ uniqueId: admin.id }) },
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const getAllAdmins = async (req, res) => {
	try {
		const admins = await prisma.admin.findMany({
			where: {
				type: ADMIN,
			},
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of all registered admins',
			data: admins,
		});
	} catch (error) {
		return handleError({
			res,
			message: error.message,
		});
	}
};

export const deleteAdmin = async (req, res) => {
	let { adminId } = req.params;
	try {
		if (!(await doesAdminExist(adminId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Admin does not exist',
			});
		const admin = await prisma.admin.delete({
			where: { id: adminId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Admin has been deleted successfully',
			data: admin,
		});
	} catch (error) {
		return handleError({
			res,
			message: error.message,
		});
	}
};

export const upgradeAdmin = async (req, res) => {
	let { adminId } = req.params;
	try {
		if (!(await doesAdminExist(adminId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Admin does not exist',
			});
		const admin = await prisma.admin.update({
			where: { id: adminId },
			data: { type: SUPER_ADMIN },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Admin successfully upgraded to super admin',
			data: admin,
		});
	} catch (error) {
		return handleError({
			res,
			message: error.message,
		});
	}
};

export const verifyUser = async (req, res) => {
	let { userId } = req.params;
	try {
		let user = await doesUserExist(userId, true);
		if (!user)
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'User does not exist',
			});
		if (user.isVerified)
			return handleError({
				res,
				status: StatusCodes.BAD_REQUEST,
				message: 'User is already verified',
			});
		user = await prisma.user.update({
			where: { id: userId },
			data: { isVerified: true },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'User has been successfully verified',
			data: user,
		});
	} catch (error) {
		return handleError({
			res,
			message: error.message,
		});
	}
};
