import express from 'express';

import userRoutes from './user.js';
import adminRoutes from './admin.js';
import productTypeRoutes from './productType.js';
import productRoutes from './product.js';
import orderTypeRoutes from './orderType.js';
import orderStatusRoutes from './orderStatus.js';
import orderRoutes from './order.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/admins', adminRoutes);
router.use('/product-types', productTypeRoutes);
router.use('/products', productRoutes);
router.use('/order-types', orderTypeRoutes);
router.use('/order-statuses', orderStatusRoutes);
router.use('/orders', orderRoutes);

export default router;
