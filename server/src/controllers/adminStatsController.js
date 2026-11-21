import { db } from '../config/db.js';

export const getAdminOverview = async (req, res, next) => {
  try {
    const overview = await db.stats.getOverview();
    res.json({
      success: true,
      data: {
        ...overview,
        databaseType: db.isConnectedToPostgres ? 'PostgreSQL (Prisma)' : 'In-Memory / Dev Cluster',
        serverTimestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};
