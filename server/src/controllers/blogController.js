import { db } from '../config/db.js';

export const getBlogPosts = async (req, res, next) => {
  try {
    const { category, tag } = req.query;
    const where = { published: true };
    if (category) where.category = category;

    let posts = await db.blogPosts.findMany({ where });
    if (tag) {
      posts = posts.filter((p) => p.tags && p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
    }
    res.json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    next(error);
  }
};

export const getAllBlogPostsAdmin = async (req, res, next) => {
  try {
    const posts = await db.blogPosts.findMany();
    res.json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    next(error);
  }
};

export const getBlogPostBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const post = await db.blogPosts.findUnique({ where: { slug } });
    if (!post) {
      return res.status(404).json({ success: false, message: 'Blog post not found.' });
    }
    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

export const createBlogPost = async (req, res, next) => {
  try {
    const slug = req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const post = await db.blogPosts.create({
      data: {
        ...req.body,
        slug,
      },
    });
    res.status(201).json({ success: true, message: 'Blog article published.', data: post });
  } catch (error) {
    next(error);
  }
};

export const updateBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await db.blogPosts.update({ where: { id }, data: req.body });
    res.json({ success: true, message: 'Blog article updated.', data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.blogPosts.delete({ where: { id } });
    res.json({ success: true, message: 'Blog article removed.' });
  } catch (error) {
    next(error);
  }
};
