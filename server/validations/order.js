import Joi from 'joi';

const createOrderValidationSchema = Joi.object({
	userId: Joi.number().integer().required(),
	productId: Joi.number().integer().required(),
	orderTypeId: Joi.number().integer().required(),
	orderStatusId: Joi.number().integer().required(),
});

export const createOrderValidator = (body) => createOrderValidationSchema.validate(body);

const changeOrderStatusValidationSchema = Joi.object({
	orderStatusId: Joi.number().integer().required(),
});

export const changeOrderStatusValidator = (body) =>
	changeOrderStatusValidationSchema.validate(body);
