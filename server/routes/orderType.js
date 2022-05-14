import express from 'express';
import { createOrderType, deleteOrderType, getAllOrderTypes } from '../controllers/orderType.js';
import { isSuperAdmin } from '../middlewares/adminCheck.js';
import { authProtection } from '../middlewares/authStrategy.js';
import { convertToNumber } from '../middlewares/convertToNumber.js';

const router = express.Router();

router.get('/', getAllOrderTypes);

router.put('/', authProtection(true), createOrderType);

router.delete(
	'/:orderTypeId',
	[convertToNumber, authProtection(true), isSuperAdmin],
	deleteOrderType
);

export default router;
