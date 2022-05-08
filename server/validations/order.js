import Joi from 'joi';
import { PROCESSING, COMPLETED, CANCELLED } from '../../constants/orderStatusTypes.js';

const createOrderValidationSchema = Joi.object({
	userId: Joi.number().integer().required(),
	productId: Joi.number().integer().required(),
});

export const createOrderValidator = (body) => createOrderValidationSchema.validate(body);

const changeOrderStatusValidationSchema = Joi.object({
	status: Joi.string().valid(PROCESSING, COMPLETED, CANCELLED).required(),
});

export const changeOrderStatusValidator = (body) =>
	changeOrderStatusValidationSchema.validate(body);
