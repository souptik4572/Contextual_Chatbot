import { StatusCodes } from 'http-status-codes';
import { prisma } from '../config/prismaConfig.js';
import { handleError, handleSuccess } from '../helpers/responseHandlers.js';
import { doesOrderStatusExist } from '../helpers/searchModels.js';
import { createOrderStatusValidator } from '../validations/orderStatus.js';

export const getAllOrderStatuses = async (req, res) => {
	try {
		const orderStatuses = await prisma.orderStatus.findMany();
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of all product types',
			data: orderStatuses,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const createOrderStatus = async (req, res) => {
	const { error } = createOrderStatusValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		const orderStatus = await prisma.orderStatus.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'Order Status has been created successfully',
			data: orderStatus,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const deleteOrderStatus = async (req, res) => {
	const { orderStatusId } = req.params;
	try {
		if (!(await doesOrderStatusExist(orderStatusId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Order Status does not exist',
			});
		const orderStatus = await prisma.orderStatus.delete({
			where: { id: orderStatusId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Order Status has been deleted successfully',
			data: orderStatus,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};
