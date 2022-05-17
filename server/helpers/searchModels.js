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

export const doesUserExist = async (userId, shouldReturnUser = false) => {
	const user = await prisma.user.findFirst({
		where: { id: userId },
	});
	if (shouldReturnUser) return user;
	return !!user;
};

export const doesOrderTypeExist = async (orderTypeId) => {
	const orderType = await prisma.orderType.findFirst({
		where: { id: orderTypeId },
	});
	return !!orderType;
};

export const doesOrderStatusExist = async (orderStatusId) => {
	const orderStatus = await prisma.orderStatus.findFirst({
		where: { id: orderStatusId },
	});
	return !!orderStatus;
};

export const doesOrderExist = async (orderId) => {
	const order = await prisma.order.findFirst({
		where: { id: orderId },
	});
	return !!order;
};

export const doesFaqExist = async (faqId) => {
	const faq = await prisma.faq.findFirst({
		where: { id: faqId },
	});
	return !!faq;
};

export const doesAllExist = async ({
	adminId,
	userId,
	productId,
	productTypeId,
	orderId,
	orderTypeId,
	orderStatusId,
	faqId,
}) => {
	if (!!adminId && !(await doesAdminExist(adminId))) return 'Admin with given id does not exist';
	if (!!userId && !(await doesUserExist(userId))) return 'User with given id does not exist';
	if (!!productTypeId && !(await doesProductTypeExist(productTypeId)))
		return 'Product type with given id does not exist';
	if (!!productId && !(await doesProductExist(productId)))
		return 'Product with given id does not exist';
	if (!!orderTypeId && !(await doesOrderTypeExist(orderTypeId)))
		return 'Order type with given id does not exist';
	if (!!orderStatusId && !(await doesOrderStatusExist(orderStatusId)))
		return 'Order status with given id does not exist';
	if (!!orderId && !(await doesOrderExist(orderId))) return 'Order with given id does not exist';
	if (!!faqId && !(await doesFaqExist(faqId))) return 'Faq with given id does not exist';
	return null;
};
