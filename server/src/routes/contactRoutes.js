import express from 'express';
import {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateBody, contactSchema } from '../middleware/validation.js';
import { formSubmissionLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', formSubmissionLimiter, validateBody(contactSchema), submitContact);

// Admin Protected
router.get('/', protectAdmin, getContacts);
router.patch('/:id/status', protectAdmin, updateContactStatus);
router.delete('/:id', protectAdmin, deleteContact);

export default router;
