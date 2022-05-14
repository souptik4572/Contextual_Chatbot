import { StatusCodes } from 'http-status-codes';
import { prisma } from '../config/prismaConfig.js';
import { handleSuccess, handleError } from '../helpers/responseHandlers.js';
import { createProductValidator } from '../validations/product.js';
import { doesProductExist, doesProductTypeExist } from '../helpers/searchModels.js';

export const getAllProducts = async (req, res) => {
	try {
		const products = await prisma.product.findMany();
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of all products',
			data: products,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const createProduct = async (req, res) => {
	const { error } = createProductValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		if (!(await doesProductTypeExist(req.body.productTypeId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'GIven product type does not exist',
			});
		const product = await prisma.product.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'Product has been created successfully',
			data: product,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const deleteProduct = async (req, res) => {
	const { productId } = req.params;
	try {
		if (!(await doesProductExist(productId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Product does not exist',
			});
		const product = await prisma.product.delete({
			where: { id: productId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Product has been deleted successfully',
			data: product,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};
