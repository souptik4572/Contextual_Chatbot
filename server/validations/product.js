import Joi from 'joi';

const createProductValidationSchema = Joi.object({
	name: Joi.string().required(),
	price: Joi.number().required(),
	productTypeId: Joi.number().integer().required(),
});

export const createProductValidator = (body) => createProductValidationSchema.validate(body);
