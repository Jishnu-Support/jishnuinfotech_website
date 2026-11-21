import express from 'express';
import {
  subscribeNewsletter,
  getSubscribers,
  deleteSubscriber,
} from '../controllers/newsletterController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateBody, newsletterSchema } from '../middleware/validation.js';
import { formSubmissionLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', formSubmissionLimiter, validateBody(newsletterSchema), subscribeNewsletter);

// Admin Protected
router.get('/', protectAdmin, getSubscribers);
router.delete('/:id', protectAdmin, deleteSubscriber);

export default router;
