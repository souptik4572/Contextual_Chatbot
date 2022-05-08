import express from 'express';
import {
	createProductType,
	deleteProductType,
	getAllProductTypes,
} from '../controllers/productType.js';
import { isSuperAdmin } from '../middlewares/adminCheck.js';
import { authProtection } from '../middlewares/authStrategy.js';

const router = express.Router();

router.get('/', getAllProductTypes);

router.put('/', authProtection(true), createProductType);

router.delete('/:productTypeId', [authProtection(true), isSuperAdmin], deleteProductType);

export default router;
