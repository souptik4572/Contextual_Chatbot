import { StatusCodes } from 'http-status-codes';
import { prisma } from '../config/prismaConfig.js';
import { handleSuccess, handleError } from '../helpers/responseHandlers.js';
import { createProductTypeValidator } from '../validations/productType.js';
import { doesProductTypeExist } from '../helpers/searchModels.js';

export const getAllProductTypes = async (req, res) => {
	try {
		const productTypes = await prisma.productType.findMany();
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of all product types',
			data: productTypes,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const createProductType = async (req, res) => {
	const { error } = createProductTypeValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		const productType = await prisma.productType.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'Product Type has been created successfully',
			data: productType,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const deleteProductType = async (req, res) => {
	let { productTypeId } = req.params;
	productTypeId = Number(productTypeId);
	try {
		if (!(await doesProductTypeExist(productTypeId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Product type does not exist',
			});
		const productType = await prisma.productType.delete({
			where: { id: productTypeId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Product Type has been deleted successfully',
			data: productType,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};
