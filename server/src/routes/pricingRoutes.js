import express from 'express';
import {
  getPricingPlans,
  createPricingPlan,
  updatePricingPlan,
  deletePricingPlan,
} from '../controllers/pricingController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getPricingPlans);

// Admin Protected
router.post('/', protectAdmin, createPricingPlan);
router.put('/:id', protectAdmin, updatePricingPlan);
router.delete('/:id', protectAdmin, deletePricingPlan);

export default router;
