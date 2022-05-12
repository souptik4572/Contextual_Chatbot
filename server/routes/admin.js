import express from 'express';
import {
	deleteAdmin,
	getAllAdmins,
	loginAdmin,
	registerAdmin,
	upgradeAdmin,
	verifyUser,
} from '../controllers/admin.js';
import { isSuperAdmin } from '../middlewares/adminCheck.js';
import { authProtection } from '../middlewares/authStrategy.js';

const router = express.Router();

router.put('/register', registerAdmin);

router.post('/login', loginAdmin);

router.get('/', [authProtection(true), isSuperAdmin], getAllAdmins);

router.patch('/verify-user/:userId', authProtection(true), verifyUser);

router.delete('/:adminId', [authProtection(true), isSuperAdmin], deleteAdmin);

router.patch('/:adminId/upgrade', [authProtection(true), isSuperAdmin], upgradeAdmin);

export default router;
