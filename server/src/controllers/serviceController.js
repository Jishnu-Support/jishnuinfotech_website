import { db } from '../config/db.js';

export const getServices = async (req, res, next) => {
  try {
    const services = await db.services.findMany();
    res.json({ success: true, count: services.length, data: services });
  } catch (error) {
    next(error);
  }
};

export const getServiceBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const service = await db.services.findUnique({ where: { slug } });
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found.' });
    }
    res.json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
};

export const createService = async (req, res, next) => {
  try {
    const slug = req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const service = await db.services.create({
      data: {
        ...req.body,
        slug,
      },
    });
    res.status(201).json({ success: true, message: 'Service created successfully.', data: service });
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await db.services.update({
      where: { id },
      data: req.body,
    });
    res.json({ success: true, message: 'Service updated successfully.', data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.services.delete({ where: { id } });
    res.json({ success: true, message: 'Service deleted successfully.' });
  } catch (error) {
    next(error);
  }
};
