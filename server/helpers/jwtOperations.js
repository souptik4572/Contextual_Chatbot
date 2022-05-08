import dotenv from 'dotenv';
dotenv.config();

const { ACCESS_SECRET_TOKEN } = process.env;

import jwt from 'jsonwebtoken';

export const verifyJwt = (token) => jwt.verify(token, ACCESS_SECRET_TOKEN);

export const createJwt = (data, expiry = '3 days') =>
	jwt.sign(data, ACCESS_SECRET_TOKEN, {
		expiresIn: expiry,
	});
