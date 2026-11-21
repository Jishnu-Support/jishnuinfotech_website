import { db } from '../config/db.js';

export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await db.testimonials.findMany();
    res.json({ success: true, count: testimonials.length, data: testimonials });
  } catch (error) {
    next(error);
  }
};

export const createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await db.testimonials.create({ data: req.body });
    res.status(201).json({ success: true, message: 'Testimonial added.', data: testimonial });
  } catch (error) {
    next(error);
  }
};

export const updateTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await db.testimonials.update({ where: { id }, data: req.body });
    res.json({ success: true, message: 'Testimonial updated.', data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.testimonials.delete({ where: { id } });
    res.json({ success: true, message: 'Testimonial removed.' });
  } catch (error) {
    next(error);
  }
};
