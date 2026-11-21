import jwt from 'jsonwebtoken';
import { ENV } from '../config/env.js';
import { db } from '../config/db.js';

export const protectAdmin = async (req, res, next) => {
  try {
    let token = null;
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No authentication token provided.',
      });
    }

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    const user = await db.users.findUnique({ where: { id: decoded.id } });

    if (!user || user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Insufficient administrative privileges.',
      });
    }

    req.user = { id: user.id, email: user.email, name: user.name, role: user.role };
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Session expired. Please log in again.' });
    }
    return res.status(401).json({ success: false, message: 'Invalid authentication token.' });
  }
};
