import Joi from 'joi';

const createProductTypeValidationSchema = Joi.object({
	name: Joi.string().required(),
});

export const createProductTypeValidator = (body) => createProductTypeValidationSchema.validate(body);
