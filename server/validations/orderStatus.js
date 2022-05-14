import Joi from 'joi';

const createOrderStatusValidationSchema = Joi.object({
	name: Joi.string().required(),
});

export const createOrderStatusValidator = (body) =>
	createOrderStatusValidationSchema.validate(body);
