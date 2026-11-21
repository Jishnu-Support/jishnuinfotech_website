import { db } from '../config/db.js';

export const subscribeNewsletter = async (req, res, next) => {
  try {
    const { email } = req.body;
    const cleanEmail = email.toLowerCase().trim();

    const existing = await db.newsletterSubscribers.findUnique({ where: { email: cleanEmail } });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to the Jishnu Infotech newsletter!',
      });
    }

    const subscriber = await db.newsletterSubscribers.create({
      data: {
        email: cleanEmail,
        source: 'website_footer',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing! You will receive our latest insights and tech updates.',
      data: { email: subscriber.email },
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await db.newsletterSubscribers.findMany();
    res.json({ success: true, count: subscribers.length, data: subscribers });
  } catch (error) {
    next(error);
  }
};

export const deleteSubscriber = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.newsletterSubscribers.delete({ where: { id } });
    res.json({ success: true, message: 'Subscriber removed.' });
  } catch (error) {
    next(error);
  }
};
