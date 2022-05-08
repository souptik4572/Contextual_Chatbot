import { StatusCodes } from 'http-status-codes';

export const handleSuccess = ({ res, status = StatusCodes.OK, message, data }) => {
	return res.status(status).json({
		success: true,
		message,
		data,
	});
};

export const handleError = ({ res, status = StatusCodes.INTERNAL_SERVER_ERROR, message }) => {
	return res.status(status).json({
		success: false,
		message,
	});
};
