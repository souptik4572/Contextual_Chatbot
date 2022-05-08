import express from 'express';
import { getAllOwnedOrders, getAllUsers, loginUser, registerUser } from '../controllers/user.js';
import { authProtection } from '../middlewares/authStrategy.js';

const router = express.Router();

router.get('/', authProtection(true), getAllUsers);

router.put('/register', registerUser);

router.post('/login', loginUser);

router.get('/orders', authProtection(), getAllOwnedOrders);

export default router;
