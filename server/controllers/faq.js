import { StatusCodes } from 'http-status-codes';
import { prisma } from '../config/prismaConfig.js';
import { handleError, handleSuccess } from '../helpers/responseHandlers.js';
import { doesAllExist, doesFaqExist } from '../helpers/searchModels.js';
import { createFaqValidator } from '../validations/faq.js';

export const filterFaqs = async (req, res) => {
	const { orderId, productId, orderStatusId, orderTypeId, userId, productTypeId, parentFaqId } =
		req.query;
	try {
		const faqs = await prisma.faq.findMany({
			where: {
				userId,
				orderId,
				productTypeId,
				productId,
				orderStatusId,
				orderTypeId,
				parentFaqId,
			},
			include: {
				childFaqs: 1,
			},
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'List of faqs',
			data: faqs,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const getFaq = async (req, res) => {
	const { faqId } = req.params;
	try {
		if (!(await doesFaqExist(faqId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Faq does not exist',
			});
		const faq = await prisma.faq.findUnique({
			where: { id: faqId },
			include: {
				order: 1,
				orderStatus: 1,
				orderType: 1,
				product: 1,
				parentFaq: 1,
				childFaqs: 1,
				productType: 1,
				user: 1,
			},
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'The detailed faq data',
			data: faq,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const createFaq = async (req, res) => {
	const { error } = createFaqValidator(req.body);
	if (error) return handleError({ res, status: StatusCodes.BAD_REQUEST, message: error.message });
	try {
		const {
			orderId,
			productId,
			orderStatusId,
			orderTypeId,
			parentFaqId,
			userId,
			productTypeId,
		} = req.body;
		const errorMessage = await doesAllExist({
			userId,
			orderId,
			productTypeId,
			productId,
			orderStatusId,
			orderTypeId,
			faqId: parentFaqId,
		});
		if (!!errorMessage)
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: errorMessage,
			});
		const faq = await prisma.faq.create({
			data: req.body,
		});
		return handleSuccess({
			res,
			status: StatusCodes.CREATED,
			message: 'Faq has been created successfully',
			data: faq,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};

export const deleteFaq = async (req, res) => {
	const { faqId } = req.params;
	try {
		if (!(await doesFaqExist(faqId)))
			return handleError({
				res,
				status: StatusCodes.NOT_FOUND,
				message: 'Faq does not exist',
			});
		const faq = await prisma.faq.delete({
			where: { id: faqId },
		});
		return handleSuccess({
			res,
			status: StatusCodes.OK,
			message: 'Faq has been deleted successfully',
			data: faq,
		});
	} catch (error) {
		return handleError({ res, message: error.message });
	}
};
