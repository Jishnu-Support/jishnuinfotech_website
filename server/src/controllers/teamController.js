import { db } from '../config/db.js';

export const getTeam = async (req, res, next) => {
  try {
    const team = await db.teamMembers.findMany();
    res.json({ success: true, count: team.length, data: team });
  } catch (error) {
    next(error);
  }
};

export const createTeamMember = async (req, res, next) => {
  try {
    const member = await db.teamMembers.create({ data: req.body });
    res.status(201).json({ success: true, message: 'Team member added.', data: member });
  } catch (error) {
    next(error);
  }
};

export const updateTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await db.teamMembers.update({ where: { id }, data: req.body });
    res.json({ success: true, message: 'Team member updated.', data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.teamMembers.delete({ where: { id } });
    res.json({ success: true, message: 'Team member removed.' });
  } catch (error) {
    next(error);
  }
};
