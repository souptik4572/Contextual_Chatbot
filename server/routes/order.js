import express from 'express';
import {
	getAllOrders,
	createOrder,
	changeOrderStatus,
	deleteOrder,
	getOrder,
} from '../controllers/order.js';
import { isSuperAdmin } from '../middlewares/adminCheck.js';
import { authProtection } from '../middlewares/authStrategy.js';

const router = express.Router();

router.get('/', authProtection(true), getAllOrders);

router.put('/', authProtection(true), createOrder);

router.get('/:orderId', authProtection(true), getOrder);

router.patch('/:orderId/change-status', authProtection(true), changeOrderStatus);

router.delete('/:orderId', [authProtection(true), isSuperAdmin], deleteOrder);

export default router;
