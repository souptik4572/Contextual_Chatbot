import Joi from 'joi';

const createOrderTypeValidationSchema = Joi.object({
	name: Joi.string().required(),
});

export const createOrderTypeValidator = (body) => createOrderTypeValidationSchema.validate(body);
