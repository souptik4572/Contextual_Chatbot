import Joi from 'joi';

const userRegistrationValidationSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
	mobile: Joi.string()
		.length(10)
		.pattern(/^[0-9]+$/)
		.required(),
	pan: Joi.string()
		.length(10)
		.pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
		.required(),
});

export const userRegistrationValidator = (body) => userRegistrationValidationSchema.validate(body);

const userLoginValidationSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

export const userLoginValidator = (body) => userLoginValidationSchema.validate(body);
