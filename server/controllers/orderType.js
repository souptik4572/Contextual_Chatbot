import { StatusCodes } from 'http-status-codes';
import { prisma } from '../config/prismaConfig.js';
import { convertToUniqueFormat } from '../helpers/formatParams.js';
import { handleError, handleSuccess } from '../helpers/responseHandlers.js';
import { doesOrderTypeExist } from '../helpers/searchModels.js';
import { createOrderTypeValidator } from '../validations/orderType.js';

export const getAllOrderTypes = async (req, res) => {
	try {
		const orderTypes = await prisma.orderType.findMany();
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of all order types',
			data: orderTypes,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const createOrderType = async (req, res) => {
	const { error } = createOrderTypeValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		req.body.name = convertToUniqueFormat(req.body.name);
		const orderType = await prisma.orderType.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'Order Type has been created successfully',
			data: orderType,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const deleteOrderType = async (req, res) => {
	console.log(req.params);
	const { orderTypeId } = req.params;
	try {
		if (!(await doesOrderTypeExist(orderTypeId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Order type does not exist',
			});
		const orderType = await prisma.orderType.delete({
			where: { id: orderTypeId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Order Type has been deleted successfully',
			data: orderType,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};
