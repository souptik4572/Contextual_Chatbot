import { prisma } from '../config/prismaConfig.js';

export const doesAdminExist = async (adminId) => {
	const admin = await prisma.admin.findFirst({
		where: { id: adminId, type: ADMIN },
	});
	return !!admin;
};

export const doesProductExist = async (productId) => {
	const product = await prisma.product.findFirst({
		where: { id: productId },
	});
	return !!product;
};

export const doesProductTypeExist = async (productTypeId) => {
	const productType = await prisma.productType.findFirst({
		where: { id: productTypeId },
	});
	return !!productType;
};

export const doesUserExist = async (userId) => {
	const user = await prisma.user.findFirst({
		where: { id: userId },
	});
	return !!user;
};

export const doesOrderExist = async (orderId) => {
	const order = await prisma.order.findFirst({
		where: { id: orderId },
	});
	return !!order;
};
