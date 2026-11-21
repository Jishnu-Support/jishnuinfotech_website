import express from 'express';
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateBody, projectSchema } from '../middleware/validation.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);

// Admin Protected
router.post('/', protectAdmin, validateBody(projectSchema), createProject);
router.put('/:id', protectAdmin, updateProject);
router.delete('/:id', protectAdmin, deleteProject);

export default router;
