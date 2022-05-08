import Joi from 'joi';

const adminRegistrationValidationSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

export const adminRegistrationValidator = (body) =>
	adminRegistrationValidationSchema.validate(body);

const adminLoginValidationSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

export const adminLoginValidator = (body) => adminLoginValidationSchema.validate(body);
