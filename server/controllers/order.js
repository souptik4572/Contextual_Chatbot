import { StatusCodes } from 'http-status-codes';
import { prisma } from '../config/prismaConfig.js';
import { handleSuccess, handleError } from '../helpers/responseHandlers.js';
import { createOrderValidator } from '../validations/order.js';
import { doesOrderExist, doesAllExist } from '../helpers/searchModels.js';

export const getAllOrders = async (req, res) => {
	try {
		const orders = await prisma.order.findMany();
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of all orders',
			data: orders,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const createOrder = async (req, res) => {
	const { error } = createOrderValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		const { userId, productId, orderTypeId, orderStatusId } = req.body;
		const errorMessage = await doesAllExist({ userId, productId, orderTypeId, orderStatusId });
		if (errorMessage)
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: errorMessage,
			});
		const order = await prisma.order.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'Order has been created successfully',
			data: order,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const getOrder = async (req, res) => {
	const { orderId } = req.params;
	try {
		if (!(await doesOrderExist(orderId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Order does not exist',
			});
		const order = await prisma.order.findUnique({
			where: { id: orderId },
			include: {
				user: 1,
				product: 1,
				status: 1,
				type: 1,
			},
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'The detailed order data',
			data: order,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const changeOrderStatus = async (req, res) => {
	const { orderId } = req.params;
	try {
		const { orderStatusId } = req.body;
		const errorMessage = await doesAllExist({ orderId, orderStatusId });
		if (errorMessage)
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: errorMessage,
			});
		const order = await prisma.order.update({
			where: { id: orderId },
			data: { orderStatusId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Status has been updated successfully',
			data: order,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const deleteOrder = async (req, res) => {
	const { orderId } = req.params;
	try {
		if (!(await doesOrderExist(orderId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Order does not exist',
			});
		const order = await prisma.order.delete({
			where: { id: orderId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Order has been deleted successfully',
			data: order,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};
