import express from 'express';
import {
  getTeam,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from '../controllers/teamController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getTeam);

// Admin Protected
router.post('/', protectAdmin, createTeamMember);
router.put('/:id', protectAdmin, updateTeamMember);
router.delete('/:id', protectAdmin, deleteTeamMember);

export default router;
