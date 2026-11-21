import { db } from '../config/db.js';
import { sendContactNotification } from '../services/emailService.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const contact = await db.contacts.create({
      data: {
        name,
        email,
        phone: phone || '',
        subject: subject || 'Website Contact Form Submission',
        message,
        ipAddress: String(ipAddress),
      },
    });

    // Send email notification asynchronously
    sendContactNotification(contact).catch((err) => console.warn('Email trigger note:', err.message));

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will contact you within 24 hours.',
      data: {
        id: contact.id,
        name: contact.name,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await db.contacts.findMany();
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    next(error);
  }
};

export const updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // unread, replied, archived
    const updated = await db.contacts.update({
      where: { id },
      data: { status },
    });
    res.json({ success: true, message: 'Inquiry status updated.', data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.contacts.delete({ where: { id } });
    res.json({ success: true, message: 'Inquiry removed.' });
  } catch (error) {
    next(error);
  }
};
