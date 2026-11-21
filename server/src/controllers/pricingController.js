import { db } from '../config/db.js';

export const getPricingPlans = async (req, res, next) => {
  try {
    const plans = await db.pricingPlans.findMany();
    res.json({ success: true, count: plans.length, data: plans });
  } catch (error) {
    next(error);
  }
};

export const createPricingPlan = async (req, res, next) => {
  try {
    const plan = await db.pricingPlans.create({ data: req.body });
    res.status(201).json({ success: true, message: 'Pricing plan created.', data: plan });
  } catch (error) {
    next(error);
  }
};

export const updatePricingPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await db.pricingPlans.update({ where: { id }, data: req.body });
    res.json({ success: true, message: 'Pricing plan updated.', data: updated });
  } catch (error) {
    next(error);
  }
};

export const deletePricingPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.pricingPlans.delete({ where: { id } });
    res.json({ success: true, message: 'Pricing plan removed.' });
  } catch (error) {
    next(error);
  }
};
