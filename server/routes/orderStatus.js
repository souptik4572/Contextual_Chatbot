import express from 'express';
import {
	createOrderStatus,
	deleteOrderStatus,
	getAllOrderStatuses,
} from '../controllers/orderStatus.js';
import { isSuperAdmin } from '../middlewares/adminCheck.js';
import { authProtection } from '../middlewares/authStrategy.js';
import { convertToNumber } from '../middlewares/convertToNumber.js';

const router = express.Router();

router.get('/', getAllOrderStatuses);

router.put('/', authProtection(true), createOrderStatus);

router.delete(
	'/:orderStatusId',
	[convertToNumber, authProtection(true), isSuperAdmin],
	deleteOrderStatus
);

export default router;
