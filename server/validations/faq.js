import Joi from 'joi';

const createFaqValidationSchema = Joi.object({
	question: Joi.string().required(),
	description: Joi.string().required(),
	orderId: Joi.number().integer(),
	productId: Joi.number().integer(),
	orderStatusId: Joi.number().integer(),
	orderTypeId: Joi.number().integer(),
});

export const createFaqValidator = (body) => createFaqValidationSchema.validate(body);


