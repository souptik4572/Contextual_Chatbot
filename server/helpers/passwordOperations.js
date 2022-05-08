import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
	const hashedPassword = await bcrypt.hash(password, salt);
	return hashedPassword;
};

export const isPasswordMatching = async (givenPassword, actualPassword) => {
	return await bcrypt.compare(givenPassword, actualPassword);
};
