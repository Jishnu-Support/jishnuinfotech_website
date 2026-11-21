import express from 'express';
import {
  getBlogPosts,
  getBlogPostBySlug,
  getAllBlogPostsAdmin,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} from '../controllers/blogController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateBody, blogSchema } from '../middleware/validation.js';

const router = express.Router();

router.get('/', getBlogPosts);
router.get('/admin/all', protectAdmin, getAllBlogPostsAdmin);
router.get('/:slug', getBlogPostBySlug);

// Admin Protected
router.post('/', protectAdmin, validateBody(blogSchema), createBlogPost);
router.put('/:id', protectAdmin, updateBlogPost);
router.delete('/:id', protectAdmin, deleteBlogPost);

export default router;
