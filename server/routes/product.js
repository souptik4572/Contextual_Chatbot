import express from 'express';
import { createProduct, deleteProduct, getAllProducts } from '../controllers/product.js';
import { isSuperAdmin } from '../middlewares/adminCheck.js';
import { authProtection } from '../middlewares/authStrategy.js';
import { convertToNumber } from '../middlewares/convertToNumber.js';

const router = express.Router();

router.get('/', getAllProducts);

router.put('/', authProtection(true), createProduct);

router.delete('/:productId', [convertToNumber, authProtection(true), isSuperAdmin], deleteProduct);

export default router;
