import express from 'express';
import { getAdminOverview } from '../controllers/adminStatsController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/overview', protectAdmin, getAdminOverview);

export default router;
