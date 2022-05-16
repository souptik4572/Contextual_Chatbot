import express from 'express';
import { createFaq, deleteFaq, filterFaqs } from '../controllers/faq.js';
import { authProtection } from '../middlewares/authStrategy.js';
import { isSuperAdmin } from '../middlewares/adminCheck.js';
import { convertToNumber } from '../middlewares/convertToNumber.js';

const router = express.Router();

router.get('/', convertToNumber, filterFaqs);

router.put('/', [authProtection(true)], createFaq);

router.delete('/:faqId', [convertToNumber, authProtection(true), isSuperAdmin], deleteFaq);

export default router;
