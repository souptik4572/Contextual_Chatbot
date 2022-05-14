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
import { convertToNumber } from '../middlewares/convertToNumber.js';

const router = express.Router();

router.put('/register', registerAdmin);

router.post('/login', loginAdmin);

router.get('/', [authProtection(true), isSuperAdmin], getAllAdmins);

router.patch('/verify-user/:userId', [convertToNumber, authProtection(true)], verifyUser);

router.delete('/:adminId', [convertToNumber, authProtection(true), isSuperAdmin], deleteAdmin);

router.patch(
	'/:adminId/upgrade',
	[convertToNumber, authProtection(true), isSuperAdmin],
	upgradeAdmin
);

export default router;
