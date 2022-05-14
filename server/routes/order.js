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
import { convertToNumber } from '../middlewares/convertToNumber.js';

const router = express.Router();

router.get('/', authProtection(true), getAllOrders);

router.put('/', authProtection(true), createOrder);

router.get('/:orderId', [convertToNumber, authProtection(true)], getOrder);

router.patch('/:orderId/change-status', [convertToNumber, authProtection(true)], changeOrderStatus);

router.delete('/:orderId', [convertToNumber, authProtection(true), isSuperAdmin], deleteOrder);

export default router;
