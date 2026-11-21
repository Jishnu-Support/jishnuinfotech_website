import { db } from '../config/db.js';

export const getProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const where = {};
    if (category && category !== 'All') where.category = category;
    if (featured !== undefined) where.featured = featured === 'true';

    const projects = await db.projects.findMany({ where });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    next(error);
  }
};

export const getProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const project = await db.projects.findUnique({ where: { slug } });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found.' });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const slug = req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const project = await db.projects.create({
      data: {
        ...req.body,
        slug,
      },
    });
    res.status(201).json({ success: true, message: 'Project created successfully.', data: project });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await db.projects.update({
      where: { id },
      data: req.body,
    });
    res.json({ success: true, message: 'Project updated successfully.', data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.projects.delete({ where: { id } });
    res.json({ success: true, message: 'Project deleted successfully.' });
  } catch (error) {
    next(error);
  }
};
