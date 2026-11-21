import express from 'express';
import { login, getMe } from '../controllers/authController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateBody, loginSchema } from '../middleware/validation.js';
import { authLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/login', authLimiter, validateBody(loginSchema), login);
router.get('/me', protectAdmin, getMe);

export default router;
